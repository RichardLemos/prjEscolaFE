import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
/*
  Generated class for the AlunoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlunoProvider {
  aluno
  existeAluno:boolean = false;

  public API = 'http://localhost:8080/alunos';  //test
  // public API = 'https://prj-aluno-destaque.herokuapp.com/alunos' //prod


  constructor(public http: Http) {

  }
  getAluno(id): Observable<any> {
    return this.http.get(this.API + '/' + id)
    .map((response:Response)=>response.json())

  }

  getAlunos(): Observable<any> {
    return this.http.get(this.API)
    .map((response:Response)=>response.json())

  }

  save(aluno: any,alunoAntigo): Observable<any> {


    this.aluno = aluno;
    let result: Observable<Response>;

    this.getAluno(alunoAntigo.id).subscribe((aluno)=>{
      console.log(aluno);

      if(aluno===null){
        console.log('passou');

        this.existeAluno = true;
      }

    })

    console.log(this.existeAluno);

    if(this.existeAluno){

      aluno.anoNascimento = 12121212

      result = this.http.post(this.API, this.aluno)


    }else{
      result = this.http.put(this.API + '/' + this.aluno.id , this.aluno)


    }


    return result.map((response: Response) => response.json())
    .catch(error => Observable.throw(error));
  }

  }


