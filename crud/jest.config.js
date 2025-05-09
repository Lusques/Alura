module.exports = {
  preset: "jest-preset-angular",
  testEnvironment: "jsdom",
  globalSetup: "jest-preset-angular/global-setup",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],

  testMatch: ["**/+(*.)+(spec).+(ts)"],

  transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$|@angular|rxjs)"],

  transform: {
    "^.+\\.(ts|js|mjs|html|svg)$": "jest-preset-angular",
  },

  moduleFileExtensions: ["ts", "js", "mjs", "html", "json"],

  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.spec.json",
      stringifyContentPathRegex: "\\.(html|svg)$",
    },
  },
};
