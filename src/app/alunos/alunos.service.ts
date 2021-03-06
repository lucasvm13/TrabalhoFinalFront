import { Aluno } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  alunosURL = 'http://localhost:8080/alunos';
  URLFiltro;

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any):Promise<any>{
    if(filtro.nome){
      this.URLFiltro = 'http://localhost:8080/alunos/buscaAluno?nome=' +filtro.nome;
    }else{
      this.URLFiltro = 'http://localhost:8080/alunos';
    }
    return this.http.get<any>(this.URLFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.alunosURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(al: Aluno): Promise<any>{
    return this.http.post(this.alunosURL, al).toPromise();
  }

  alterar(aluno: Aluno): Promise<any>{
    return this.http.put(this.alunosURL+'/'+aluno.id, aluno)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Aluno> {
    return this.http.get<Aluno>(this.alunosURL+'/'+codigo).toPromise();
  }

}
