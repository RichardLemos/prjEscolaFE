import { CursoProvider } from './../../providers/curso/curso';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

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
  curso: any;
  idCurso

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cursoProvider: CursoProvider,
    public loadingCtrl:LoadingController) {
    this.idCurso = this.navParams.get('idCurso');


  }

  ionViewDidLoad() {
    this.getCurso();
  }
  getCurso(){
    let loading = this.loadingCtrl.create({
      content: 'Carregando as informações do curso.'
    });
        loading.present();
        this.cursoProvider.getCurso(this.idCurso).subscribe((curso) => {
          this.curso = curso;
          loading.dismiss();
        })

  }
}
