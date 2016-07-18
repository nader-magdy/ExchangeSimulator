import { Component, OnInit } from '@angular/core';
import { MemberService, RandomService} from '../services/index';
import { MemberComponent, DependentListComponent} from './index';
import { Person, Member} from '../entities/index';

@Component({
    moduleId: module.id,
    selector: 'ex-meber-list',
    templateUrl: 'member-list.component.html',
    directives : [MemberComponent, DependentListComponent],
    providers:[MemberService, RandomService]
})
export class MemberListComponent implements OnInit {
    members : Member[]

    constructor(private memberService: MemberService, private randomService : RandomService) { }

    ngOnInit() {
        this.members = this.memberService.getMembers();
     }
     saveMember(member:Member)
     {

     }
     
     selectMember(member:Member)
     {
         
     }
     
     removeMember(member:Member)
     {
         
     }
     generateRandomData(person : Person){
        person.exchangeId = this.randomService.getExchangeId();
        this.randomService.randomizePerson(person);
        return false;
    }
}