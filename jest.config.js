module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'node',
  testEnvironment: 'jsdom',
  roots: ["<rootDir>/src/"],
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  globals: {
    'ts-jest': {
      tsConfig: "tsconfig.json"
    }
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  moduleNameMapper: {
    "^#/(.+)": "<rootDir>/src/$1"
  }
};
