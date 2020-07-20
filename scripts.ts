import { IRadratCli } from '@radrat/cli';
import { packageScripts } from '../../tools/rr/package';
// import * as findUpLib from 'find-up';
// import * as path from 'path';
// import { tsImport } from 'ts-import';

const scripts = async (cli: IRadratCli) => {
    // const nodeModules = path.resolve(process.cwd(), `node_modules`);
    // const findUp: typeof findUpLib = await import(`${nodeModules}/find-up`);
    const scope = `ts-options-defaults`;
    // const appRootPackageJson = await findUp(`workspace.json`);
    // const appRoot = path.dirname(appRootPackageJson);
    // const absolutePackagePath = path.resolve(appRoot, `./tools/rr/package.ts`);
    // const packageScripts = (await tsImport.compile(absolutePackagePath)).default;
    await packageScripts(cli, scope);
};

export default scripts;
