import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHeaderComponent } from './stock-header.component';

describe('StockHeaderComponent', () => {
  let component: StockHeaderComponent;
  let fixture: ComponentFixture<StockHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
