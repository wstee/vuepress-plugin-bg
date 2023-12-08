export interface BgOptions<T> {
  type?: string;
  zIndex?: number;
  opacity?: number;
  options?: T
}
export interface LineOptions {
  color?: string;
  count?: number;
}