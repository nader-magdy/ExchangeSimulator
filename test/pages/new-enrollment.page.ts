import { BasePage } from './base.page'
import { browser, element, by } from 'protractor/globals';
import { ElementFinder, ElementArrayFinder } from 'protractor'
import { Address } from '../../src/app/entities/index'


export class NewEnrollmentPage extends BasePage {

    h1HeaderTxt: ElementFinder = element(by.css("#page-wrapper > div > ex-enrollment > div:nth-child(1) > div > h1"));
    exchangeId_txt = element(by.css("ex-member .exchange-id"));
    lastName_txt = element(by.css("ex-member > form > ex-personal-info > div > div.panel-body > form > div:nth-child(1) > div > input"));
    firstName_txt = element(by.css("ex-member .firstName"));
    middleName_txt = element(by.css("ex-member .middleName"));
    ssn_txt = element(by.css("ex-member .SSN"));
    address1_txt = element(by.css("ex-member .addressLine1"))
    address2_txt = element(by.css("ex-member .addressLine2"))
    zipCode_txt = element(by.css("ex-member .zipcode"))
    brand = element(by.css(".navbar-brand"));
    stateDrpDownList = element(by.css('ex-member ex-address .dropdown-toggle'));
    AkStateItem = element(by.css('ex-member ex-address .dropdown-menu li[label="AK"]'));
    lastName_Generated_X12 = element(by.css('div:nth-child(2) > div:nth-child(2) > div > div.panel-body > span > strong:nth-child(19)'));



    constructor() {
        super('enrollment');
    }


    getH1HeaderText() {
        return this.h1HeaderTxt.getText();
    }

    generatedX12LastName() {
        return this.lastName_Generated_X12.getText();
    }
    generatedRandomLastName() {
        return this.lastName_txt.getText();
    }

    fillWithRandomData() {

        return element(by.css(".fa-file-text")).click();

    }

    isBrandVisible() {
        return this.brand.isDisplayed();
    }

    fillAddressContact(address: Address) {

        this.address1_txt.sendKeys(address.addressLine1);
        this.address2_txt.sendKeys(address.addressLine2);
        this.zipCode_txt.sendKeys(address.zipCode);
        this.stateDrpDownList.click();
        this.AkStateItem.click();

    }
    getNumberOfStates() {
        let Count = element.all(by.css("ex-address > div > div.panel-body > form > div:nth-child(4) > div > div > ul > li")).count();
        return Count;
    }
    getNumberOfBarItems() {
        let Barcount = element.all(by.css('div.collapse.navbar-collapse.navbar-ex1-collapse > ul >li')).count();
        return Barcount;
    }
}



