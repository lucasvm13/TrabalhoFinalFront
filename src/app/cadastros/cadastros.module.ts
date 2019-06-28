import { CadastrosService } from './cadastros.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrosPesquisaComponent } from './cadastros-pesquisa/cadastros-pesquisa.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { CadastrosCadastroComponent } from './cadastros-cadastro/cadastros-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CadastrosPesquisaComponent, CadastrosCadastroComponent],
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
    CadastrosPesquisaComponent,
    CadastrosCadastroComponent
  ],
  providers: [
    CadastrosService
  ],

})
export class CadastrosModule { }
