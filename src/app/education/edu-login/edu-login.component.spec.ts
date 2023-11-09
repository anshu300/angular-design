import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduLoginComponent } from './edu-login.component';

describe('EduLoginComponent', () => {
  let component: EduLoginComponent;
  let fixture: ComponentFixture<EduLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
