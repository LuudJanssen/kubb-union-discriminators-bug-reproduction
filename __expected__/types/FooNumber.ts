import type { FooBase } from "./FooBase.ts";

export type FooNumber = Omit<FooBase, "$type"> & {
  /**
   * @type string
   */
  $type: "type-number";

  /**
   * @type number
   */
  value: number;
};
