//npm install exceljs

const ExcelJs = require('exceljs');
const { test, expect } = require('@playwright/test');

async function writeExcelTest(searchText, replaceText, change, filePath) {

    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText);




    const cell = worksheet.getCell(output.row, output.column + change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet, searchText) {
    let output = {
        row: -1,
        column: -1
    };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            if (cell.value === searchText) {
                output.row = rowNumber;
                output.column = colNumber;
            }
        })
    })
    return output;
}


//writeExcelTest('Mango', 350, {rowChange: 0, colChange:2}, 'C:/Users/Akarsh Kantimath/Downloads/350.xlsx');

test('Upload download excel valdation', async ({ page }) => {
    const textSearch = 'Kivi';
    const updateValue = '599';
    await page.goto('https://rahulshettyacademy.com/upload-download-test/');

    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click(),
    ]);

    const downloadPath = 'C:/Users/Akarsh Kantimath/Downloads/download.xlsx';
    await download.saveAs(downloadPath);


    writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, 'C:/Users/Akarsh Kantimath/Downloads/download.xlsx');
    await page.locator('#fileinput').click();
    //for uploading a file, since it's not a browser - Windows explorer opens up to upload the file to choose the file location
    //Playwright provided with a method .setInputFiles('provide the path of file locator')
    //While selecting the locator make sure that attribute type="file" is present in HTML, if not Playwright doesn't recognise where to upload the file.
    //If type='file' attribute is missing ask developer to add it.
    await page.locator('#fileinput').setInputFiles('C:/Users/Akarsh Kantimath/Downloads/download.xlsx');
    
    const textlocator = page.getByText(textSearch);
    const desiredRow = page.getByRole('row').filter({has : textlocator});
    await expect (desiredRow.locator('#cell-4-undefined')).toHaveText(updateValue);
})