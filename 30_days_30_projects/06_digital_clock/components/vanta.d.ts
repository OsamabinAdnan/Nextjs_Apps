// declare module 'vanta/src/vanta.net' {
//     const VANTA: any
//     export default VANTA
// }

// declare module 'vanta/src/vanta.waves' {
//     const VANTA: any
//     export default VANTA
// }

// declare module 'vanta/src/vanta.fog' {
//     const VANTA: any
//     export default VANTA
// }
  
// declare module 'vanta/src/vanta.birds' {
//     const VANTA: any
//     export default VANTA
// }
  
// declare module 'vanta/src/vanta.clouds' {
//     const VANTA: any
//     export default VANTA
// }
  
// declare module 'vanta/src/vanta.halo' {
//     const VANTA: any
//     export default VANTA
// }

// declare module 'vanta/dist/vanta.dots.min' {
//     const VANTA: any
//     export default VANTA
// }

// Declare a custom module for Vanta.js's 'globe' effect.
// This is necessary because Vanta.js does not ship with TypeScript type definitions by default,
// and importing from a subpath like 'vanta/src/vanta.globe' would otherwise raise a type error.

declare module 'vanta/src/vanta.globe' {
    
    // We declare a constant named VANTA that represents the exported module.
    // Since there is no type definition available, we set its type to `any`,
    // which disables TypeScript's type checking for it. This is a temporary workaround
    // until official types are available or we create our own.

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const VANTA: any

    // Export the VANTA constant as the default export of this module,
    // allowing you to import it like this in your code:
    // `import GLOBE from 'vanta/src/vanta.globe'`
    export default VANTA
}
