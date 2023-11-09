import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomePageComponent } from './chat/home-page/home-page.component';
import { LoginComponent } from './chat/login/login.component';
import { RegisterComponent } from './chat/register/register.component';
import { HeaderComponent } from './chat_layout/header/header.component';
import { EduHeaderComponent } from './edu_layout/edu-header/edu-header.component';
import { EduHomeComponent } from './education/edu-home/edu-home.component';
import { EduLoginComponent } from './education/edu-login/edu-login.component'; 
import { EduRegisterComponent } from './education/edu-register/edu-register.component';

export const routes: Routes = [
   
    { path: 'chat/login', component: LoginComponent },
    { path: 'chat/register', component: RegisterComponent },
    { path: 'education/edu-login', component: EduLoginComponent },
    { path: 'education/edu-register', component: EduRegisterComponent },

    {
        path: '',
        component: HeaderComponent,
        children: [
            { path: 'chat/home-page', component: HomePageComponent },
        ]
      },

      {
        path: '',
        component: EduHeaderComponent,
        children: [
            { path: 'education/edu-home', component: HomePageComponent },
        ]
      },
];
