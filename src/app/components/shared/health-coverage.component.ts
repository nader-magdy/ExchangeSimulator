import { Component, Input } from '@angular/core';
import { HealthCoverage } from '../../entities/index';

@Component({
    selector : 'ex-health-coverage',
    moduleId : module.id,
    template: require("./health-coverage.component.html")
})
export class HealthCoverageComponent
{
    @Input() healthCoverage : HealthCoverage;
}