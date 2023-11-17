import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduHeaderComponent } from '../edu-header/edu-header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-score-card',
  standalone: true,
  imports: [CommonModule,EduHeaderComponent,RouterOutlet],
  templateUrl: './score-card.component.html',
  styleUrl: './score-card.component.css'
})
export class ScoreCardComponent {

}
