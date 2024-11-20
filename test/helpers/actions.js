export async function selectMenuItemByIndex(index, itemsNumbers, dropdownLocation) {
    const { width: screenWidth, height: screenHeight } = await driver.getWindowRect();

    const menuTopY = Math.floor(screenHeight * (dropdownLocation.topY / screenHeight));
    const menuBottomY = Math.floor(screenHeight * (dropdownLocation.bottomY / screenHeight));
    const menuLeftX = Math.floor(screenWidth * (dropdownLocation.leftX / screenWidth));
    const menuRightX = Math.floor(screenWidth * (dropdownLocation.rightX / screenWidth));

    const menuItemHeight = Math.floor((menuBottomY - menuTopY) / itemsNumbers);
    const clickX = menuLeftX + Math.floor((menuRightX - menuLeftX) / 2);
    const clickY = menuTopY + index * menuItemHeight + Math.floor(menuItemHeight / 2);
    await clickByCoordinates(clickX, clickY);
};

export async function clickByCoordinates(x, y) {
    await driver.action('pointer').move(x, y)
        .down()
        .pause(100)
        .up()
        .perform();
}