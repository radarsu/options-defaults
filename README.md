# ts-options-defaults

`Object.assign({}, defaults, options)` and equivalent with destructing `{...defaults, ...options}` come with a pitfall of creating only a _shallow copy_. Lodash `_.merge` works on deep properties, but it merges arrays and that usually makes no sense in the context of default options (also it mutates first element; this package doesn't). **ts-options-defaults** fixes that problem - **it merges objects deeply, overrides arrays and classes** (different than Object) plus the result remains strongly typed.

> Options-defaults design pattern implementation for reliable configuration.

# Usage

`npm i ts-options-defaults`

# Design pattern

```ts
import { defaults } from 'ts-options-defaults';

export interface ISomeOptions {
    logger?: Partial<Console>;
}

export class Something {
    static defaults = {
        logger: console,
    };

    options: ISomeOptions & typeof Something.defaults;
    constructor(options?: ISomeOptions) {
        this.options = defaults(Rat.defaults, options);
    }
}
```

# Behavior

```ts
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

options.console.log(`log`); // "Call from TestLogger"
options.console.debug(`debug`); // "debug"

// options will be:
{
    "nested": {
        "property": "overriden",
        "shouldBeDefault": "default",
        "array": [
            "overriden1"
        ]
    },
    "array": [
        "overriden"
    ]
}

// someDefaults will not be mutated!
```
