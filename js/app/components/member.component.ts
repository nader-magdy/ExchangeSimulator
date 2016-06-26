import { Component, EventEmitter } from "@angular/core";
import { Member } from "../entities/member"

@Component({
    selector : 'ex-member',
    outputs : ['onMemberChange'],
    templateUrl : "templates/member.html"
})
export class MemberComponent{
    member : Member;
    onMemberChange : EventEmitter<Member> = new EventEmitter<Member>();
    constructor(){
        this.member = new Member();
    }
    onChange(newValue){
        this.onMemberChange.emit(this.member);
    }
}