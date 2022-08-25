import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeConsultaComponent } from './exibe-consulta.component';

describe('ExibeConsultaComponent', () => {
  let component: ExibeConsultaComponent;
  let fixture: ComponentFixture<ExibeConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibeConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
