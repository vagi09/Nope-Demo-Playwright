import { Page } from "@playwright/test";

interface HomePageParams{

    page: Page;
}

export class HomePage{


    readonly page:Page;

    constructor({page}: HomePageParams ){

        this.page = page;
    }


    computers(){

        return this.page.locator(`(//a[normalize-space()='Computers'])[1]`);
    }







    
}