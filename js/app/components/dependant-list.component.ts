import { Component, Input } from '@angular/core';
import { Dependant } from '../entities/index'

@Component({
    selector: 'ex-dependant-list',
    moduleId: module.id,
    templateUrl: 'dependant-list.component.html'
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
    }
}