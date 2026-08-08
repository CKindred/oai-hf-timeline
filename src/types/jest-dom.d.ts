declare module "bun:test" {
  interface Matchers<T> {
    toBeInTheDocument(): T;
  }
}
