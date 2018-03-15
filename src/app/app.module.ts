import { AlunoModalPage } from './../pages/aluno-modal/aluno-modal';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlunoPage } from './../pages/aluno/aluno';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlunoProvider } from '../providers/aluno/aluno';

@NgModule({
  declarations: [
    AlunoPage,
    AlunoModalPage,
    MyApp,
    AboutPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AlunoPage,
    AlunoModalPage,
    MyApp,
    AboutPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlunoProvider
  ]
})
export class AppModule {}
