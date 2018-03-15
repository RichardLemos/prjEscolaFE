import { AlunoProvider } from './../../providers/aluno/aluno';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-aluno',
  templateUrl: 'aluno.html',
})
export class AlunoPage {

    alunos = []

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alunoProvider:AlunoProvider) {
  }

  ionViewDidLoad() {
    this.alunoProvider.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
      console.log(alunos);


    })
  }
}



