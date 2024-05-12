

import { test, expect } from "@playwright/test";

test('myntra test', async ({ page }) => {


    test.setTimeout(120_000);
    await page.goto('https://www.myntra.com/');

    await page.locator('a[data-group="men"]').hover();

    // const product_category_links = page.locator(`.desktop-categoryLink`);

    // const number_Of_Products = await product_category_links.count();

    // console.log('Total Products: ' + number_Of_Products);

    // const prod_array: string[] = [];

    // for (let i = 0; i < await number_Of_Products; i++) {

    //     await page.locator('a[data-group="men"]').hover();
    //     await page.waitForTimeout(5_00);

    //     const all_pord_txt = await product_category_links.nth(i).innerText();

    //     await product_category_links.nth(i).click({delay: 5_00});

        

    //     console.log('prod txt: ' + all_pord_txt);


    //     prod_array.push(all_pord_txt);


    // }

    // console.log('All Prodcuts Text: ' + prod_array);



    const productCategories: string[] = await page.locator(`.desktop-categoryName`).allInnerTexts();

    await page.waitForLoadState('load');
    await page.waitForLoadState('domcontentloaded');


    console.log(`product Cateogories: ' + ${productCategories}`);





});


