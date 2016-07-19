import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Member } from './entities/';
import { DashboardComponent, MemberListComponent, EnrollmentComponent, CancellationComponent } from './components/index';
@Component({
  selector: 'ex-app',
  templateUrl: 'main.html',
  directives : [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
  routeName : string;

  constructor(){
  }
 }
