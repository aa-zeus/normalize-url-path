import typescript from "@rollup/plugin-typescript";

/**
 * @type {import("rollup").RollupOptions}
 */
const config = {
  input: "index.ts",
  output: [
    {
      format: "cjs",
      dir: "dist",
      sourcemap: true,
      entryFileNames: "[name].cjs",
    },
    {
      format: "es",
      dir: "dist",
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
};

export default config;
