import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
/*
  Generated class for the CursoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CursoProvider {

  // public API = 'http://localhost:8080/cursos';  //test
  public API = 'https://prj-aluno-destaque.herokuapp.com/cursos' //prod

  constructor(public http: Http) {

  }

  getCursos(): Observable<any> {
    return this.http.get(this.API)
    .map((response:Response)=>response.json())

  }

  getCurso(idCurso): Observable<any> {
    return this.http.get(this.API + '/' + idCurso)
    .map((response:Response)=>response.json())

  }




}
