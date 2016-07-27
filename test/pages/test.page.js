"use strict";
var TestPage = (function () {
    function TestPage() {
    }
    TestPage.prototype.getTitle = function () {
        return "Hello"; // element(by.css('h1.header')).getText();
    };
    return TestPage;
}());
exports.TestPage = TestPage;
//# sourceMappingURL=test.page.js.map