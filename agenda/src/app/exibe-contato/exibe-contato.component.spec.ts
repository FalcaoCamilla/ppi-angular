import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeContatoComponent } from './exibe-contato.component';

describe('ExibeContatoComponent', () => {
  let component: ExibeContatoComponent;
  let fixture: ComponentFixture<ExibeContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibeContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibeContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
