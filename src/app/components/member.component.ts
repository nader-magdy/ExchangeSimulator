import { Component, EventEmitter } from "@angular/core";
import { PersonalInfoComponent } from "./shared/personal-info.component";
import { ContactInfoComponent } from "./shared/contact-info.component";
import { AddressComponent } from './shared/address.component';
import { HealthCoverageComponent } from './shared/health-coverage.component';
import { Member } from "../entities/index";

@Component({
    selector: 'ex-member',
    moduleId: module.id,
    templateUrl: "member.component.html",
    directives: [
        PersonalInfoComponent,
        AddressComponent,
        ContactInfoComponent,
        HealthCoverageComponent
    ]
})
export class MemberComponent {
    member: Member;
    constructor() {
        this.member = new Member();
    }
}