import { AlunoModalPage } from './../pages/aluno-modal/aluno-modal';
import { HttpModule } from '@angular/http';

import { AlunoPage } from './../pages/aluno/aluno';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlunoProvider } from '../providers/aluno/aluno';
import { CursoProvider } from '../providers/curso/curso';
import { CursoPage } from '../pages/curso/curso';

@NgModule({
  declarations: [
    AlunoPage,
    AlunoModalPage,
    MyApp,
    CursoPage,

    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CursoPage,
    AlunoPage,
    AlunoModalPage,
    MyApp,

    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlunoProvider,
    CursoProvider
  ]
})
export class AppModule {}
