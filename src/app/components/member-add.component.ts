import { Component } from "@angular/core";
import { MemberComponent } from "./index";
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector: 'ex-member-add',
    moduleId: module.id,
    template: require("./member-add.component.html"),
    directives: [
        MemberComponent,
        ROUTER_DIRECTIVES
    ]
})
export class MemberAddComponent {

    constructor() {
      
    }
}