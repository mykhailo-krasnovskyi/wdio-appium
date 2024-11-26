export async function activateApp(appPackage) {
    try {
        await driver.activateApp(appPackage);
        await driver.execute("browserstack_executor: {\"action\": \"adbShell\", \"arguments\": {\"command\" : \"wm set-fix-to-user-rotation enabled\" }}");
        await driver.setOrientation('PORTRAIT');
    } catch (error) {
        console.error(`Failed to activate app: ${error}`);
        throw error;
    }

}

export async function closeApp(appPackage) {
    try {
        await driver.terminateApp(appPackage);
    } catch (error) {
        console.error(`Failed to close app: ${error}`);
        throw error;
    }
}

export async function pauseApp(time) {
    try {
        await driver.pause(time);
    } catch (error) {
        console.error(`Failed to pause: ${error}`);
        throw error;
    }
}