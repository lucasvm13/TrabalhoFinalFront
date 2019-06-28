import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrosPesquisaComponent } from './cadastros-pesquisa.component';

describe('CadastrosPesquisaComponent', () => {
  let component: CadastrosPesquisaComponent;
  let fixture: ComponentFixture<CadastrosPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrosPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
