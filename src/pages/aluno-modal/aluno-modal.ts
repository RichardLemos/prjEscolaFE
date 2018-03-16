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
  aluno;
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

      this.aluno = this.navParams.get('aluno')
      console.log('see',this.aluno);

      }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save(form) {
    let alunoForm:Aluno = form;

    alunoForm.curso = this.curso.value



    alunoForm.anoNascimento = this.convertDateToTimestamp(alunoForm.anoNascimento)

    console.log('see the aluno antes de save',alunoForm);

    this.alunoProvider.save(alunoForm,form).subscribe(result => {


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

  public convertDateToTimestamp(data){

 let obj = new Date(data).getTime();
  return obj;

  }
}




