import { ISourceOptions } from '@tsparticles/engine';

export interface BgOptions {
  type?: T;
  zIndex?: number;
  opacity?: number;
  options?: OptionsList[T]
}
interface OptionsList {
  line: LineOptions
  particles: ISourceOptions
}
export interface LineOptions {
  color?: string;
  count?: number;
}