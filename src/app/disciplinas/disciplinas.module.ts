import { DisciplinasService } from './disciplinas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinasPesquisaComponent } from './disciplinas-pesquisa/disciplinas-pesquisa.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { DisciplinasCadastroComponent } from './disciplinas-cadastro/disciplinas-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DisciplinasPesquisaComponent, DisciplinasCadastroComponent],
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
    DisciplinasPesquisaComponent,
    DisciplinasCadastroComponent
  ],
  providers: [
    DisciplinasService
  ],

})
export class DisciplinasModule { }
