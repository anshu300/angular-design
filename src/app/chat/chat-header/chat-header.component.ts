import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.css'
})
export class ChatHeaderComponent {

}
