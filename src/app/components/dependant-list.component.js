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
var dependant_component_1 = require('./dependant.component');
var DependentListComponent = (function () {
    function DependentListComponent() {
        this.showDependantForm = false;
        this.addMode = true;
    }
    DependentListComponent.prototype.showAddNewDependant = function () {
        this.addMode = true;
        this.selectedDependant = new index_1.Dependant();
        this.showDependantForm = true;
        return false;
    };
    DependentListComponent.prototype.submitDependant = function () {
        if (this.selectedDependant) {
            if (this.addMode) {
                this.dependants.push(this.selectedDependant);
                this.showDependantForm = false;
            }
            else {
                this.showDependantForm = false;
            }
        }
    };
    DependentListComponent.prototype.selectDependant = function (dependant) {
        this.addMode = false;
        this.selectedDependant = dependant;
        this.showDependantForm = true;
        return false;
    };
    DependentListComponent.prototype.removeDependant = function (dependant) {
        var i = this.dependants.indexOf(dependant);
        this.dependants.splice(i, 1);
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DependentListComponent.prototype, "dependants", void 0);
    DependentListComponent = __decorate([
        core_1.Component({
            selector: 'ex-dependant-list',
            moduleId: module.id,
            templateUrl: 'dependant-list.component.html',
            directives: [
                dependant_component_1.DependantComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DependentListComponent);
    return DependentListComponent;
}());
exports.DependentListComponent = DependentListComponent;
//# sourceMappingURL=dependant-list.component.js.map