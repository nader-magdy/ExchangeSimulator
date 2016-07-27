import {browser, element, by} from 'protractor/globals';

export class BasePage {
    pageUrl: string;
    baseUrl: string = 'http://localhost:3000'
    constructor(pageUrl : string) {
        this.pageUrl = pageUrl;
        browser.get(`${this.baseUrl}/${this.pageUrl}`);
    }


    maximizeWindow() {
        browser.driver.manage().window().maximize();
    }
}