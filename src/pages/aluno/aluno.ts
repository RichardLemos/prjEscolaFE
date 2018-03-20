import { DetalhesAlunoPage } from './../detalhes-aluno/detalhes-aluno';
import { AlunoModalPage } from './../aluno-modal/aluno-modal';
import { AlunoProvider } from './../../providers/aluno/aluno';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, ToastController, AlertController } from 'ionic-angular';

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
    erro = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alunoProvider:AlunoProvider,
              public modalCtrl:ModalController,
              public loadingCtrl:LoadingController,
              public toastCtrl:ToastController,
              public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {

    this.getAlunos();

  }
  openModal(aluno) {
    let modal = this.modalCtrl.create(AlunoModalPage, aluno);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewDidLoad())
  }

  apagarAluno(aluno){
    let confirm = this.alertCtrl.create({
      title: 'Tem certeza que você quer apagar o aluno ?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.alunoProvider.apagarAluno(aluno).subscribe(()=>{
              this.ionViewDidLoad()

            })
          }
        },
        {
          text: 'Não',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
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

  openDetalhesAluno(idAluno){
    this.navCtrl.push(DetalhesAlunoPage,{idAluno:idAluno})
  }

  doRefresh(refresher) {
    this.getAlunos();
    refresher.complete();
  }

  getAlunos(){
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



    })



  }





}




