import { Routes } from '@angular/router';
import { HomePageComponent } from './chat/home-page/home-page.component';
import { LoginComponent } from './chat/login/login.component';
import { RegisterComponent } from './chat/register/register.component';
import { HeaderComponent } from './chat_layout/header/header.component';
import { Component } from '@angular/core';
export const routes: Routes = [
    { path: 'chat/login', component: LoginComponent },
    { path: 'chat/register', component: RegisterComponent },
    {
        path: '',
        component: HeaderComponent,
        children: [
            { path: 'chat/home-page', component: HomePageComponent },
        ]
      },
];
