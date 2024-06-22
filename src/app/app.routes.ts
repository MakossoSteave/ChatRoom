import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ChatComponent } from './Pages/chat/chat.component';

export const routes: Routes = [
    
        { path: '', component: HomeComponent },
        {path:'chat', component: ChatComponent}
    
];
