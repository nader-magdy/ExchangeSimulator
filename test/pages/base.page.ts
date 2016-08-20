"use strict";
import {browser, element, by,ExpectedConditions} from 'protractor/globals';
var webdriver = require('selenium-webdriver');
var fs = require('fs');


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
    takeScreenShot() {
        return browser.takeScreenshot();
    }
    title() {
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

    writeScreenShot(data, filename) {
        let stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
   getProcessedConfig()
    {
        return browser.getProcessedConfig();
    }


}


    /**
     * 
     * return true if the web element has been filled otherwise return false
     *
     * @param {ElementFinder} ele element check 
     */


