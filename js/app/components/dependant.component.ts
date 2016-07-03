import {Component, Input} from '@angular/core';
import { Dependant } from '../entities/index';
import { PersonalInfoComponent } from "./shared/personal-info.component";
import { ContactInfoComponent } from "./shared/contact-info.component";
import { AddressComponent } from './shared/address.component';
import { HealthCoverageComponent } from './shared/health-coverage.component';
import { RandomService } from '../services/random.service';

@Component({
    selector: 'ex-dependant',
    moduleId: module.id,
    templateUrl: 'dependant.component.html',
    directives : [
        PersonalInfoComponent,
        AddressComponent,
        ContactInfoComponent,
        HealthCoverageComponent
    ],
    providers :[
        RandomService
    ]
})
export class DependantComponent {
    @Input() dependant: Dependant;
    constructor(private randomService: RandomService)
    {}
    generateRandomData(){
        this.dependant.exchangeId = this.randomService.getExchangeId();
        this.randomService.randomizePerson(this.dependant);
        return false;
    }
}