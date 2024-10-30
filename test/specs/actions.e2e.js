import { $, browser } from '@wdio/globals'

describe('Actions', () => {
    it('Accessibility ID', async () => {
        await $('~App').click();
        await $('~Device Admin').click();
        await browser.pause(10000);
    });

    it('Get text', async () => {
        console.log('Element text:' + await $('~Accessibility').getText());
        await expect($('~Accessibility')).toHaveText('Accessibility');
        await expect($('~Accessibility')).toHaveAttr('text', 'Accessibility');
    });

    it('Set text', async () => {
        await $('~App').click();
        await $('~Search').click();
        await $('~Invoke Search').click();
        await $('id=io.appium.android.apis:id/txt_query_prefill').setValue('Test text');

        await expect($('id=io.appium.android.apis:id/txt_query_prefill')).toHaveText('Test text');
        await expect($('id=io.appium.android.apis:id/txt_query_prefill')).toHaveAttr('text', 'Test text');
    });

    it('Dropdowns', async () => {
        await $('~App').click();
        await $('~Menu').click();
        await $('~Inflate from XML').click();
        await $('id=android:id/text1').click();
        await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Order"]').click();
        await expect($('android.widget.ListView')).not.toBeExisting();
        await expect($('id=android:id/text1')).toHaveText('Order');
    });

    it('Checkboxes and Radio Buttons', async () => {
        await $('~Views').click();
        await $('~Controls').click();
        await $('~2. Dark Theme').click();
        await expect($('id=io.appium.android.apis:id/check1')).toHaveAttr('checked', 'false');
        await $('id=io.appium.android.apis:id/check1').click();
        await expect($('id=io.appium.android.apis:id/check1')).toHaveAttr('checked', 'true');
    });

    it('Multiple elements', async () => {
        const elements = await $$('android.widget.TextView');
        for (const element of elements) {
            console.log(await element.getText());
        }
        await expect(elements[1]).toHaveText("Access'ibility");
    });

    it.only('Waits', async () => {
        await $('~Views').click();
        await $('~Chronometer').click();
        await $('~Start').click();
        await $('~5 seconds').waitForDisplayed();
        await $('~Stop').click();
        await browser.pause(20000);
    });
})


