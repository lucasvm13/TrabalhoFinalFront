import { ProfessoresService } from './professores.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessoresPesquisaComponent } from './professores-pesquisa/professores-pesquisa.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ProfessoresCadastroComponent } from './professores-cadastro/professores-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProfessoresPesquisaComponent, ProfessoresCadastroComponent],
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
    ProfessoresPesquisaComponent,
    ProfessoresCadastroComponent
  ],
  providers: [
    ProfessoresService
  ],

})
export class ProfessoresModule { }