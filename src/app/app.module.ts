import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { BerandaPage } from '../pages/beranda/beranda';
import { BeritaPage } from '../pages/berita/berita';
import { InfoPage } from '../pages/info/info';
import { TautanPage } from '../pages/tautan/tautan';
import { BeritaDanInfoPage } from '../pages/beritaDanInfo/beritaDanInfo';
import { BeritaDetailPage } from '../pages/beritaDetail/beritaDetail';
import { InfoDetailPage } from '../pages/infoDetail/infoDetail';
import { FeedbackPage } from '../pages/feedback/feedback';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAXiFYX7_xudGDJrgSs6ROQK6miJNAH8_g",
  authDomain: "portalakakom.firebaseapp.com",
  databaseURL: "https://portalakakom.firebaseio.com",
  projectId: "portalakakom",
  storageBucket: "portalakakom.appspot.com",
  messagingSenderId: "527128437150"
};

@NgModule({
  declarations: [
    MyApp,
    BerandaPage,
    BeritaDanInfoPage,
    BeritaPage,
    InfoPage,
    TautanPage,
    BeritaDetailPage,
    InfoDetailPage,
    FeedbackPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BerandaPage,
    BeritaDanInfoPage,
    BeritaPage,
    InfoPage,
    TautanPage,
    BeritaDetailPage,
    InfoDetailPage,
    FeedbackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
