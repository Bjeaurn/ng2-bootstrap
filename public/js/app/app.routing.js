"use strict";
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var pagenotfound_component_1 = require("./errors/pagenotfound.component");
var APP_ROUTES = [
    { path: '', component: app_component_1.AppComponent },
    { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES, { enableTracing: true });
//# sourceMappingURL=app.routing.js.map