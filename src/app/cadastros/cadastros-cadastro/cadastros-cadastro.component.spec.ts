import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrosCadastroComponent } from './cadastros-cadastro.component';

describe('CadastrosCadastroComponent', () => {
  let component: CadastrosCadastroComponent;
  let fixture: ComponentFixture<CadastrosCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrosCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
