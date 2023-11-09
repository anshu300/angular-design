import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduRegisterComponent } from './edu-register.component';

describe('EduRegisterComponent', () => {
  let component: EduRegisterComponent;
  let fixture: ComponentFixture<EduRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
