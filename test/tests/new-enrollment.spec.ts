import { browser } from 'protractor/globals';
import {  } from 'protractor';
import { NewEnrollmentPage } from '../pages/new-enrollment.page'


let enrollmentPage: NewEnrollmentPage;
let originalTimeout: number;
let  json = require('../test/Test Data/Test.json');

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
       //var personalAddress = new Address();
      
        enrollmentPage.fillWithRandomData().then(() => {
            enrollmentPage.fillAddressContact(json);
            enrollmentPage.exchangeId.getAttribute('value').then(function (value) {
                expect(value).toBeTruthy();
            });
        });


    });
});

describe("check that brand displayed  ", () => {
    it("brand is a logo  ", () => {
        expect(enrollmentPage.isBrandVisible).toBeTruthy();
        });
});


afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});