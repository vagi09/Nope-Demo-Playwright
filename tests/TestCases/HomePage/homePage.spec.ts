import { test, expect } from '@playwright/test';
import { HomePage } from '../../PageObjects/HomePage';
import { testContextLogin, goto } from '../../PageObjects/applicationFixture'




test.describe('test Home Page', async () => {

    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {

        await goto(page, 'baseUrl');

        homePage = new HomePage({ page });
    });



    test('test home page', async ({ page }) => {

        await testContextLogin(page, 'primaryUser');
        await homePage.computers().click();



    })


});