import { defaults } from '../src';

class TestLogger {
    constructor(public name = `TestLogger`) {}

    log() {
        console.log(`Call from ${this.name}`);
    }
}

const someDefaults = {
    console,
    nested: {
        property: 'default',
        shouldBeDefault: 'default',
        array: ['default1', 'default2'],
    },
};

const someOptions = {
    nested: {
        property: 'overriden',
        array: ['overriden1'],
    },
    array: ['overriden'],
};

const options = defaults(
    someDefaults,
    someOptions,
    {
        console: {
            log: () => {
                console.log(`TEST`);
            },
        },
    },
    {
        console: new TestLogger(),
    },
);

options.console.log(`log`);
console.log(options);
