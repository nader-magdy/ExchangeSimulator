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
var index_1 = require('../services/index');
var index_2 = require('./index');
var MemberListComponent = (function () {
    function MemberListComponent(memberService, randomService) {
        this.memberService = memberService;
        this.randomService = randomService;
    }
    MemberListComponent.prototype.ngOnInit = function () {
        this.members = this.memberService.getMembers();
    };
    MemberListComponent.prototype.saveMember = function (member) {
    };
    MemberListComponent.prototype.selectMember = function (member) {
    };
    MemberListComponent.prototype.removeMember = function (member) {
    };
    MemberListComponent.prototype.generateRandomData = function (person) {
        person.exchangeId = this.randomService.getExchangeId();
        this.randomService.randomizePerson(person);
        return false;
    };
    MemberListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ex-meber-list',
            templateUrl: 'member-list.component.html',
            directives: [index_2.MemberComponent, index_2.DependentListComponent],
            providers: [index_1.MemberService, index_1.RandomService]
        }), 
        __metadata('design:paramtypes', [index_1.MemberService, index_1.RandomService])
    ], MemberListComponent);
    return MemberListComponent;
}());
exports.MemberListComponent = MemberListComponent;
//# sourceMappingURL=member-list.component.js.map