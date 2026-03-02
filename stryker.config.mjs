/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  testRunner: 'jest',
  ignoreStatic: true,
  mutate: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!**/next-env.d.ts',
    '!**/*.d.ts',
    '!**/app/layout.tsx',
    '!**/app/page.tsx',
    '!**/pages/_app.tsx',
    '!**/pages/_document.tsx',
  ],
  thresholds: {
    high: 80,
    low: 80,
    break: 80,
  },
};

export default config;
