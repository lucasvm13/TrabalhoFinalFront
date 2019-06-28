import {Professor} from '../professores/model'
import {Aluno} from '../alunos/model';

export class Disciplina{
    id: number;
    nome: string;
    professor = new Professor();
    aluno = new Aluno();
  }
  