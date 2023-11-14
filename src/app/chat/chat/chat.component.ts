import { Component,ElementRef, ViewChild,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHeaderComponent } from '../chat-header/chat-header.component';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,ChatHeaderComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  Images: any[] = [
    {
      src: 'https://loremflickr.com/g/600/400/paris',
      alt: 'Image 1',
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 2'
    }, {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 3'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 4'
    }, {
      src: 'https://loremflickr.com/600/400/paris,girl/all',
      alt: 'Image 5'
    }, {
      src: 'https://loremflickr.com/600/400/brazil,rio',
      alt: 'Image 6'
    }    
  ]
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  ngAfterViewInit() {
    this.swiperReady();
  }
}
