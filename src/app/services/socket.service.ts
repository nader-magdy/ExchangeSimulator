import {Injectable, EventEmitter} from '@angular/core';

declare var io: any;

@Injectable()
export class SocketService {

    socket : any = new io("http://localhost:5958");

    dataReceived: EventEmitter<string> = new EventEmitter<string>();

    init() {

        this.socket.emit('chat message', 'msg');

        this.socket.on('chat message', (message) => {
            this.dataReceived.emit(message);
        });
    }


}