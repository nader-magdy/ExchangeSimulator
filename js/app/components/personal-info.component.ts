import {Component, Input} from "@angular/core";
import {PersonalInfo} from "../entities/index";

@Component({
    selector : 'ex-personal-info',
    moduleId : module.id,
    templateUrl : 'personal-info.component.html'
})
export class PersonalInfoComponent{
    @Input() personalInfo : PersonalInfo;
}