/* eslint-disable */

const plugins = [
  [
    "babel-plugin-import",
    {
      libraryName: "@mui/material",
      libraryDirectory: "",
      camel2DashComponentName: false,
    },
    "core",
  ],
];

module.exports = function (api) {
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          corejs: 3,
          useBuiltIns: "usage",
        },
      ],
      "@babel/preset-typescript",
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
    ],
    ...(!api.env("test") && {
      plugins,
      ignore: ["**/*.test.ts", "**/*.test.tsx"],
    }),
  };
};
