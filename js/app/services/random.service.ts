import { Injectable } from '@angular/core';
import { Person } from '../entities/index'

@Injectable()
export class RandomService {
    getExchangeId() {
        let m = this.randomNumber(1, 20);
        let fPart = this.randomNumber(111111000, 999999999);
        let lPart = this.randomNumber(100, 999);
        return `${fPart}${m}${lPart}`;
    }
    randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    randomSsn() {
        return this.randomNumber(111111111, 999999999).toString();
    }
    randomName() {
        let names =
            "Smith Johnson Williams Brown Jones Miller Davis Garcia Rodriguez Mahran Bader Mina Said Ahmed Mustafa Farag Hassan Yasser let var Wilson Martinez Anderson Taylor Thomas Hernandez Moore Martin Jackson Thompson White Noah Sophia Liam Emma Jacob Olivia Mason Isabella William Ava Ethan Mia Michael Emily Alexander Abigail Jayden Madison Daniel Elizabeth"
                .split(' ');
        return names[this.randomNumber(0, names.length - 1)] + this.randomNumber(111, 999);

    }
    randomizePerson(person: Person) {
        person.personalInfo.firstName = this.randomName();
        person.personalInfo.lastName = this.randomName();
        person.personalInfo.middleName = this.randomName();
        person.personalInfo.ssn = this.randomSsn();
    }
    randDOB() {
        let y = this.randomNumber(1965, 1980);
        let m = this.randomNumber(1, 12).toString();
        let d = this.randomNumber(1, 28).toString();
        if (m.length < 2) {
            m = `0${m}`;
        }
        if (d.length < 2) {
            d = `0${d}`;
        }
        return `${y}${m}${d}`;
    }

}