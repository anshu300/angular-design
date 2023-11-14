import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
export const routes: Routes = [
    {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
    },
    {
        path: 'education',
        loadChildren: () => import('./education/education.module').then(m => m.EducationModule)
    },
    {
        path: 'stock-market',
        loadChildren: () => import('./stock-maket/stock-maket.module').then(m => m.StockMaketModule)
    },
    {
        path: '',
        component:LandingPageComponent
    },
];
