export default {
    testEnvironment: 'jsdom',
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironmentOptions: {
        html: '<html lang="fr-FR"></html>',
        url: 'https://jestjs.io/',
        userAgent: 'Agent/007',
    },
    globals: {
      'ts-jest': {
          tsconfig: '<rootDir>/tsconfig.test.json',
      },
  },
}