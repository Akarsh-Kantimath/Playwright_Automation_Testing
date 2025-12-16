import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    page : Page;
    signInbutton : Locator;
    userName : Locator;
    password : Locator;

    constructor(page : Page) {
        //these 3 locators are auto intialised when the object of the class LoginPage is created in 17_E2E_EcommerceTestPO.spec.js file.
        //const loginPage = new LoginPage(page);
        //On creating the object, on run-time it envoke the constructor and these 3 locators will get intialised.
        this.page = page;
        this.signInbutton = page.locator('#login');
        this.userName = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
    }
    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }
    async validLogin(username : string , password : string ) { //we are putting async for await
        //through this method we receive the variables username, password 
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.signInbutton.click();
    }
}
