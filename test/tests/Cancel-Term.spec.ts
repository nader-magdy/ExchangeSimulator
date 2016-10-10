import { browser, element, by } from 'protractor/globals';
import {  } from 'protractor';
import { CancelTermPage } from '../pages/CancelTerm.page'
import {ElementArrayFinder, ElementFinder, build$, build$$} from 'protractor';
let webdriver = require('selenium-webdriver');


let cancelpage: CancelTermPage;
let originalTimeout: number;
let json = require('test-data/test.json');

beforeEach(() => {
    cancelpage = cancelpage || new CancelTermPage();
    cancelpage.maximizeWindow();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
});