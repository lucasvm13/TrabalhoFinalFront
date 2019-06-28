import {Professor} from '../professores/model'
import {Aluno} from '../alunos/model';
import {Disciplina} from '../disciplinas/model';

export class Cadastro{
    id: number;
    professor = new Professor();
    aluno = new Aluno();
    disciplina = new Disciplina();
  }
  