import { DetalhesCursoPage } from './../detalhes-curso/detalhes-curso';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
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
    public cursoProvider: CursoProvider,
    public loadingCtrl: LoadingController) {

  }


  ionViewDidLoad() {
    this.getCursos();
  }
  openDetalhesCurso(idCurso) {
    this.navCtrl.push(DetalhesCursoPage, { idCurso: idCurso })
  }

  getCursos() {
    let loading = this.loadingCtrl.create({
      content: 'Carregando os Cursos...'
    });
    loading.present();
    this.cursoProvider.getCursos().subscribe(cursos => {
      this.cursos = cursos;
      console.log(cursos);
      loading.dismiss();
    })

  }

  doRefresh(refresher) {
    this.getCursos();
    refresher.complete();

  }

}




