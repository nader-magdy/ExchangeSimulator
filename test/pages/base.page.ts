import {browser, element, by} from 'protractor/globals';
import {ElementFinder} from 'protractor'

export class BasePage {
    pageUrl: string;
    baseUrl: string = 'http://localhost:3000'
    constructor(pageUrl: string) {
        this.pageUrl = pageUrl;
        browser.get(`${this.baseUrl}/${this.pageUrl}`);
    }

    maximizeWindow() {
        browser.driver.manage().window().maximize();
    }
    /**
     * return true if the web element has been filled otherwise return false
     *
     * @param {ElementFinder} ele element check 
     */
   

}