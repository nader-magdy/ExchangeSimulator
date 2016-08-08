"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./components/index');
var routes = [
    { path: '', component: index_1.DashboardComponent },
    {
        path: 'members', component: index_1.MembersPageComponent,
        children: [
            { path: '', component: index_1.MemberListComponent },
            { path: 'list', component: index_1.MemberListComponent },
            { path: 'add', component: index_1.MemberAddComponent }
        ]
    },
    { path: 'enrollment', component: index_1.EnrollmentComponent },
    { path: 'cancellation', component: index_1.CancellationComponent },
    { path: 'logger', component: index_1.LogComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map