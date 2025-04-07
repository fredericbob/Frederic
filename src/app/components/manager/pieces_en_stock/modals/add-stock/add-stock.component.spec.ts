import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddStockModal } from './add-stock.component';

describe('AddStockModal', () => {
  let component: AddStockModal;
  let fixture: ComponentFixture<AddStockModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStockModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStockModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
