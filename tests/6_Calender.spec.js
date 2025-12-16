const { test, expect } = require('@playwright/test')

test('Calender component handling', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const date = '31';
    const dateWithZero = date.padStart(2, '0');
    const monthNumber = '3';
    const monthWithZero = monthNumber.padStart(2, '0');
    const year = '2027';
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await page.locator('.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.getByText(year).click();
    await page.locator('.react-calendar__year-view__months button').nth(Number(monthNumber) - 1).click();
    const dateRepeat = await page.locator('abbr').allTextContents();
    console.log(dateRepeat);
    const totalCount = await page.locator('abbr').count();
    console.log(totalCount);
    let j = 0;
    for (let i = 0; i < totalCount; i++) {
        if (date === dateRepeat[i]) {
            j++;

        }

    }
    console.log(j);
    if (j = 2) {
        //await page.locator('.react-calendar').waitFor();
        if (Number(date) < 15) {
            await page.locator('abbr').getByText(date, { exact: true }).first().click();
        }
        else {
            await page.locator('abbr').getByText(date).last().click();
        }
    }


    //await page.locator('abbr').getByText(date).first().click();
    const sdate = await page.locator('[style*="visibility"]').getAttribute('value');
console.log(sdate);
console.log(year + "-" +monthWithZero+ "-" + dateWithZero);
expect(sdate).toBe(year + "-" +monthWithZero+ "-" + dateWithZero);

const expectedList = [monthNumber,date,year]
const htmlDate= await page.locator('.react-date-picker__wrapper input');
//console.log(htmlDate.length);
for(let i = 0; i <htmlDate.length; i++){
    const value = await htmlDate.nth(i).inputValue();
    expect(value).toEqual(htmlDate[i]);
}


//await page.pause();
});


