
import { Page } from 'playwright';
import config from 'E:/NOPE-COMMERCE-DEMO/data/apptests-config.json'
// Function to login with a given Page context and a specific user (primary or secondary)
export const testContextLogin = async (
    page: Page,
    userType: 'primaryUser' | 'secondaryUser'
): Promise<void> => {
    const { applicationUsers, baseUrl } = config;

    const user = applicationUsers[userType];

    // Navigate to login page
    await page.goto(baseUrl);

    // Login - adjust selectors to match your application's login form
    await page.locator(`//a[contains(text(),'Log in')]`).click();
    await page.fill('input[class="email"]', user.userId);
    await page.waitForTimeout(1000);
    await page.fill('input[class="password"]', user.password);
    await page.waitForTimeout(1000);
    await page.click(`//button[text()='Log in']`); // Assuming a submit button exists
};

export const goto = async (
    page: Page,
    destination: 'baseUrl' | 'homePageUrl' | 'loginUrl'
): Promise<void> => {
    const url = config[destination]; // This should be a string.

    if (typeof url !== 'string') {
        throw new Error(`Expected a string for destination ${destination}, but got: ${typeof url}`);
    }

    await page.goto(url); // Safe to use after validation
};











