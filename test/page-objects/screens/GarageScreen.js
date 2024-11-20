import { selectMenuItemByIndex } from "../../helpers/actions";
import { myProfileMenuLocation, selectBrandDropdownMenuLocation, selectModelDropdownMenuLocation } from "../../test-data/coordinates";
class GarageScreen {

    get screenTitle() {
        return $('//android.widget.TextView[@text="Garage"]');
    }

    get menuDropdown() {
        return $('//android.widget.TextView[@text="My profile"]');
    }

    get addNewCarButton() {
        return $('//android.widget.TextView[@text="Add Car"]');
    }

    get brandDropdown() {
        return $('(//android.widget.TextView[@text="Add a car"]/..//android.view.ViewGroup[@content-desc])[2]');
    }

    get modelDropdown() {
        return $('(//android.widget.TextView[@text="Add a car"]/..//android.view.ViewGroup[@content-desc])[3]');
    }

    get mileageField() {
        return $('//android.widget.EditText');
    }

    get addCarButton() {
        return $('//android.widget.TextView[@text="Add"]');
    }

    async getLastAddedCarName() {
        return await $('(//android.view.ViewGroup)[8]/android.widget.TextView[1]').getAttribute('text');
    }

    async addCarByBrandAndModelIndexes(brandIndex = 0, modelIndex = 0) {
        await this.addNewCarButton.click();
        await this.brandDropdown.click();
        await this.selectBrandByIndex(brandIndex);
        await this.modelDropdown.click();
        await this.selectModelByIndex(modelIndex);
        await this.mileageField.setValue(555);
        await this.addCarButton.click();
    }

    async verifyLastAddedCar(brand, model) {
        const carName = await this.getLastAddedCarName();
        expect(carName).toContain(brand);
        expect(carName).toContain(model);

    }

    async clickMenuDropdown() {
        await this.menuDropdown.click();
    }

    async selectBrandByIndex(index) {
        await selectMenuItemByIndex(index, 5, selectBrandDropdownMenuLocation);
    };

    async selectModelByIndex(index) {
        await selectMenuItemByIndex(index, 5, selectModelDropdownMenuLocation);
    };

    async clickMenuItemByIndex(index) {
        await selectMenuItemByIndex(index, 6, myProfileMenuLocation);
    }

    async logOutIfLoggedIn() {
        if (await this.screenTitle.isDisplayed()) {
            await this.clickMenuDropdown();
            await this.clickMenuItemByIndex(5);
        }
        await driver.pause(1500);
    }
}

export default new GarageScreen();