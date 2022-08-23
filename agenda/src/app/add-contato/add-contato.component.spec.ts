import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContatoComponent } from './add-contato.component';

describe('AddContatoComponent', () => {
  let component: AddContatoComponent;
  let fixture: ComponentFixture<AddContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
