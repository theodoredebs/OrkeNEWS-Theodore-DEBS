import type { Config } from "jest";

const config: Config = {
  verbose: true,
  rootDir: "./",
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.(t|j)sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testTimeout: 5000,
  testEnvironment: "jsdom",
};

export default config;
