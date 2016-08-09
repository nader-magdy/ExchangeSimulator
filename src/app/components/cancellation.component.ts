import { Component, Input } from '@angular/core'
import { MemberComponent } from './member.component'
import { Person } from '../entities/person'
import { RandomService } from '../services/random.service';

@Component({
    selector : 'ex-cancellation',
    moduleId : module.id,
    templateUrl : "cancellation.component.html",
    directives : [
        MemberComponent
    ],
    providers : [
        RandomService
    ]
})
export class CancellationComponent{

    deactivationDate : Date;
    deactivationReason : string;

    constructor(private randomService: RandomService){

    }
    generateRandomData(person : Person){
        person.exchangeId = this.randomService.getExchangeId();
        this.randomService.randomizePerson(person);
        return false;
    }

}