import { Component, EventEmitter } from "@angular/core";
import { DependentListComponent } from "./dependant-list.component";
import { PersonalInfoComponent } from "./personal-info.component";
import { Member } from "../entities/index";

@Component({
    selector : 'ex-member',
    moduleId : module.id,
    templateUrl : "member.component.html",
    directives : [DependentListComponent, PersonalInfoComponent]
})
export class MemberComponent{
    member : Member;
    constructor(){
        this.member = new Member();
    }
}