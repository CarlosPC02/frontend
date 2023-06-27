import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDetailsComponent } from './formulario-details.component';

describe('FormularioDetailsComponent', () => {
  let component: FormularioDetailsComponent;
  let fixture: ComponentFixture<FormularioDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioDetailsComponent]
    });
    fixture = TestBed.createComponent(FormularioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
