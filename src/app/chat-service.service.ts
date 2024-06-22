import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  joinRoom(pseudo: string, room: string) {
    this.socket.emit('joinRoom', { pseudo, room });
  }

  sendMessage(pseudo: string, room: string, message: string) {
    this.socket.emit('chatMessage', { pseudo, room, message });
  }

  receiveMessages(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('message', (message: string) => {
        observer.next(message);
      });

      // Handle cleanup when the subscription is cancelled
      return () => {
        this.socket.off('message');
      };
    });
  }
}
