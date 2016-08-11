import { Component, Input } from '@angular/core';
import { ContactInformation } from '../../entities/index';

@Component({
    selector: 'ex-contact-info',
    moduleId: module.id,
})
export class ContactInfoComponent {
    @Input() contactInfo: ContactInformation;
}