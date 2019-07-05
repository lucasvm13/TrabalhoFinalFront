import { Professor } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  professoresURL = 'http://localhost:8080/professores';
  URLFiltro;

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any):Promise<any>{
    if(filtro.nome){
      this.URLFiltro = 'http://localhost:8080/professores/buscaProfessor?nome=' +filtro.nome;
    }else{
      this.URLFiltro = 'http://localhost:8080/professores';
    }
    return this.http.get<any>(this.URLFiltro).toPromise();
  }


  excluir(id:number):Promise<void>{
    return this.http.delete(this.professoresURL+'/'+id)
    .toPromise()
    .then(() => null);
  }

  adicionar(prof: Professor): Promise<any>{
    return this.http.post(this.professoresURL, prof).toPromise();
  }

  alterar(professor: Professor): Promise<any>{
    return this.http.put(this.professoresURL+'/'+professor.id, professor)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Professor> {
    return this.http.get<Professor>(this.professoresURL+'/'+codigo).toPromise();
  }

}