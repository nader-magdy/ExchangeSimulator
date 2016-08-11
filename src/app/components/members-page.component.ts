import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MemberComponent, DependentListComponent } from './index';

@Component({
    selector: 'ex-members-page',
    moduleId: module.id,
    directives: [MemberComponent, DependentListComponent, ROUTER_DIRECTIVES],
})
export class MembersPageComponent {


    constructor() { }


}