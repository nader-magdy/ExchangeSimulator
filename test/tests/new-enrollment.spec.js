"use strict";
var new_enrollment_page_1 = require('../pages/new-enrollment.page');
describe("check that header h1 text is member enrollment  ", function () {
    it("header h1 text", function () {
        var enrollmentPage = new new_enrollment_page_1.NewEnrollmentPage();
        enrollmentPage.maximizeWindow();
        expect(enrollmentPage.getH1HeaderText()).toEqual("Enrollemnt New Member");
    });
});
//# sourceMappingURL=new-enrollment.spec.js.map