import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,ChatHeaderComponent,RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
