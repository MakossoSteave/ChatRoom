import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ChatService } from '../../chat-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule 
  ],
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  formData = {
    pseudo: '',
    room: ''
  };
  constructor(private router: Router, private chatService: ChatService) { }

  onSubmit() {
    this.chatService.joinRoom(this.formData.pseudo, this.formData.room);
    this.router.navigate(['/chat', this.formData.room]);
  }
}
