module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@hooks/(.*)$': '<rootDir>/hooks/$1',
        '^@components/(.*)$': '<rootDir>/components/$1',
        '^@layouts/(.*)$': '<rootDir>/layouts/$1',
        '^@pages/(.*)$': '<rootDir>/pages/$1',
        '^@utils/(.*)$': '<rootDir>/utils/$1',
        '^@typings/(.*)$': '<rootDir>/typings/$1',
        '^@api/(.*)$': '<rootDir>/api/$1',
        '^@redux/(.*)$': '<rootDir>/redux/$1',
        '^@mock/(.*)$': '<rootDir>/mock/$1',
        '^@public/(.*)$': '<rootDir>/public/$1',
    },
    // moduleFileExtensions: [
    //     'js',
    //     'jsx',
    //     'ts',
    //     'tsx',
    //     'json',
    //     'node',
    // ],
};
