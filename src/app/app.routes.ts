import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
    },
    {
        path: 'education',
        loadChildren: () => import('./education/education.module').then(m => m.EducationModule)
    },
];
