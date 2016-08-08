import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardComponent, MemberListComponent, EnrollmentComponent, CancellationComponent, MembersPageComponent ,MemberAddComponent, LogComponent} from './components/index';

const routes: RouterConfig = [
    { path: '', component: DashboardComponent },
    {
        path: 'members', component: MembersPageComponent,
        children: [
            { path: '', component: MemberListComponent },
            { path: 'list', component: MemberListComponent },
              { path: 'add', component: MemberAddComponent }
        ]
    },
    { path: 'enrollment', component: EnrollmentComponent },
    { path: 'cancellation', component: CancellationComponent },
    { path: 'logger', component: LogComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];