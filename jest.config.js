export default {
    testEnvironment: 'node',
    roots: [
        '<rootDir>/tests/unit',
        '<rootDir>/tests/integration',
        '<rootDir>/tests/e2e'
    ],
    testMatch: [
        '**/*.test.js',
        '**/test-*.js'
    ],
    moduleFileExtensions: ['js'],
    collectCoverageFrom: [
        'src/**/*.{js}',
        '!src/**/*.test.js',
    ],
    coverageDirectory: '<rootDir>/coverage',
    verbose: true,
};
