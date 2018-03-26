import { Aluno } from './../../model/aluno';
import { AlunoProvider } from './../../providers/aluno/aluno';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


/**
 * Generated class for the AlunoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-aluno-modal',
  templateUrl: 'aluno-modal.html',
})
export class AlunoModalPage {

  @ViewChild('nome') nome;
  @ViewChild('curso') curso;
  aluno:any = {};
  error: any;
   
  cursos = [

  {id: 1, nome: "Sistemas de informação"},
  {id: 2, nome: "Análise e Desenvolvimento de Sistemas"},
  {id: 3, nome: "Design Gráfico"},
  {id: 4, nome: "Redes de Computadores"}

  ]



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              public toastCtrl:ToastController,
              public alunoProvider:AlunoProvider,
              public alertCtrl:AlertController,
              public loadingCtrl:LoadingController
            ) {
      }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save(form) {
    if(form.cr>10 || form.cr<0){
      this.presentAlert();
      return;
    }
    let alunoForm = form;
    console.log(this.curso.value);

    alunoForm.curso = this.curso.value
    alunoForm.id = this.curso.value

    this.alunoProvider.save(alunoForm).subscribe(result => {

    }, error => this.error = error);


    let loading = this.loadingCtrl.create({
      content: 'Inserindo aluno...'
    });

    loading.present();
    setTimeout(() => {
      loading.dismissAll();
      this.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Aluno em destaque "' + alunoForm.nome + " Salvo" + '.',
        position:'bottom',
        duration: 2000
      });
      toast.present();

    },3000);




  }

  ionViewDidLoad() {

    setTimeout(() => {
      this.nome.setFocus();
    },150);
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nota inválida',
      subTitle: 'A nota deve ser maior que 0 e menor 10 ',
      buttons: ['Ok']
    });
    alert.present();
  }


}




