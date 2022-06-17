import type { Scripts } from '@radrat/cli';

const scripts: Scripts = async (cli) => {
    await cli.run({
        name: `build`,
        command: `rm -rf dist && npx rollup -c ./config/rollup.config.js`,
    });

    await cli.run({
        name: `publish`,
        command: [`npx rr build`, `npm publish --access=public`, `npx rr publish.git`].join(` && `),
        hiddenFromHelp: true,
    });

    await cli.run({
        name: `publish.git`,
        command: [
            `git init`,
            `git remote add origin https://github.com/radarsu/${cli.context.packageJson.name}`,
            `git add .`,
            `git commit -m 'feat: ${cli.context.packageJson.version}'`,
            `git push origin main --force`,
            `rm -rf ./.git`,
        ].join(` && `),
        hiddenFromHelp: true,
    });

    await cli.loadPlugins([
        {
            name: `@radrat-scripts/package`,
        },
        {
            name: `@radrat-scripts/readme`,
        },
    ]);
};

export default scripts;
