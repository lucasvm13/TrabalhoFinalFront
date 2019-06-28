import { Professor } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresService {

  professoresURL = 'http://localhost:8080/professores';
  professoresURLFiltro = this.professoresURL;

  constructor(
    private http: HttpClient
  ) { }

  pesquisar(filtro: any):Promise<any>{
    if(filtro.nome){
      this.professoresURLFiltro = this.professoresURL+'/filtro?nome='+filtro.nome;
    }else{
      this.professoresURLFiltro = this.professoresURL;
    }
    return this.http.get<any>(this.professoresURLFiltro).toPromise();
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