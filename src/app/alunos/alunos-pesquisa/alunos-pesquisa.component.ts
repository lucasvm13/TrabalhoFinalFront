import { MessageService, ConfirmationService } from 'primeng/api';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-pesquisa',
  templateUrl: './alunos-pesquisa.component.html',
  styleUrls: ['./alunos-pesquisa.component.css']
})
export class AlunosPesquisaComponent implements OnInit {

  alunos = [];
  filtro: string;

  constructor(
    private service:AlunosService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.alunos=dados;
    });
  }

  confirmarExclusao(aluno:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+aluno.nome+'?',
      accept: () => {
        this.excluir(aluno);
      }
    });
  }

  excluir(aluno: any){
    this.service.excluir(aluno.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'Aluno '+aluno.nome+' excluído com sucesso'});
    });
  }





}
