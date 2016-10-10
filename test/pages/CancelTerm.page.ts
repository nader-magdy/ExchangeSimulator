import { BasePage } from './base.page'
import { browser, element, by } from 'protractor/globals';
import { ElementFinder, ElementArrayFinder } from 'protractor'
import { Address } from '../../src/app/entities/index'


export class CancelTermPage extends BasePage {

    h1HeaderTxt = element(by.css("#page-wrapper > div > ex-cancellation > div:nth-child(1) > div > h1"));
    exchangeId_txt = element(by.css("#page-wrapper > div > ex-cancellation > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > ex-member > form > div > div > input"));
    generated_X12 = element(by.css("#page-wrapper > div > ex-cancellation > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > span"));
    generated_X12_ID = element(by.css("#page-wrapper > div > ex-cancellation > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > span > strong:nth-child(5)"));
    generated_X12_reason = element(by.css("#page-wrapper > div > ex-cancellation > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(2) > span > strong:nth-child(16)"));

    constructor() {
        super('cancellation');
    }

    getH1HeaderText() {
        return this.h1HeaderTxt.getText();
    }
    getexchangeId_txt() {
        return this.exchangeId_txt.getText();
    }
    getgenerated_X12() {
        return this.generated_X12.getText();
    }
    getgenerated_X12_ID() {
        return this.generated_X12_ID.getText();
    }
    clickexchangeId_txt(){
        return this.exchangeId_txt.click();
    }

    setexchangedId_text (test){
        this.exchangeId_txt.sendKeys(test);
    } 

}