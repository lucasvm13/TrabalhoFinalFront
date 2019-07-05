import { MessageService } from 'primeng/api';
import { CadastrosService } from './../cadastros.service';
import { Cadastro, Disciplina} from './../model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastros-cadastro',
  templateUrl: './cadastros-cadastro.component.html',
  styleUrls: ['./cadastros-cadastro.component.css']
})
export class CadastrosCadastroComponent implements OnInit {

  cadastro = new Cadastro();
  disciplina = new Disciplina();

  constructor(
    private service: CadastrosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

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

  inserir(form: FormControl) {
    this.service.adicionarD(this.disciplina)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Disciplina '+this.disciplina.nome+' cadastrado'});
      form.reset();
    });
  }
}
