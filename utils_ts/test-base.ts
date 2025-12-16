
import {test as baseTest} from '@playwright/test';
interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
}

export const customTest = baseTest.extend <{testDataForOrder : TestDataForOrder}> ({
  testDataForOrder: {
    username: 'tester_akarsh@gmail.com',
    password: 'Abcd1234#',
    productName: 'iphone 13 pro',
  },
});
