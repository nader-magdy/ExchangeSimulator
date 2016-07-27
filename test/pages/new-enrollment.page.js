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
    function NewEnrollmentPage() {
        _super.call(this, 'enrollment');
    }
    NewEnrollmentPage.prototype.getH1HeaderText = function () {
        return globals_1.element(globals_1.by.css("#page-wrapper > div > ex-enrollment > div:nth-child(1) > div > h1")).getText(); // element(by.css('h1.header')).getText();
    };
    return NewEnrollmentPage;
}(base_page_1.BasePage));
exports.NewEnrollmentPage = NewEnrollmentPage;
//# sourceMappingURL=new-enrollment.page.js.map