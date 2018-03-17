import { Aluno } from './../../model/aluno';
import { AlunoProvider } from './../../providers/aluno/aluno';
import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
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
  {id: 2, nome: "Medicina"},
  {id: 3, nome: "Nutrição"},
  {id: 4, nome: "Engenharia Civil"}

  ]



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              public toastCtrl:ToastController,
              public alunoProvider:AlunoProvider
            ) {
      }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save(form) {
    let alunoForm = form;
    console.log(this.curso.value);

    alunoForm.curso = this.curso.value
    alunoForm.id = this.curso.value



    console.log('see the aluno antes de save',alunoForm);

    this.alunoProvider.save(alunoForm).subscribe(result => {


    }, error => this.error = error);
    let toast = this.toastCtrl.create({
      message: 'Aluno em destaque "' + alunoForm.nome + " Salvo" + '.',
      duration: 2000
    });
    toast.present();
      this.dismiss();
  }

  ionViewDidLoad() {

    setTimeout(() => {
      this.nome.setFocus();
    },150);
  }


}




