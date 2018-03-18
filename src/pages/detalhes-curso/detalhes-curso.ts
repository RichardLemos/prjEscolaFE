import { CursoProvider } from './../../providers/curso/curso';
import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesCursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detalhes-curso',
  templateUrl: 'detalhes-curso.html',
})
export class DetalhesCursoPage {
  curso:any;

  constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public cursoProvider:CursoProvider) {
                  let idCurso = this.navParams.get('idCurso');
                  console.log('see',idCurso)
                  this.cursoProvider.getCurso(idCurso).subscribe((curso)=>{
                    this.curso = curso;
                  })
                  
                }
                
                ionViewDidEnter() {
                  console.log(this.curso)
  }




}
