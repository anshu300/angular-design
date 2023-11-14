import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockHomeComponent } from './stock-home/stock-home.component';
import { StockLoginComponent } from './stock-login/stock-login.component';
import { StockRegisterComponent } from './stock-register/stock-register.component';
const routes: Routes = [
  {
    path: 'home', component: StockHomeComponent
  },
  {
    path: 'login', component: StockLoginComponent
  },
  {
    path: 'register', component: StockRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockMaketRoutingModule { }
