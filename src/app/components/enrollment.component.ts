import { Component, Input } from '@angular/core'
import { MemberComponent } from './member.component'
import { DependentListComponent } from './dependant-list.component'
import { Person } from '../entities/person'
import { RandomService } from '../services/random.service';

@Component({
    selector: 'ex-enrollment',
    moduleId: module.id,
    template: require("./enrollment.component.html"),
    directives: [
        MemberComponent,
        DependentListComponent
    ],
    providers: [
        RandomService
    ]
})
export class EnrollmentComponent {

    constructor(private randomService: RandomService) {

    }
    generateRandomData(person: Person) {
        person.exchangeId = this.randomService.getExchangeId();
        this.randomService.randomizePerson(person);
        return false;
    }

}