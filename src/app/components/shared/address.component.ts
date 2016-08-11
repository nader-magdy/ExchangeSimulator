import { Component, Input } from '@angular/core'
import { Address } from '../../entities/index';

@Component({
    selector: 'ex-address',
    moduleId: module.id,
    template: require("./address.component.html")
})
export class AddressComponent {
    @Input() address: Address;
    selectState(state: string) {
        this.address.state = state;
        return false;
    }
}
