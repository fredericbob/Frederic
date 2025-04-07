import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompatibiliteComponent } from './add-compatibilite.component';

describe('AddCompatibiliteComponent', () => {
  let component: AddCompatibiliteComponent;
  let fixture: ComponentFixture<AddCompatibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCompatibiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCompatibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
