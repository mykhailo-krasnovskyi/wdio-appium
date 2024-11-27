import 'dotenv/config';

export const isBrowserStack = process.env.TEST_ENV === 'browserstack';

export const config = {
    user: isBrowserStack ? process.env.BROWSERSTACK_USERNAME : undefined,
    key: isBrowserStack ? process.env.BROWSERSTACK_ACCESS_KEY : undefined,
    hostname: isBrowserStack ? 'hub.browserstack.com' : '127.0.0.1',
    port: isBrowserStack ? 443 : 4723,
    services: isBrowserStack ? [
        [
            'browserstack',
            {
                app: 'bs://c7589e52f575e39bf1ed2682b18a91862ee8902f',
                buildIdentifier: `${process.env.BUILD_NUMBER || 'local-build'}`,
                browserstackLocal: true,
            },
        ],
    ] : ['appium'],

    specs: ['./test/specs/pom-tests/*.js'],

    maxInstances: 1,

    capabilities: isBrowserStack
        ? [
            {
                platformName: 'Android',
                'appium:deviceName': 'Google Pixel 4 XL',
                'appium:platformVersion': '10.0',
                'appium:automationName': 'UiAutomator2',
                'appium:app': 'bs://c7589e52f575e39bf1ed2682b18a91862ee8902f',
            },
        ]
        : [
            {
                platformName: 'Android',
                'appium:deviceName': 'Google Pixel 4',
                'appium:platformVersion': '14',
                'appium:automationName': 'UiAutomator2',
                'appium:app': './app/apk-prod.apk',
            },
        ],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
};
