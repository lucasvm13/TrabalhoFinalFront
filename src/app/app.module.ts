import { AlunosCadastroComponent } from './alunos/alunos-cadastro/alunos-cadastro.component';
import { AlunosPesquisaComponent } from './alunos/alunos-pesquisa/alunos-pesquisa.component';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresCadastroComponent } from './professores/professores-cadastro/professores-cadastro.component';
import { ProfessoresPesquisaComponent } from './professores/professores-pesquisa/professores-pesquisa.component';
import { ProfessoresModule } from './professores/professores.module';
import { DisciplinasCadastroComponent } from './disciplinas/disciplinas-cadastro/disciplinas-cadastro.component';
import { DisciplinasPesquisaComponent } from './disciplinas/disciplinas-pesquisa/disciplinas-pesquisa.component';
import { DisciplinasModule } from './disciplinas/disciplinas.module';


import { CadastrosCadastroComponent } from './cadastros/cadastros-cadastro/cadastros-cadastro.component';
import { CadastrosPesquisaComponent } from './cadastros/cadastros-pesquisa/cadastros-pesquisa.component';
import { CadastrosModule } from './cadastros/cadastros.module';


import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from './app.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import {Routes, RouterModule} from '@angular/router';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

import { DisciplinasService } from './disciplinas/disciplinas.service';



const rotas: Routes = [
  {path: '', redirectTo:'cadastros', pathMatch:'full'},
  {path: 'alunos', component: AlunosPesquisaComponent},
  {path: 'alunos/novo', component: AlunosCadastroComponent},
  {path: 'alunos/:id', component: AlunosCadastroComponent},
  {path: 'professores', component: ProfessoresPesquisaComponent},
  {path: 'professores/novo', component: ProfessoresCadastroComponent},
  {path: 'professores/:id', component: ProfessoresCadastroComponent},
  {path: 'disciplinas', component: DisciplinasPesquisaComponent},
  {path: 'disciplinas/novo', component: DisciplinasCadastroComponent},
  {path: 'disciplinas/:id', component: DisciplinasCadastroComponent},

  
  
  {path: 'cadastros', component: CadastrosPesquisaComponent},
  {path: 'cadastros/novo', component: CadastrosCadastroComponent},
  {path: 'cadastros/:id', component: CadastrosCadastroComponent}, 
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    AlunosModule,
    ProfessoresModule,
    DisciplinasModule,
    HttpClientModule,
    CadastrosModule,
    ToastModule,
    SidebarModule,   
    RouterModule.forRoot(rotas)
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DisciplinasService
  ]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }
