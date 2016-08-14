import { BasePage } from './base.page'
import { browser, element, by } from 'protractor/globals';
import { ElementFinder } from 'protractor'
import { Address } from '../../src/app/entities/index'


export class NewEnrollmentPage extends BasePage {

    h1HeaderTxt: ElementFinder = element(by.css("#page-wrapper > div > ex-enrollment > div:nth-child(1) > div > h1"));
    exchangeId = element(by.css("ex-member .exchange-id"));
    lastName = element(by.css("ex-member .lastname"));
    firstName = element(by.css("ex-member .firstName"));
    middleName = element(by.css("ex-member .middleName"));
    SSN = element(by.css("ex-member .SSN"));
    Address1 = element(by.css("ex-member .addressLine1"))
    Address2 = element(by.css("ex-member .addressLine2"))
    zipCode = element(by.css("ex-member .zipcode"))
    brand = element(by.css(".navbar-brand"));
    stateDrpDownList = element(by.css('ex-member ex-address .dropdown-toggle'));
    AkStateItem = element(by.css('ex-member ex-address .dropdown-menu li[label="AK"]'))

    ///dropdown-menu li[label="AK"]


    constructor() {
        super('enrollment');
    }


    getH1HeaderText(): Promise<any> {
        return this.h1HeaderTxt.getText();
    }

    fillWithRandomData() {

        return element(by.css(".fa-file-text")).click();

    }

    isBrandVisible() {
        return this.brand.isDisplayed();
    }

    fillAddressContact(address:Address) {
        this.Address1.sendKeys(address.addressLine1);
        this.Address2.sendKeys(address.addressLine2);
        this.zipCode.sendKeys(address.zipCode);
        browser.sleep(3000);
        this.stateDrpDownList.click();
        this.AkStateItem.click();

    }
}



