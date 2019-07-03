
import { MessageService, ConfirmationService } from 'primeng/api';
import { DisciplinasService } from './../disciplinas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disciplinas-pesquisa',
  templateUrl: './disciplinas-pesquisa.component.html',
  styleUrls: ['./disciplinas-pesquisa.component.css']
})
export class DisciplinasPesquisaComponent implements OnInit {

  disciplinas = [];
  alunos = [];
  filtro: string;

  constructor(
    private service:DisciplinasService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.disciplinas=dados;
    });
  }

  confirmarExclusao(disciplina:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+disciplina.nome+'?',
      accept: () => {
        this.excluir(disciplina);
      }
    });
  }

  excluir(disciplina: any){
    this.service.excluir(disciplina.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'Disciplina '+disciplina.nome+' excluído com sucesso'});
    });
  }





}