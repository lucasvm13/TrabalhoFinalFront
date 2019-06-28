import { Disciplina } from './model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  disciplinasURL = 'http://localhost:8080/disciplinas';
  disciplinasURLFiltro = this.disciplinasURL;


  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any):Promise<any>{
    if(filtro.nome){
      this.disciplinasURLFiltro = this.disciplinasURL+'/filtro?nome='+filtro.nome;
    }else{
      this.disciplinasURLFiltro = this.disciplinasURL;
    }
    return this.http.get<any>(this.disciplinasURLFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.disciplinasURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(disciplina: Disciplina): Promise<any>{
    return this.http.post(this.disciplinasURL, disciplina)
    .toPromise();
  }

  alterar(disciplina: Disciplina): Promise<any>{
    return this.http.put(this.disciplinasURL+'/'+disciplina.id, disciplina)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Disciplina> {
    return this.http.get<Disciplina>(this.disciplinasURL+'/'+codigo).toPromise();
  }

}