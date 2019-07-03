import { MessageService, ConfirmationService } from 'primeng/api';
import { CadastrosService } from './../cadastros.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cadastros-pesquisa',
  templateUrl: './cadastros-pesquisa.component.html',
  styleUrls: ['./cadastros-pesquisa.component.css']
})
export class CadastrosPesquisaComponent implements OnInit {

  cadastros = [];
  filtro: string;

  constructor(
    private service:CadastrosService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.cadastros=dados;
    });
  }

  confirmarExclusao(cadastro:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+cadastro.nome+'?',
      accept: () => {
        this.excluir(cadastro);
      }
    });
  }

  excluir(cadastro: any){
    this.service.excluir(cadastro.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'cadastro '+cadastro.nome+' excluído com sucesso'});
    });
  }
}