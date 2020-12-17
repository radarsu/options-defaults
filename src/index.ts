export const merge = (object: any, ...sources: any[]) => {
    sources.forEach((source) => {
        // Ignore invalid source objects.
        if (!source || typeof source !== 'object') {
            return;
        }

        Object.entries(source).forEach(([key, value]) => {
            if (key === '__proto__' || key === 'constructor' || key === 'prototype')
            {
                return;
            }
            // Handle simple types and members of classes different than Object.
            if (typeof value !== 'object' || Array.isArray(value) || value.constructor.name !== 'Object') {
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

export function defaults<Defaults, Source, Source2, Source3, Source4, Source5>(
    object: Defaults,
    source: Source,
    source2?: Source2,
    source3?: Source3,
    source4?: Source4,
    source5?: Source5,
): Defaults & Source & Source2 & Source3 & Source4 & Source5 {
    return merge({}, ...arguments);
}
