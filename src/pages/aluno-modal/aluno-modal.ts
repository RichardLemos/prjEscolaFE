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
  aluno: any = {};
  error: any;

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

  save(form: NgForm) {
    let update: boolean = form['href'];
    this.alunoProvider.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Aluno "' + form.name + '" ' + ((update) ? 'updated' : 'added') + '.',
        duration: 2000
      });
      toast.present();
      this.dismiss();
    }, error => this.error = error)
  }

  ionViewDidLoad() {
    console.log(this.convertTimestampToDate('2012.08.10'))
    setTimeout(() => {
      this.name.setFocus();
    },150);
  }

  public convertTimestampToDate(data){
 let obj = new Date(data).getTime() / 1000;
    return obj;

  }
}




