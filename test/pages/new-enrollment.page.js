"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_page_1 = require('./base.page');
var globals_1 = require('protractor/globals');
var NewEnrollmentPage = (function (_super) {
    __extends(NewEnrollmentPage, _super);
    ///dropdown-menu li[label="AK"]
    function NewEnrollmentPage() {
        _super.call(this, 'enrollment');
        this.h1HeaderTxt = globals_1.element(globals_1.by.css("#page-wrapper > div > ex-enrollment > div:nth-child(1) > div > h1"));
        this.exchangeId = globals_1.element(globals_1.by.css("ex-member .exchange-id"));
        this.lastName = globals_1.element(globals_1.by.css("ex-member .lastname"));
        this.firstName = globals_1.element(globals_1.by.css("ex-member .firstName"));
        this.middleName = globals_1.element(globals_1.by.css("ex-member .middleName"));
        this.SSN = globals_1.element(globals_1.by.css("ex-member .SSN"));
        this.Address1 = globals_1.element(globals_1.by.css("ex-member .addressLine1"));
        this.Address2 = globals_1.element(globals_1.by.css("ex-member .addressLine2"));
        this.zipCode = globals_1.element(globals_1.by.css("ex-member .zipcode"));
        this.brand = globals_1.element(globals_1.by.css(".navbar-brand"));
        this.stateDrpDownList = globals_1.element(globals_1.by.css('ex-member ex-address .dropdown-toggle'));
        this.AkStateItem = globals_1.element(globals_1.by.css('ex-member ex-address .dropdown-menu li[label="AK"]'));
    }
    NewEnrollmentPage.prototype.getH1HeaderText = function () {
        return this.h1HeaderTxt.getText();
    };
    NewEnrollmentPage.prototype.fillWithRandomData = function () {
        return globals_1.element(globals_1.by.css(".fa-file-text")).click();
    };
    NewEnrollmentPage.prototype.isBrandVisible = function () {
        return this.brand.isDisplayed();
    };
    NewEnrollmentPage.prototype.fillAddressContact = function () {
        this.Address1.sendKeys('Embaba');
        this.Address2.sendKeys('giza');
        this.zipCode.sendKeys('33128');
        globals_1.browser.sleep(3000);
        this.stateDrpDownList.click();
        this.AkStateItem.click();
    };
    return NewEnrollmentPage;
}(base_page_1.BasePage));
exports.NewEnrollmentPage = NewEnrollmentPage;
//# sourceMappingURL=new-enrollment.page.js.map