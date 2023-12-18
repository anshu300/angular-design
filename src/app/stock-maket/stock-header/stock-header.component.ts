import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-stock-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './stock-header.component.html',
  styleUrl: './stock-header.component.css'
})
export class StockHeaderComponent {

}
