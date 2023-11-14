import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StockHeaderComponent } from '../stock-header/stock-header.component';
@Component({
  selector: 'app-stock-home',
  standalone: true,
  imports: [CommonModule,RouterOutlet,StockHeaderComponent],
  templateUrl: './stock-home.component.html',
  styleUrl: './stock-home.component.css'
})
export class StockHomeComponent {

}
