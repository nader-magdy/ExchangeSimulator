import {  Address,
    PersonalInfo,
    Dependant,
    ContactInformation,
    HealthCoverage } from "./index";
export class Person {
    personalInfo: PersonalInfo;
    exchangeId: string;
    address: Address;
    contactInformation: ContactInformation;
    healthCoverage: HealthCoverage;

    constructor() {
        this.personalInfo = new PersonalInfo();
        this.address = new Address();
        this.contactInformation = new ContactInformation();
        this.healthCoverage = new HealthCoverage();
    }
}