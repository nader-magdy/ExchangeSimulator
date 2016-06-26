import { Address } from "./address"

export class Member{
    firstName : string;
    lastName : string;
    middleName: string;
    exchangeId : string;
    dateOfBirth : Date;
    ssn : string;
    email: string;
    address: Address;

    constructor(){
        this.address = new Address();
    }
}