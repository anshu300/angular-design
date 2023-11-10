import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduHeaderComponent } from '../edu-header/edu-header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-edu-home',
  standalone: true,
  imports: [CommonModule,EduHeaderComponent,RouterOutlet],
  templateUrl: './edu-home.component.html',
  styleUrl: './edu-home.component.css'
})
export class EduHomeComponent {

}
