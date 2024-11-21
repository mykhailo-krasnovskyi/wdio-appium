export async function selectMenuItemByIndex(index, itemsNumbers, dropdownLocation) {
    const { width: screenWidth, height: screenHeight } = await driver.getWindowRect();

    const referenceWidth = 1080;
    const referenceHeight = 2280;

    const scaleX = screenWidth / referenceWidth;
    const scaleY = screenHeight / referenceHeight;

    const menuTopY = Math.floor(dropdownLocation.topY * scaleY);
    const menuBottomY = Math.floor(dropdownLocation.bottomY * scaleY);
    const menuLeftX = Math.floor(dropdownLocation.leftX * scaleX);
    const menuRightX = Math.floor(dropdownLocation.rightX * scaleX);

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
        .perform()
}