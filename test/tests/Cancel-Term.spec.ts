import { browser, element, by } from 'protractor/globals';
import {  } from 'protractor';
import { CancelTermPage } from '../pages/CancelTerm.page'
import {ElementArrayFinder, ElementFinder, build$, build$$} from 'protractor';
let webdriver = require('selenium-webdriver');


let cancelpage: CancelTermPage;
let originalTimeout: number;
let json = require('test-data/test.json');

beforeEach(() => {
    cancelpage = new CancelTermPage();
    cancelpage.maximizeWindow();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
});
describe("check that header h1 text is Cancel/Term and title was printed", function () {
    it("Print Title", function () {
        var title = cancelpage.title();
        title.then(function (value) {
            console.log(value);
        });
    });
    it("check H1 is Cancel/Term", function () {
        cancelpage.getH1HeaderText().then(function (text) {
            console.log(text);
            expect(text).toContain("Cancel/Term");
        });
    });
});
describe("Check that the entered Exchange ID reflects on the generated X12", function () {
    it("Enter ID", function () {
        cancelpage.clickexchangeId_txt().then(function () {
            cancelpage.setexchangedId_text('1234');
            expect(cancelpage.getexchangeId_txt()).toContain('1234');
        });
    });
    it("Check the ID in the generated X12", function () {
        cancelpage.clickexchangeId_txt().then(function () {
            cancelpage.setexchangedId_text('1234');
            var text = cancelpage.getgenerated_X12_ID();
            expect(text).toContain('1234');
        });
    });
});