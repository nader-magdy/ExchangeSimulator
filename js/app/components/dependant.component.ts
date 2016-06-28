import {Component, Input} from '@angular/core';
import { Dependant } from '../entities/index';
import { PersonalInfoComponent } from "./shared/personal-info.component";
import { ContactInfoComponent } from "./shared/contact-info.component";
import { AddressComponent } from './shared/address.component';
import { HealthCoverageComponent } from './shared/health-coverage.component';

@Component({
    selector: 'ex-dependant',
    moduleId: module.id,
    templateUrl: 'dependant.component.html',
    directives : [
        PersonalInfoComponent,
        AddressComponent,
        ContactInfoComponent,
        HealthCoverageComponent
    ]
})
export class DependantComponent {
    @Input() dependant: Dependant;
}