import { Component, Input } from '@angular/core';
import { Dependant } from '../entities/index'
import { DependantComponent } from './dependant.component'

@Component({
    selector: 'ex-dependant-list',
    moduleId: module.id,
    template: require("./dependant-list.component.html"),
    directives: [
        DependantComponent
    ]
})
export class DependentListComponent {
    @Input() dependants: Dependant[];
    selectedDependant: Dependant;
    showDependantForm: boolean = false;
    addMode = true;
    showAddNewDependant() {
        this.addMode = true;
        this.selectedDependant = new Dependant();
        this.showDependantForm = true;
        return false;
    }
    submitDependant() {
        if (this.selectedDependant) {
            if (this.addMode) {
                this.dependants.push(this.selectedDependant);
                this.showDependantForm = false;
            } else {
                this.showDependantForm = false;
            }
        }
    }
    selectDependant(dependant: Dependant) {
        this.addMode = false;
        this.selectedDependant = dependant;
        this.showDependantForm = true;
        return false;
    }
    removeDependant(dependant: Dependant) {
        let i = this.dependants.indexOf(dependant);
        this.dependants.splice(i, 1);
        return false;
    }
}