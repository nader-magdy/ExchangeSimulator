import { Component, Input } from '@angular/core'
import { MemberComponent } from './member.component'
import { DependentListComponent } from './dependant-list.component'
import { Member } from '../entities/member'

@Component({
    selector : 'ex-enrollment',
    moduleId : module.id,
    templateUrl : "enrollment.component.html",
    directives : [
        MemberComponent,
        DependentListComponent
    ]
})
export class EnrollmentComponent{
    member: Member;
    onSelectedMemberChange(member : Member){
        this.member = member;
    }

}