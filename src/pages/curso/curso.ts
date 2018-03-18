import { DetalhesCursoPage } from './../detalhes-curso/detalhes-curso';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursoProvider } from '../../providers/curso/curso';

/**
 * Generated class for the CursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-curso',
  templateUrl: 'curso.html',
})
export class CursoPage {
  cursos = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cursoProvider:CursoProvider) {

      this.cursoProvider.getCursos().subscribe( cursos=>{
        this.cursos = cursos
        console.log(cursos);

      })
    }


    ionViewDidLoad(){
    }
    openDetalhesCurso(idCurso){
      this.navCtrl.push(DetalhesCursoPage,{idCurso:idCurso})
    }

  }


