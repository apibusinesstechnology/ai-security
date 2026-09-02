export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
        useESM: true
      }
    ],
    '^.+\\.jsx?$': 'babel-jest'
  },

  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },

  modulePathIgnorePatterns: [
    "<rootDir>/frontend_ai_security/.stryker-tmp",
    "<rootDir>/frontend_ai_security/.stryker-tmp/.*"
  ],

  roots: ["<rootDir>/dossier_test"]
};


