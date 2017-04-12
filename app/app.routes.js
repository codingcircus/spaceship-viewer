System.register(['@angular/router', './component.spaceships', './component.spaceship-details', './component.spaceship-add'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, component_spaceships_1, component_spaceship_details_1, component_spaceship_add_1;
    var routes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (component_spaceships_1_1) {
                component_spaceships_1 = component_spaceships_1_1;
            },
            function (component_spaceship_details_1_1) {
                component_spaceship_details_1 = component_spaceship_details_1_1;
            },
            function (component_spaceship_add_1_1) {
                component_spaceship_add_1 = component_spaceship_add_1_1;
            }],
        execute: function() {
            routes = [
                {
                    path: 'spaceships/add',
                    component: component_spaceship_add_1.SpaceshipAddComponent,
                },
                {
                    path: 'spaceships',
                    component: component_spaceships_1.SpaceshipsComponent,
                },
                {
                    path: 'spaceships/:id',
                    component: component_spaceship_details_1.SpaceshipDetailsComponent,
                },
                {
                    path: '',
                    redirectTo: '/spaceships',
                    pathMatch: 'full',
                },
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map