import { Person, Dependant } from "./index";

export class Member extends Person{
    dependants : Dependant[];

    constructor(){
        super();
        this.dependants = [];
    }
}