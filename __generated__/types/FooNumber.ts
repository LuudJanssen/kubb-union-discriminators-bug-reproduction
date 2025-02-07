import type { FooBase } from "./FooBase.ts";

export type FooNumber = FooBase & {
  /**
   * @type number
   */
  value: number;
};
