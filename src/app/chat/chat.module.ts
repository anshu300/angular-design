import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { register } from 'swiper/element/bundle';
register();
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChatRoutingModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatModule { }
