import {Component, EventEmitter, OnInit} from '@angular/core';
import {SocketService} from '../services/index';
import {LogEntity} from '../entities/index';

@Component({
    selector: 'log',
    templateUrl: 'log.component.html',
    providers: [SocketService]
})
export class LogComponent implements OnInit{

    public entries: LogEntity[] = [];

    constructor(private _socketService: SocketService) {
    }

    ngOnInit() {

        this._socketService.dataReceived.subscribe((message) => {
            this.entries = JSON.parse(message);
        });

        this._socketService.init();
    }
}