"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_page_1 = require('./base.page');
var globals_1 = require('protractor/globals');
var memberpage = (function (_super) {
    __extends(memberpage, _super);
    function memberpage() {
        _super.call(this, 'members');
    }
    memberpage.prototype.fillWithRandomData = function () {
        return globals_1.element(globals_1.by.css("ex-meber-list > div:nth-child(2) > div > div.panel-heading > a > i")).click();
    };
    return memberpage;
}(base_page_1.BasePage));
exports.memberpage = memberpage;
//# sourceMappingURL=member-page.js.map