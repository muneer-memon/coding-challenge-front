module.exports = {
    testEnvironment: 'jsdom', // Default for React
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Path to your setup file
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest', // Use babel for JavaScript and TypeScript files
        '^.+\\.svg$': 'jest-transform-stub', // Handle SVG imports
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
    },
    reporters: [
        'default',
        ['jest-html-reporter', {
            pageTitle: 'Test Report',
            outputPath: './test-report.html',
            includeFailureMsg: true,
            includeConsoleLog: true
        }]
    ]
};
