export async function activateApp(appPackage) {
    try {
        await driver.activateApp(appPackage);
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