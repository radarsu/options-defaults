import { defaults } from '../src';

const someDefaults = {};

const someOptions = {
    __proto__: {
        polluted: true,
    },
};

defaults(someDefaults, someOptions);
const isPolluted = ({} as any).polluted ? `Polluted` : `Not polluted`;
console.log(isPolluted);
