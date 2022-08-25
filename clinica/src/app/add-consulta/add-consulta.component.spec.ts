import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultaComponent } from './add-consulta.component';

describe('AddConsultaComponent', () => {
  let component: AddConsultaComponent;
  let fixture: ComponentFixture<AddConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
