import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompatibiliteComponent } from './edit-compatibilite.component';

describe('EditCompatibiliteComponent', () => {
  let component: EditCompatibiliteComponent;
  let fixture: ComponentFixture<EditCompatibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCompatibiliteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCompatibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
