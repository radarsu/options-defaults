var defaults=function(e){"use strict";const t=["__proto__","constructor","prototype"],r=(e,...o)=>(o.forEach((o=>{o&&"object"==typeof o&&Object.entries(o).forEach((([o,c])=>{if(t.includes(o))return;const n="object"==typeof c,u=n&&"Object"!==(null==c?void 0:c.constructor.name);null===c||!n||Array.isArray(c)||u?e[o]=c:(e[o]||(e[o]={}),r(e[o],c))}))})),e);return e.defaults=(e,t,o,c,n,u,s,...a)=>r({},e,t,o,c,n,u,s,...a),e.merge=r,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
