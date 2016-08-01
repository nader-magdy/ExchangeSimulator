import { BasePage } from './base.page'
import {browser, element, by} from 'protractor/globals';
import {ElementFinder} from 'protractor'

export class memberpage extends BasePage{

     constructor() {
        super('members');
    }

  fillWithRandomData() {

        return element(by.css("ex-meber-list > div:nth-child(2) > div > div.panel-heading > a > i")).click();

    }

}