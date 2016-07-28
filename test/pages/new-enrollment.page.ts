import { BasePage } from './base.page'
import {browser, element, by} from 'protractor/globals';
import {ElementFinder} from 'protractor'

export class NewEnrollmentPage extends BasePage {
    constructor() {
        super('enrollment');
    }
    getH1HeaderText(): Promise<any> {
        return element(by.css("#page-wrapper > div > ex-enrollment > div:nth-child(1) > div > h1")).getText();// element(by.css('h1.header')).getText();
    }

    fillWithRandomData() {

        return element(by.css(".fa-file-text")).click();

    }

    exchangeId: ElementFinder = element(by.css("ex-member .exchange-id"));

    
}
