const restrictedKeys = [`__proto__`, `constructor`, `prototype`];

export const merge = (object: any, ...sources: any[]) => {
    sources.forEach((source) => {
        // Ignore invalid source objects.
        if (!source || typeof source !== `object`) {
            return;
        }

        Object.entries(source).forEach(([key, value]) => {
            if (restrictedKeys.includes(key)) {
                return;
            }

            // Handle simple types (null, string, number, boolean) and members of classes different than Object.
            const isObject = typeof value === `object`;
            const isInstanceOfClass = isObject && (value as any)?.constructor.name !== `Object`;

            if (value === null || !isObject || Array.isArray(value) || isInstanceOfClass) {
                object[key] = value;
                return;
            }

            // Handle empty objects.
            if (!object[key]) {
                object[key] = {};
            }

            // Handle objects.
            merge(object[key], value);
        });
    });

    return object;
};

/**
 * Merges objects deeply, overrides arrays and classes, does not mutate objects.
 */
/* eslint-disable max-params-no-constructor/max-params-no-constructor */
export const defaults = <Defaults, Source, Source2, Source3, Source4, Source5, Source6>(
    defaultOptions: Defaults,
    source: Source,
    source2?: Source2,
    source3?: Source3,
    source4?: Source4,
    source5?: Source5,
    source6?: Source6,
    ...args: any[]
): Defaults & Source & Source2 & Source3 & Source4 & Source5 => {
    return merge({}, defaultOptions, source, source2, source3, source4, source5, source6, ...args);
};
