import { AlunoModalPage } from './../aluno-modal/aluno-modal';
import { AlunoProvider } from './../../providers/aluno/aluno';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';

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
    carregando = true;
    erro = false


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alunoProvider:AlunoProvider,
              public modalCtrl:ModalController,
              public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {

    let loading = this.loadingCtrl.create({
      content: 'Carregando os alunos em destaque...'
    });
    loading.present();
    this.alunoProvider.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
      this.carregando = false;
      loading.dismiss();

    })


  }
  openModal(aluno) {
    let modal = this.modalCtrl.create(AlunoModalPage, aluno);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewDidLoad())
  }





}




