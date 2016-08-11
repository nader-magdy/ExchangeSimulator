import { Component, OnInit } from '@angular/core';
import { MemberService, RandomService} from '../services/index';
import { MemberComponent, DependentListComponent} from './index';
import { Person, Member} from '../entities/index';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'ex-meber-list',
    directives : [MemberComponent, DependentListComponent,ROUTER_DIRECTIVES],
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