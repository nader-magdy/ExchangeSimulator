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
var index_1 = require('../../entities/index');
var AddressComponent = (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.selectState = function (state) {
        this.address.state = state;
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Address)
    ], AddressComponent.prototype, "address", void 0);
    AddressComponent = __decorate([
        core_1.Component({
            selector: 'ex-address',
            moduleId: module.id,
            templateUrl: 'address.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map