System.register(['@angular/core', '@angular/http', '@angular/platform-browser', '@angular/forms', './app.routes', './component.app', './component.spaceships', './component.spaceship-details', './component.app-header', './component.spaceship-add', './component.spaceship-delete', './pipe.search'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, platform_browser_1, forms_1, app_routes_1, component_app_1, component_spaceships_1, component_spaceship_details_1, component_app_header_1, component_spaceship_add_1, component_spaceship_delete_1, pipe_search_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (component_app_1_1) {
                component_app_1 = component_app_1_1;
            },
            function (component_spaceships_1_1) {
                component_spaceships_1 = component_spaceships_1_1;
            },
            function (component_spaceship_details_1_1) {
                component_spaceship_details_1 = component_spaceship_details_1_1;
            },
            function (component_app_header_1_1) {
                component_app_header_1 = component_app_header_1_1;
            },
            function (component_spaceship_add_1_1) {
                component_spaceship_add_1 = component_spaceship_add_1_1;
            },
            function (component_spaceship_delete_1_1) {
                component_spaceship_delete_1 = component_spaceship_delete_1_1;
            },
            function (pipe_search_1_1) {
                pipe_search_1 = pipe_search_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            http_1.HttpModule,
                            forms_1.FormsModule,
                            app_routes_1.routing,
                            forms_1.ReactiveFormsModule,
                        ],
                        declarations: [
                            component_app_1.AppComponent,
                            component_app_header_1.AppHeaderComponent,
                            component_spaceships_1.SpaceshipsComponent,
                            component_spaceship_details_1.SpaceshipDetailsComponent,
                            pipe_search_1.SearchPipe,
                            component_spaceship_add_1.SpaceshipAddComponent,
                            component_spaceship_delete_1.SpaceshipDeleteComponent,
                        ],
                        bootstrap: [
                            component_app_1.AppComponent,
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.modules.js.map