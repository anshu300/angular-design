import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduHeaderComponent } from './edu-header.component';

describe('EduHeaderComponent', () => {
  let component: EduHeaderComponent;
  let fixture: ComponentFixture<EduHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
