import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/plugin-ts";

export default defineConfig({
  input: { path: "./openapi-specs.json" },
  output: {
    path: "./__generated__",
  },
  plugins: [pluginOas(), pluginTs()],
});
