import { $, browser } from '@wdio/globals'

describe('Search elements', () => {
    it.skip('Accessibility ID', async () => {
        await $('~App').click();
        await $('~Device Admin').click();
        await browser.pause(10000);
    });

    it.skip('Resource ID', async () => {
        await expect($('id=android:id/action_bar')).toBeDisplayed();

        await browser.pause(10000);
    });

    it.skip('Class Name', async () => {
        const elements = await $$('android.widget.TextView');
        await expect(elements).toBeElementsArrayOfSize(13);
    });

    it.skip('Xpath', async () => {
        await $('//android.widget.TextView[@content-desc="Media"]').click();
        await $('(//android.widget.TextView)[3]').click();
        await browser.pause(3000);
    });


    it('UiSelector ', async () => {
        await $('android=new UiSelector().text("NFC")').click();

        await browser.pause(3000);
    });

})

