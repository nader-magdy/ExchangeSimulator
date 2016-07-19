import {provide} from "@angular/core";
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { appRouterProviders } from './app.routes';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
bootstrap(AppComponent, [
  appRouterProviders,
  {provide: LocationStrategy, useClass: PathLocationStrategy}
]);
