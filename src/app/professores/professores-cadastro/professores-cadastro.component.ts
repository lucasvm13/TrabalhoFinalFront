import { MessageService } from 'primeng/api';
import { ProfessoresService } from './../professores.service';
import { Professor } from './../model';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-professores-cadastro',
  templateUrl: './professores-cadastro.component.html',
  styleUrls: ['./professores-cadastro.component.css']
})
export class ProfessoresCadastroComponent implements OnInit {

  professor = new Professor();

  constructor(
    private service: ProfessoresService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }


  inserir(form: FormControl) {
    this.service.adicionar(this.professor)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Professor '+this.professor.nome+' cadastrado'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoProfessor = this.rota.snapshot.params['id'];
    if(codigoProfessor){
      this.carregarProfessor(codigoProfessor);
    }
  }

  carregarProfessor(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.professor = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.professor)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Professor '+this.professor.nome+' alterado'});
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
    return Boolean(this.professor.id);
  }



}
