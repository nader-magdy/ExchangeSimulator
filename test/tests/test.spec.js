"use strict";
var test_page_1 = require('../pages/test.page');
describe("Title test", function () {
    it("title test", function () {
        var testPage = new test_page_1.TestPage();
        expect(testPage.getTitle()).toEqual("Hello");
    });
});
//# sourceMappingURL=test.spec.js.map