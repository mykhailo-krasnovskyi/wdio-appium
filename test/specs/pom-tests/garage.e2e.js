import GarageScreen from '../../page-objects/screens/GarageScreen';
import HomeScreen from '../../page-objects/screens/HomeScreen';
import SignInForm from '../../page-objects/forms/SignInForm';
import { users } from '../../test-data/credentials';
import { activateApp, closeApp } from '../../helpers/appStatesHelper';

describe('Garage tests', () => {
    before(async () => {
        await HomeScreen.openSignInForm();
        await SignInForm.setEmail(users.mainUser.email);
        await SignInForm.setPassword(users.mainUser.password);
        await SignInForm.clickLoginButton();
        await expect(GarageScreen.screenTitle).toBeDisplayed();
    })

    beforeEach(async () => {
        //activate the app
        await activateApp('com.hillelAuto');
    })

    afterEach(async () => {
        //terminate the app
        await closeApp('com.hillelAuto');
    })

    it('Add a car - BMW 5', async () => {
        await GarageScreen.addCarByBrandAndModelIndexes(1, 1);
        await GarageScreen.verifyLastAddedCar('BMW', '5');
    });

    it('Add a car - Ford Fiesta', async () => {
        await GarageScreen.addCarByBrandAndModelIndexes(2);
        await GarageScreen.verifyLastAddedCar('Ford', 'Fiesta');
    });

    it('Add a car - Audi Q7', async () => {
        await GarageScreen.addCarByBrandAndModelIndexes(0, 2);
        await GarageScreen.verifyLastAddedCar('Audi', 'Q7');
    });

    it('Add a car - Fiat Panda', async () => {
        await GarageScreen.addCarByBrandAndModelIndexes(4, 2);
        await GarageScreen.verifyLastAddedCar('Fiat', 'Panda');
    });

})

