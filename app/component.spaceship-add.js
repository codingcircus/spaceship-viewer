System.register(['@angular/core', '@angular/forms', '@angular/router', './services/spaceship.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, spaceship_service_1;
    var SpaceshipAdd;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (spaceship_service_1_1) {
                spaceship_service_1 = spaceship_service_1_1;
            }],
        execute: function() {
            SpaceshipAdd = (function () {
                function SpaceshipAdd(formBuilder, router, _spaceshipService) {
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this._spaceshipService = _spaceshipService;
                }
                SpaceshipAdd.prototype.ngOnInit = function () {
                    this.form = this.formBuilder.group({
                        name: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        pilot: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        image: this.formBuilder.control(''),
                        rating: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[0-9]+')
                        ]))
                    });
                };
                SpaceshipAdd.prototype.onSubmit = function (spaceship) {
                    var _this = this;
                    this._spaceshipService.add(spaceship)
                        .subscribe(function () {
                        _this.router.navigate(['/spaceships']);
                    });
                };
                SpaceshipAdd = __decorate([
                    core_1.Component({
                        selector: 'spaceship-add',
                        templateUrl: 'partials/spaceship-add.html',
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, spaceship_service_1.SpaceshipService])
                ], SpaceshipAdd);
                return SpaceshipAdd;
            }());
            exports_1("SpaceshipAdd", SpaceshipAdd);
        }
    }
});
//# sourceMappingURL=component.spaceship-add.js.map