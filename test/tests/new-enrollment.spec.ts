
import { NewEnrollmentPage } from '../pages/new-enrollment.page'

describe("check that header h1 text is member enrollment  ", () => {
    it("header h1 text", () => {
        let enrollmentPage = new NewEnrollmentPage();
        enrollmentPage.maximizeWindow();
        expect(enrollmentPage.getH1HeaderText()).toEqual("Enrollemnt New Member")
    });
});