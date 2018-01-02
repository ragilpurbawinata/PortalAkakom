import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoDetailPage } from '../infoDetail/infoDetail';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {
  info: Observable<any>;

  constructor(public navCtrl: NavController, afDatabase: AngularFireDatabase, public loadingCtrl: LoadingController) {
    this.loadingCtrl.create({
      content: 'Info Sedang Dimuat...',
      //duration: 5000,
      dismissOnPageChange: true
    }).present();
    this.info = afDatabase.list('/info').valueChanges();
  }

  infoDetail(tgl, jdl, isi){
    this.navCtrl.push(InfoDetailPage, {tglParam: tgl, jdlParam: jdl, isiParam: isi});
  }
}
