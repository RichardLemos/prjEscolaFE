import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the AlunoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlunoProvider {

  public API = 'http://localhost:8080';


  constructor(public http: HttpClient) {

  }

  getAlunos(): Observable<any> {


    return this.http.get(this.API + '/alunos');


  }

}
