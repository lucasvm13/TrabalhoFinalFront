
export class Professor {
  id: number;
  nome: string;
}
export class Aluno{
  id: number;
  nome: string;
  n1: number;
  n2:number;
  n3: number;
  status: string;
}

export class Disciplina{
    id: number;
    nome: string;
    professor = new Professor();
    alunos: Aluno[] = [];
  }


