import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'ex-app',
  template: require("./app.component.html"),
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  routeName: string;

  constructor() {
  }
}
