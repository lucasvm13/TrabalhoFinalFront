import { AlunosService } from './alunos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosPesquisaComponent } from './alunos-pesquisa/alunos-pesquisa.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { AlunosCadastroComponent } from './alunos-cadastro/alunos-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlunosPesquisaComponent, AlunosCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AlunosPesquisaComponent,
    AlunosCadastroComponent
  ],
  providers: [
    AlunosService
  ],

})
export class AlunosModule { }
