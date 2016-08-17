import { browser, element, by } from 'protractor/globals';
import {  } from 'protractor';
import { NewEnrollmentPage } from '../pages/new-enrollment.page'
import {ElementArrayFinder, ElementFinder, build$, build$$} from 'protractor';
let webdriver = require('selenium-webdriver');


let enrollmentPage: NewEnrollmentPage;
let originalTimeout: number;
let json = require('test-data/test.json');

beforeEach(() => {
    enrollmentPage = enrollmentPage || new NewEnrollmentPage();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
});

describe("check that header h1 text is member enrollment  ", () => {
    it("header h1 text", () => {
        //console.log(json);
        enrollmentPage.maximizeWindow();
        //expect(enrollmentPage.explicitWait(enrollmentPage.getH1HeaderText(), 20, "error in a function")).toBeTruthy();
        //let text = enrollmentPage.getH1HeaderText();
        enrollmentPage.getH1HeaderText().then((text) => {
            console.log(text);
            expect(text).toContain("Enrollemnt New Member");

        });

    });
});

describe("explicit wait  ", () => {
    it("check brand displayed or not ", () => {

        enrollmentPage.maximizeWindow();
        expect(enrollmentPage.explicitWait(enrollmentPage.getH1HeaderText(), 20, "error in a function"));
        let text = enrollmentPage.getH1HeaderText();
        expect(text).toEqual("Enrollemnt New Member");
    });
});
describe("validate generated text against x12 format", () => {
    it("check RandomLastName is equal to generatedX12LastName", () => {
        let RandomLastName = enrollmentPage.generatedRandomLastName();
        let generatedX12LastName = enrollmentPage.generatedX12LastName();
        expect(RandomLastName).toEqual(generatedX12LastName);
    });
});

describe("check that fillWithRandomData button worked well  ", () => {
    it("fillWithRandomData button", () => {

        enrollmentPage.fillWithRandomData().then(() => {
            enrollmentPage.fillAddressContact(json)
            enrollmentPage.exchangeId_txt.getAttribute('value').then(function (value) {
                expect(value).toBeTruthy();
            });
        });


    });
});
describe("check number of state and number of bar Items  displayed correctly or not   ", () => {
    it("number of states validation ", () => {
        expect(enrollmentPage.getNumberOfStates()).toEqual(51);
        expect(enrollmentPage.getNumberOfBarItems()).toEqual(5);
    });
});
describe("check that brand displayed  ", () => {
    it("brand is a logo  ", () => {
        expect(enrollmentPage.isBrandVisible).toBeTruthy();
    });
});

describe("check handles", () => {
    it("Chek in handle in current tab", () => {
        enrollmentPage.getAllWindowHandles().then((handles) => {
            // parentHandle = handles[0];
            var popUpHandle = handles[0];

            // Change to new handle
            browser.driver.switchTo().window(popUpHandle);

            var popUpHandleFinal = browser.driver.getWindowHandle();
            expect(popUpHandleFinal).toEqual(popUpHandle);
        });

    });
});


afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});