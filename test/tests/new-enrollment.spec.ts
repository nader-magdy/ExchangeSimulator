import { browser } from 'protractor/globals';
import {  } from 'protractor';
import { NewEnrollmentPage } from '../pages/new-enrollment.page'
let enrollmentPage: NewEnrollmentPage;
let originalTimeout: number;
beforeEach(() => {
    enrollmentPage = new NewEnrollmentPage();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
});

describe("check that header h1 text is member enrollment  ", () => {
    it("header h1 text", () => {
        enrollmentPage.maximizeWindow();
        enrollmentPage.getH1HeaderText().then((text) => {
            console.log(text);
            expect(text).toContain("Enrollemnt New Member");
        });

    });
});

describe("check that fillWithRandomData button worked well  ", () => {
    it("fillWithRandomData button", () => {
        console.log("enter second test case.");
        enrollmentPage.fillWithRandomData().then(() => {
            console.log("button clicked");
            enrollmentPage.exchangeId.getAttribute('value').then(function (value) {
                console.log(value);
                expect(value).toBeTruthy();
            });
        });


    });
});


afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});