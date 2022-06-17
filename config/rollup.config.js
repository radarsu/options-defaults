import * as packageJson from '../package.json';
import * as typescript from '@rollup/plugin-typescript';

import { terser } from 'rollup-plugin-terser';

export default {
    input: `./src/index.ts`,
    output: [
        {
            file: packageJson.main,
            format: `cjs`,
        },
        {
            file: packageJson.module,
            format: `es`,
        },
        {
            file: packageJson.browser['./dist/index.js'],
            format: `iife`,
            name: `defaults`,
        },
    ],
    external: [...Object.keys(packageJson.dependencies || {})],
    plugins: [
        typescript.default({
            tsconfig: `${__dirname}/../tsconfig.json`,
            declarationDir: ``,
        }),
        terser(),
    ],
};
