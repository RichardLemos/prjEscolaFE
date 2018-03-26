import { ContactPage } from './../contact/contact';
import { HomePage } from './../home/home';
import { AlunoPage } from './../aluno/aluno';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AlunoPage;
  tab2Root = ContactPage;

  constructor() {

  }
}
