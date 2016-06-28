import {  Address, PersonalInfo, Dependant, ContactInformation } from "./index";
export class Person {
    personalInfo: PersonalInfo;
    exchangeId: string;
    address: Address;
    contactInformation: ContactInformation;

    constructor() {
        this.personalInfo = new PersonalInfo();
        this.address = new Address();
        this.contactInformation = new ContactInformation();
    }
}