import { BasePage } from './base.page'
import {browser, element, by} from 'protractor/globals';

export class NewEnrollmentPage extends BasePage{
    constructor(){
		super('enrollment');
	}
    getH1HeaderText(){
        return element(by.css("#page-wrapper > div > ex-enrollment > div:nth-child(1) > div > h1")).getText();// element(by.css('h1.header')).getText();
    }

}
