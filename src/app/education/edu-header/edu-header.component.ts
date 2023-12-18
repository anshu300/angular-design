import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-edu-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './edu-header.component.html',
  styleUrl: './edu-header.component.css'
})
export class EduHeaderComponent {

}
