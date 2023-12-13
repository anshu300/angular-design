import { Component,ElementRef, ViewChild,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Swiper } from 'swiper';
import { EduHeaderComponent } from '../edu-header/edu-header.component';
declare var window: any;
@Component({
  selector: 'app-objective',
  standalone: true,
  imports: [CommonModule,EduHeaderComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './objective.component.html',
  styleUrl: './objective.component.css'
})
export class ObjectiveComponent {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  isFavorite:boolean=true;
  testModal:any;
  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  ngOnInit(): void {
    this.testModal = new window.bootstrap.Modal(
      document.getElementById('testModal') //UpdateQuestionModel
    );
  }

  ngAfterViewInit() {
    this.swiperReady();
  }

  goNext() {
    this.swiper?.slideNext();
   
  }

  goPrev() {
     this.swiper?.slidePrev();
    // this.activeInd = this.swiper?.activeIndex
  }
}
