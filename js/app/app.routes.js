"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./components/index');
var routes = [
    { path: '', component: index_1.DashboardComponent },
    { path: 'members', component: index_1.MemberListComponent },
    { path: 'enrollment', component: index_1.EnrollmentComponent },
    { path: 'cancellation', component: index_1.CancellationComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map