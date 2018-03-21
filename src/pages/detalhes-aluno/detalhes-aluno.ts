import { AlunoProvider } from './../../providers/aluno/aluno';
import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhesAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detalhes-aluno',
  templateUrl: 'detalhes-aluno.html',
})
export class DetalhesAlunoPage {
  aluno;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alunoProvider:AlunoProvider) {
      let idAluno = this.navParams.get('idAluno')
      this.alunoProvider.getAluno(idAluno).subscribe((aluno)=>{
        this.aluno = aluno

      })
  }

  ionViewDidLoad() {




  }

}
