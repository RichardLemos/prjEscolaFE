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

  public API = 'http://localhost:8080/alunos';


  constructor(public http: Http) {

  }

  getAlunos(): Observable<any> {
    return this.http.get(this.API)
    .map((response:Response)=>response.json())

  }

  save(aluno: any): Observable<any> {
    let result: Observable<Response>;

    result = this.http.post(this.API, aluno)

    return result.map((response: Response) => response.json())
    .catch(error => Observable.throw(error));
  }
  }


