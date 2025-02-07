import type { FooBase } from "./FooBase.ts";

export type FooString = Omit<FooBase, "$type"> & {
  /**
   * @type string
   */
  $type: "type-string";

  /**
   * @type string
   */
  value: string;
};
