System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var SpaceshipService;
    function mapSpaceships(response) {
        // The response of the API has a results
        // property with the actual results
        return response.json().map(toSpaceship);
    }
    function toSpaceship(r) {
        var spaceship = ({
            _id: r._id,
            name: r.name,
            pilot: r.pilot,
            image: r.image,
            rating: parseInt(r.rating, 10),
        });
        return spaceship;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            SpaceshipService = (function () {
                function SpaceshipService(http) {
                    this.http = http;
                    this.baseUrl = 'http://0.0.0.0:8081/v1';
                }
                SpaceshipService.prototype.getAll = function () {
                    var spaceships$ = this.http
                        .get(this.baseUrl + "/spaceships")
                        .map(mapSpaceships);
                    return spaceships$;
                };
                SpaceshipService.prototype.get = function (id) {
                    var spaceship$ = this.http
                        .get(this.baseUrl + "/spaceships/" + id)
                        .map(function (response) { return toSpaceship(response.json()); });
                    return spaceship$;
                };
                SpaceshipService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SpaceshipService);
                return SpaceshipService;
            }());
            exports_1("SpaceshipService", SpaceshipService);
        }
    }
});
//# sourceMappingURL=spaceship.service.js.map