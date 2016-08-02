import { BasePage } from './base.page'
import {browser, element, by} from 'protractor/globals';
import {ElementFinder} from 'protractor'

export class NewEnrollmentPage extends BasePage {
    
       h1HeaderTxt : ElementFinder=element(by.css("#page-wrapper > div > ex-enrollment > div:nth-child(1) > div > h1"));
       exchangeId = element(by.css("ex-member .exchange-id"));
       lastName=element(by.css("ex-member .lastname"));
       firstName=element(by.css("ex-member .firstName"));
       brand = element(by.css(".navbar-brand"));
       

    constructor() {
        super('enrollment');
    }
     
     
    getH1HeaderText(): Promise<any> {
        return this.h1HeaderTxt.getText();
    }

    fillWithRandomData() {

        return element(by.css(".fa-file-text")).click();

    }
    
    isBrandVisible(){
        return this.brand.isDisplayed();            
    }

    
}
