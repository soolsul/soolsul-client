import * as CracoAlias from "craco-alias";

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "tsconfig.path",
      },
    },
  ],
};
