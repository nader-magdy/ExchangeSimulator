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
var core_1 = require("@angular/core");
var dependant_list_component_1 = require("./dependant-list.component");
var personal_info_component_1 = require("./personal-info.component");
var index_1 = require("../entities/index");
var MemberComponent = (function () {
    function MemberComponent() {
        this.member = new index_1.Member();
    }
    MemberComponent = __decorate([
        core_1.Component({
            selector: 'ex-member',
            moduleId: module.id,
            templateUrl: "member.component.html",
            directives: [dependant_list_component_1.DependentListComponent, personal_info_component_1.PersonalInfoComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
//# sourceMappingURL=member.component.js.map