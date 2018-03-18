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

  // public API = 'http://localhost:8080/alunos';  //test
  public API = 'https://prj-aluno-destaque.herokuapp.com/alunos' //prod


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

  update(aluno: any): Observable<any> {


    this.aluno = aluno;
    let result: Observable<Response>;

      result = this.http.post(this.API, this.aluno)



      result = this.http.put(this.API + '/' + this.aluno.id , this.aluno)





    return result.map((response: Response) => response.json())
    .catch(error => Observable.throw(error));
  }

  save(aluno:any){
    this.aluno = aluno;
    let result: Observable<Response>;

      result = this.http.post(this.API, this.aluno)


    return result.map((response: Response) => response.json())
    .catch(error => Observable.throw(error));
  }

  apagarAluno(id){

    return this.http.delete(this.API + '/' + id);

  }

  }




