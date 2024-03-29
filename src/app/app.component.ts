import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BerandaPage } from '../pages/beranda/beranda';
import { BeritaDanInfoPage } from '../pages/beritaDanInfo/beritaDanInfo';
import { TautanPage } from '../pages/tautan/tautan';
import { FeedbackPage } from '../pages/feedback/feedback';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = BerandaPage;

  pages: Array<{title: string, component: any,icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Beranda', component: BerandaPage, icon: 'home'},
      { title: 'Berita dan Info Kampus', component: BeritaDanInfoPage, icon: 'list'},
      { title: 'Tautan', component: TautanPage, icon: 'link'},
      { title: 'Feedback', component: FeedbackPage, icon: 'send'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
