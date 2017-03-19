System.register(['@angular/router', './component.spaceships'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, component_spaceships_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (component_spaceships_1_1) {
                component_spaceships_1 = component_spaceships_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: 'spaceships',
                    component: component_spaceships_1.SpaceshipsComponent,
                },
                {
                    path: '',
                    redirectTo: '/spaceships',
                    pathMatch: 'full',
                }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map