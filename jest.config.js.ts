module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    rootDir: 'src',
    testRegex: '.*\\.test\\.ts$',
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    coverageDirectory: '../coverage',
    collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],
};
