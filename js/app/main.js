"use strict";
var common_1 = require('@angular/common');
var app_routes_1 = require('./app.routes');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    { provide: common_1.LocationStrategy, useClass: common_1.PathLocationStrategy }
]);
//# sourceMappingURL=main.js.map