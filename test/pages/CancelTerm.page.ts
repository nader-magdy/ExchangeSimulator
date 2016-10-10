import { BasePage } from './base.page'
import { browser, element, by } from 'protractor/globals';
import { ElementFinder, ElementArrayFinder } from 'protractor'
import { Address } from '../../src/app/entities/index'


export class CancelTermPage extends BasePage {

    constructor() {
        super('cancellation');
    }

}