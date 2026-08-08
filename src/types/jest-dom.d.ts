declare module "bun:test" {
  interface Matchers<T> {
    toBeInTheDocument(): T;
    toHaveAttribute(name: string, value?: string): T;
  }
}
