import { AlunoModalPage } from './../aluno-modal/aluno-modal';
import { AlunoProvider } from './../../providers/aluno/aluno';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

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
              public alunoProvider:AlunoProvider,
              public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    this.alunoProvider.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
      console.log(alunos);


    })
  }
  openModal(beerId) {
    let modal = this.modalCtrl.create(AlunoModalPage, beerId);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewDidLoad())
  }
}




