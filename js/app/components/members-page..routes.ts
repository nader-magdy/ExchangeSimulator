import { provideRouter, RouterConfig } from '@angular/router';

import {  MemberListComponent} from './index';

const routes: RouterConfig = [
    { path: '', component: MemberListComponent }
];
export const memberRouterProviders = [
    provideRouter(routes)
];