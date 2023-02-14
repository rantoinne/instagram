import { COLOR_CODES } from './enums';

export type COLOR_CODE_TYPE = COLOR_CODES | string;

export type BASIC_DIMENSIONS = {
  x?: number;
  y?: number;
  width: number;
  height: number;
};
