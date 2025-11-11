interface InSphereOptions {
  radius: number;
}

declare module "maath/random/dist/maath-random.esm" {
  export function inSphere(
    array: Float32Array,
    options: InSphereOptions
  ): Float32Array;
}

declare module "maath/random/dist/maath-random.esm.js" {
  export function inSphere(
    array: Float32Array,
    options: InSphereOptions
  ): Float32Array;
}

