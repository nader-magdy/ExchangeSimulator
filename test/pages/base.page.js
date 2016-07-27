"use strict";
var globals_1 = require('protractor/globals');
var BasePage = (function () {
    function BasePage(pageUrl) {
        this.baseUrl = 'http://localhost:3000';
        this.pageUrl = pageUrl;
        globals_1.browser.get(this.baseUrl + "/" + this.pageUrl);
    }
    BasePage.prototype.maximizeWindow = function () {
        globals_1.browser.driver.manage().window().maximize();
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=base.page.js.map