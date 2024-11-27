import SignInForm from '../../page-objects/forms/SignInForm';
import SignUpForm from '../../page-objects/forms/SignUpForm';
import HomeScreen from '../../page-objects/screens/HomeScreen';
import ForgotPasswordForm from '../../page-objects/forms/ForgotPasswordForm';
import GarageScreen from '../../page-objects/screens/GarageScreen';
import { activateApp, closeApp } from '../../helpers/appStatesHelper';
import { users } from '../../test-data/credentials';

describe('Log In tests', () => {

    beforeEach(async () => {
        //activate the app
        await activateApp('com.hillelAuto');
        await HomeScreen.openSignInForm();
    })

    afterEach(async () => {
        //terminate the app
        await GarageScreen.logOutIfLoggedIn();
        await closeApp('com.hillelAuto');
    })

    it('Log in with correct credentials', async () => {
        await SignInForm.setEmail(users.mainUser.email);
        await SignInForm.setPassword(users.mainUser.password);
        await SignInForm.clickLoginButton();
        await expect(GarageScreen.screenTitle).toBeDisplayed();

    });

    it('Log in with incorrect credentials', async () => {
        await SignInForm.setEmail(users.mainUser.email);
        await SignInForm.setPassword('testtesttest');
        await SignInForm.clickLoginButton();
        await expect(SignInForm.wrongDataMessage).toBeDisplayed();
    });

    it.only('Log in without email', async () => {
        await SignInForm.setEmail('');
        await SignInForm.setPassword('testtesttest');
        await SignInForm.clickLoginButton();
        await expect(SignInForm.emptyEmailErrorMessage).toBeDisplayed();
    });

    it.only('Log in without password', async () => {
        await SignInForm.setEmail(users.mainUser.email);
        await SignInForm.setPassword('');
        // await SignInForm.clickLoginButton();
        await expect(SignInForm.emptyPasswordErrorMessage).toBeDisplayed();

    });

    it('Opening Registration popup', async () => {
        await SignInForm.clickRegistrationButton();
        await expect(SignUpForm.formTitle).toBeDisplayed();

    });

    it('Opening Restore Access popup', async () => {
        await SignInForm.clickForgotPasswordButton();
        await expect(ForgotPasswordForm.formTitle).toBeDisplayed();

    });






})

