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
var member_component_1 = require('./member.component');
var dependant_list_component_1 = require('./dependant-list.component');
var random_service_1 = require('../services/random.service');
var EnrollmentComponent = (function () {
    function EnrollmentComponent(randomService) {
        this.randomService = randomService;
    }
    EnrollmentComponent.prototype.generateRandomData = function (person) {
        person.exchangeId = this.randomService.getExchangeId();
        this.randomService.randomizePerson(person);
        return false;
    };
    EnrollmentComponent = __decorate([
        core_1.Component({
            selector: 'ex-enrollment',
            moduleId: module.id,
            templateUrl: "enrollment.component.html",
            directives: [
                member_component_1.MemberComponent,
                dependant_list_component_1.DependentListComponent
            ],
            providers: [
                random_service_1.RandomService
            ]
        }), 
        __metadata('design:paramtypes', [random_service_1.RandomService])
    ], EnrollmentComponent);
    return EnrollmentComponent;
}());
exports.EnrollmentComponent = EnrollmentComponent;
//# sourceMappingURL=enrollment.component.js.map