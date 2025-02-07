import type { FooBase } from "./FooBase.ts";

export type FooString = FooBase & {
  /**
   * @type string
   */
  value: string;
};
