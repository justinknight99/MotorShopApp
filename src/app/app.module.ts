import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MasukPage } from '../pages/masuk/masuk';
import { HistoryPage } from '../pages/history/history';
import { BelanjaPage } from '../pages/belanja/belanja';
<<<<<<< HEAD
import { DaftarPage } from '../pages/daftar/daftar';
=======
>>>>>>> 507ece62d2c23d3fce2177e18305f2df42d99f10

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MasukPage,
    ContactPage,
    HistoryPage,
<<<<<<< HEAD
    BelanjaPage,
    DaftarPage
=======
    BelanjaPage
>>>>>>> 507ece62d2c23d3fce2177e18305f2df42d99f10
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MasukPage,
    ContactPage,
    HistoryPage,
<<<<<<< HEAD
    BelanjaPage,
    DaftarPage
=======
    BelanjaPage
>>>>>>> 507ece62d2c23d3fce2177e18305f2df42d99f10
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}