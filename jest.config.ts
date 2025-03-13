// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('ts-jest').JestConfigWithTsJest} */
const baseJestConfig = {
  rootDir: '.',
  clearMocks: true,
  injectGlobals: true,
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  coveragePathIgnorePatterns: [
    'types.ts',
    'src/core/**',
    'src/app/**/*',
    'src/components/molecules/**',
    'src/components/atoms/**',
    'src/data-layer/**',
    '!src/mocks/**/*',
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironmentOptions: {
    url: 'http://localhost:3000',
  },
};

module.exports = createJestConfig(baseJestConfig);
