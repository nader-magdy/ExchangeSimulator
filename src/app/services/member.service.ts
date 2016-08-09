import {Injectable } from '@angular/core';
import { Member } from '../entities/index'

@Injectable()
export class MemberService{
    members : Member[];
    getMembers(){
        return this.members;
    }
    addMember(member : Member)
    {
        this.members.push(member);
    }
}