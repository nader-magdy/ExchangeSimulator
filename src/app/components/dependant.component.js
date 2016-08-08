"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var index_1 = require('../entities/index');
var personal_info_component_1 = require("./shared/personal-info.component");
var contact_info_component_1 = require("./shared/contact-info.component");
var address_component_1 = require('./shared/address.component');
var health_coverage_component_1 = require('./shared/health-coverage.component');
var random_service_1 = require('../services/random.service');
var DependantComponent = (function () {
    function DependantComponent(randomService) {
        this.randomService = randomService;
    }
    DependantComponent.prototype.generateRandomData = function () {
        this.dependant.exchangeId = this.randomService.getExchangeId();
        this.randomService.randomizePerson(this.dependant);
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Dependant)
    ], DependantComponent.prototype, "dependant", void 0);
    DependantComponent = __decorate([
        core_1.Component({
            selector: 'ex-dependant',
            moduleId: module.id,
            templateUrl: 'dependant.component.html',
            directives: [
                personal_info_component_1.PersonalInfoComponent,
                address_component_1.AddressComponent,
                contact_info_component_1.ContactInfoComponent,
                health_coverage_component_1.HealthCoverageComponent
            ],
            providers: [
                random_service_1.RandomService
            ]
        }), 
        __metadata('design:paramtypes', [random_service_1.RandomService])
    ], DependantComponent);
    return DependantComponent;
}());
exports.DependantComponent = DependantComponent;
//# sourceMappingURL=dependant.component.js.map