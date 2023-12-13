import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EduHeaderComponent } from '../edu-header/edu-header.component';
import { RouterOutlet } from '@angular/router';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-score-card',
  standalone: true,
  imports: [CommonModule,EduHeaderComponent,RouterOutlet],
  templateUrl: './score-card.component.html',
  styleUrl: './score-card.component.css'
})
export class ScoreCardComponent {


  chart: any = [];
 
  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['TRADED QUANTITY', 'NO OF TRADES', 'DELIVERABLE QTY', '% DELIVERABLE'],
        datasets: [
          {
            label: 'TRADED QUANTITY',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
          {
            label: 'NO OF TRADES',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
          {
            label: 'DELIVERABLE QTY',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
          {
            label: '% DELIVERABLE',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

}
