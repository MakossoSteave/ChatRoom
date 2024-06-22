import { Component } from '@angular/core';
import { ChatService } from '../../chat-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  room: string|any;
  pseudo: string|any;
  message: string= '';
  messages: string[] = [];

  constructor(private route: ActivatedRoute, private chatService: ChatService) {
    this.room = this.route.snapshot.paramMap.get('room');
    this.pseudo = sessionStorage.getItem('pseudo');
  }
  ngOnInit() {
    this.chatService.receiveMessages().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.chatService.sendMessage(this.pseudo, this.room, this.message);
      this.message = '';
    }
  }
}
