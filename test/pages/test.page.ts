import {browser, element, by} from 'protractor/globals';

export class TestPage{
    constructor(){}
    getTitle(){
        return "Hello";// element(by.css('h1.header')).getText();
    }
}