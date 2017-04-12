System.register(['@angular/core', './services/spaceship.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, spaceship_service_1, router_1, router_2;
    var SpaceshipDeleteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spaceship_service_1_1) {
                spaceship_service_1 = spaceship_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            }],
        execute: function() {
            SpaceshipDeleteComponent = (function () {
                function SpaceshipDeleteComponent(_spaceshipService, route, router) {
                    this._spaceshipService = _spaceshipService;
                    this.route = route;
                    this.router = router;
                    this.data = {
                        _id: '0',
                        name: 'Loading …',
                        pilot: 'Loading …',
                        image: '',
                        rating: 0,
                    };
                }
                SpaceshipDeleteComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        var id = params['id'];
                        _this._spaceshipService.get(id)
                            .subscribe(function (spaceship) { return _this.data = spaceship; });
                    });
                };
                SpaceshipDeleteComponent.prototype.ngAfterViewChecked = function () {
                };
                SpaceshipDeleteComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this._spaceshipService.delete(this.data._id)
                        .subscribe(function () {
                        _this.router.navigate(['/']);
                    });
                };
                SpaceshipDeleteComponent = __decorate([
                    core_1.Component({
                        selector: 'spaceship-delete',
                        templateUrl: 'partials/spaceship-delete.html',
                        styleUrls: [
                            './css/top-bar.css',
                            './css/card.css',
                            './css/form.css',
                        ],
                        providers: [
                            spaceship_service_1.SpaceshipService
                        ],
                    }), 
                    __metadata('design:paramtypes', [spaceship_service_1.SpaceshipService, router_2.ActivatedRoute, router_1.Router])
                ], SpaceshipDeleteComponent);
                return SpaceshipDeleteComponent;
            }());
            exports_1("SpaceshipDeleteComponent", SpaceshipDeleteComponent);
        }
    }
});
//# sourceMappingURL=component.spaceship-delete.js.map