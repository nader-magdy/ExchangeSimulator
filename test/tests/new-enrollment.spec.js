"use strict";
var new_enrollment_page_1 = require('../pages/new-enrollment.page');
var enrollmentPage;
var originalTimeout;
beforeEach(function () {
    enrollmentPage = new new_enrollment_page_1.NewEnrollmentPage();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
});
describe("check that header h1 text is member enrollment  ", function () {
    it("header h1 text", function () {
        enrollmentPage.maximizeWindow();
        enrollmentPage.getH1HeaderText().then(function (text) {
            console.log(text);
            expect(text).toContain("Enrollemnt New Member");
        });
    });
});
describe("check that fillWithRandomData button worked well  ", function () {
    it("fillWithRandomData button", function () {
        enrollmentPage.fillWithRandomData().then(function () {
            enrollmentPage.exchangeId.getAttribute('value').then(function (value) {
                expect(value).toBeTruthy();
            });
            enrollmentPage.lastName.getAttribute('value').then(function (value) {
                expect(value).toBeTruthy();
            });
            enrollmentPage.firstName.getAttribute('value').then(function (value) {
                expect(value).toBeTruthy();
            });
        });
    });
});
describe("check that brand displayed  ", function () {
    it("brand is a logo  ", function () {
        expect(enrollmentPage.isBrandVisible).toBeTruthy();
    });
});
afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});
//# sourceMappingURL=new-enrollment.spec.js.map