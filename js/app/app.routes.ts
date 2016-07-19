import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent, MemberListComponent, EnrollmentComponent, CancellationComponent } from './components/index';

const routes: RouterConfig = [
    { path: '', component: DashboardComponent },
    { path: 'members', component: MemberListComponent },
    { path: 'enrollment', component: EnrollmentComponent },
    { path: 'cancellation', component: CancellationComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];