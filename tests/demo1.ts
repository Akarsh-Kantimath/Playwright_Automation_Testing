let message1 : string = "Hello";
message1 = "World" ;
console.log(message1);

let age1 : number = 29 ;
console.log(age1);

let numbers1 : number[] = [7, 9, 11];
console.log(numbers1);

let isActive = true;
console.log(isActive);

let data : any = "data can be any"
console.log(data);

//Function decalration in TS
function add ( a : number, b : number) : number // variable a and b is of type number and return type is number
{
        return a + b;

}

//Object decalration in TS
let user : {name : string, age : number, location: string} = {name : "Bob", age : 35, location : "Delhi"};
user.location = "Hydrabad"

//class declaration in TS
import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightDevPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    this.pomLink = page.locator('li', {
      hasText: 'Guides',
    }).locator('a', {
      hasText: 'Page Object Model',
    });
    this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }
}
