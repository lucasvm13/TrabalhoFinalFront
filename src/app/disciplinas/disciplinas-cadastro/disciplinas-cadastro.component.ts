import { MessageService } from 'primeng/api';
import { DisciplinasService } from './../disciplinas.service';
import { Disciplina } from './../model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas-cadastro',
  templateUrl: './disciplinas-cadastro.component.html',
  styleUrls: ['./disciplinas-cadastro.component.css']
})
export class DisciplinasCadastroComponent implements OnInit {

  disciplina = new Disciplina();

  constructor(
    private service: DisciplinasService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }


  inserir(form: FormControl) {
    this.service.adicionar(this.disciplina)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Disciplina '+this.disciplina.nome+' cadastrada'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoDisciplina = this.rota.snapshot.params['id'];
    if(codigoDisciplina){
      this.carregarDisciplina(codigoDisciplina);
    }
  }

  carregarDisciplina(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.disciplina = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.disciplina)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Disciplina '+this.disciplina.nome+' alterada'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.disciplina.id);
  }
}
