import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeritaDetailPage } from '../beritaDetail/beritaDetail';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-berita',
  templateUrl: 'berita.html'
})
export class BeritaPage {
  berita: Observable<any>;

  constructor(public navCtrl: NavController, afDatabase: AngularFireDatabase, public loadingCtrl: LoadingController) {
    this.loadingCtrl.create({
      content: 'Berita Sedang Dimuat...',
      //duration: 5000,
      dismissOnPageChange: true
    }).present();
    this.berita = afDatabase.list('/berita').valueChanges();
  }

  beritaDetail(tgl, jdl, isi){
    this.navCtrl.push(BeritaDetailPage, {tglParam: tgl, jdlParam: jdl, isiParam: isi});
  }
}
