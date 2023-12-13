import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockHeaderComponent } from '../stock-header/stock-header.component';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,StockHeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
