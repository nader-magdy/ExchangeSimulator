import {provide} from "@angular/core";
import {
  Location,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import {
  ROUTER_DIRECTIVES,
  ROUTER_PROVIDERS,
  RouteConfig
} from '@angular/router-deprecated';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
