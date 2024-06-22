import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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

  onSubmit() {
    console.log('Pseudo:', this.formData.pseudo);
    console.log('Room:', this.formData.room);
  }
}
