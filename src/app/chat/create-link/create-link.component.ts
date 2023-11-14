import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
@Component({
  selector: 'app-create-link',
  standalone: true,
  imports: [CommonModule,ChatHeaderComponent],
  templateUrl: './create-link.component.html',
  styleUrl: './create-link.component.css'
})
export class CreateLinkComponent {

}
