import { Cadastro } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disciplina } from './../disciplinas/model';


@Injectable({
  providedIn: 'root'
})
export class CadastrosService {

  cadastrosURL = 'http://localhost:8080/cadastros';
  cadastrosURLFiltro = this.cadastrosURL;


  disciplinasURL = 'http://localhost:8080/disciplinas';

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any):Promise<any>{
    if(filtro.nome){
      this.cadastrosURLFiltro = this.cadastrosURL+'/filtro?nome='+filtro.nome;
    }else{
      this.cadastrosURLFiltro = this.cadastrosURL;
    }
    return this.http.get<any>(this.cadastrosURLFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.cadastrosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(cadastro: Cadastro): Promise<any>{
    return this.http.post(this.cadastrosURL, cadastro)
    .toPromise();
  }

  alterar(cadastro: Cadastro): Promise<any>{
    return this.http.put(this.cadastrosURL+'/'+cadastro.id, cadastro)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Disciplina> {
    return this.http.get<Disciplina>(this.disciplinasURL+'/'+codigo).toPromise();
  }

  adicionarD(disciplina: Disciplina): Promise<any>{
    return this.http.post(this.disciplinasURL, disciplina)
    .toPromise();
  }
}