import { AlunoModalPage } from './../aluno-modal/aluno-modal';
import { AlunoProvider } from './../../providers/aluno/aluno';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, ToastController } from 'ionic-angular';

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
              public loadingCtrl:LoadingController,
              public toastCtrl:ToastController) {
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

    if(alunos.length===0){
      this.presentToast();
    }

    console.log(this.alunos);

    })



  }
  openModal(aluno) {
    let modal = this.modalCtrl.create(AlunoModalPage, aluno);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewDidLoad())
  }

  apagarAluno(aluno){
    this.alunoProvider.apagarAluno(aluno).subscribe(()=>{
      this.ionViewDidLoad()

    })

  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Ainda não possui alunos',
      duration: 4000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    setTimeout(()=>{
      toast.present();
    },3000)

  }





}




