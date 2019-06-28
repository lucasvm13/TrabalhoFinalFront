
import { MessageService, ConfirmationService } from 'primeng/api';
import { ProfessoresService } from './../professores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores-pesquisa',
  templateUrl: './professores-pesquisa.component.html',
  styleUrls: ['./professores-pesquisa.component.css']
})
export class ProfessoresPesquisaComponent implements OnInit {

  professores = [];
  filtro: string;

  constructor(
    private service:ProfessoresService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.professores=dados;
    });
  }

  confirmarExclusao(professor:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+professor.nome+'?',
      accept: () => {
        this.excluir(professor);
      }
    });
  }

  excluir(professor: any){
    this.service.excluir(professor.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'Professor '+professor.nome+' excluído com sucesso'});
    });
  }





}