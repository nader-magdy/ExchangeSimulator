import {browser, element, by} from 'protractor/globals';


export abstract  class BasePage {
    pageUrl: string;
    baseUrl: string = 'http://localhost:3000'
    constructor(pageUrl: string) {
        this.pageUrl = pageUrl;
        browser.get(`${this.baseUrl}/${this.pageUrl}`);
    }

    maximizeWindow() {
        browser.driver.manage().window().maximize();
    }
    Title(): Promise<any>{
        return browser.getTitle();
    }
    ImplicitWait(){
        browser.driver.manage().implicitWait();
    }
  
    /**
     * return true if the web element has been filled otherwise return false
     *
     * @param {ElementFinder} ele element check 
     */
   

}