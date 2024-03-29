import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLoginComponent } from './stock-login.component';

describe('StockLoginComponent', () => {
  let component: StockLoginComponent;
  let fixture: ComponentFixture<StockLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
