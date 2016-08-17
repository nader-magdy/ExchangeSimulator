"use strict";
import {browser, element, by} from 'protractor/globals';
var webdriver = require('selenium-webdriver');


export abstract class BasePage {
    pageUrl: string;
    baseUrl: string = 'http://localhost:3000'
    constructor(pageUrl: string) {
        this.pageUrl = pageUrl;
        browser.get(`${this.baseUrl}/${this.pageUrl}`);
    }

    maximizeWindow() {
        browser.driver.manage().window().maximize();
    }
    title(): Promise<any> {
        return browser.getTitle();
    }
    implicitWait() {
        browser.driver.manage().implicitWait();
    }
    getAllWindowHandles() {
        return browser.driver.getAllWindowHandles();
    }
    closeBrowser() {
        browser.driver.quit();
    }
    explicitWait(condition: any, opt_timeout: number, opt_message: string) {
        browser.wait(condition, opt_timeout, opt_message);
        return true;
    }



}


    /**
     * 
     * return true if the web element has been filled otherwise return false
     *
     * @param {ElementFinder} ele element check 
     */


