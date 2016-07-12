import { Component } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Member } from './entities/';
import { DashboardComponent, EnrollmentComponent, CancellationComponent } from './components/index';
@Component({
  selector: 'ex-app',
  templateUrl: 'main.html',
  directives:[
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  { path: '/',    name: 'Dashboard',    component: DashboardComponent },
  { path: '/enrollment',    name: 'Enrollment',    component: EnrollmentComponent },
  { path: '/cancellation',    name: 'Cancellation',    component: CancellationComponent }
])
export class AppComponent {
  routeName : string;

  constructor(router : Router){
    router.subscribe((result) => {
      this.routeName = result.instruction.routeName;
    });
  }
 }
