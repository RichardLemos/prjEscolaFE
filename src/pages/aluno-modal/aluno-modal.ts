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

  @ViewChild('name') name;
  @ViewChild('curso') curso;
  aluno: any = {};
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
    console.log('see',this.curso);


    let alunoForm:Aluno = form;
    console.log(this.curso.value)
    alunoForm.curso = this.curso.value
    alunoForm.id = this.curso.value
    console.log('data antes',alunoForm);

    alunoForm.anoNascimento = this.convertDateToTimestamp(alunoForm.anoNascimento)

    console.log('depois ', alunoForm);

    let update: boolean = alunoForm['href'];
    this.alunoProvider.save(alunoForm).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Aluno "' + alunoForm.nome + '" ' + ((update) ? 'updated' : 'added') + '.',
        duration: 2000
      });
      toast.present();
      this.dismiss();
    }, error => this.error = error)
  }

  ionViewDidLoad() {
    console.log(this.cursos);

    // setTimeout(() => {
    //   this.name.setFocus();
    // },150);
  }

  public convertDateToTimestamp(data){

 let obj = new Date(data).getTime();
  return obj;

  }
}




