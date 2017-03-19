System.register(['@angular/core', './services/spaceship.service'], function(exports_1, context_1) {
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
    var core_1, spaceship_service_1;
    var SpaceshipsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (spaceship_service_1_1) {
                spaceship_service_1 = spaceship_service_1_1;
            }],
        execute: function() {
            SpaceshipsComponent = (function () {
                function SpaceshipsComponent(_spaceshipService) {
                    this._spaceshipService = _spaceshipService;
                    this.spaceships = [];
                }
                SpaceshipsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._spaceshipService
                        .getAll()
                        .subscribe(function (spaceships) { return _this.spaceships = spaceships; });
                };
                SpaceshipsComponent = __decorate([
                    core_1.Component({
                        selector: 'spaceship',
                        templateUrl: 'partials/spaceships.html',
                        styleUrls: ['css/spaceships.css'],
                        providers: [
                            spaceship_service_1.SpaceshipService
                        ],
                    }), 
                    __metadata('design:paramtypes', [spaceship_service_1.SpaceshipService])
                ], SpaceshipsComponent);
                return SpaceshipsComponent;
            }());
            exports_1("SpaceshipsComponent", SpaceshipsComponent);
        }
    }
});
//# sourceMappingURL=component.spaceships.js.map