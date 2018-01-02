import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  listFeedback: Observable<any>;
  feedback: AngularFireList<any>;

  constructor(public navCtrl: NavController, public afDatabase: AngularFireDatabase, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.loadingCtrl.create({
      content: 'Feedback Sedang Dimuat...',
      //duration: 5000,
      dismissOnPageChange: true
    }).present();
    this.listFeedback = afDatabase.list('/feedback').valueChanges();
  }

  tulisFeedback() {
    let prompt = this.alertCtrl.create({
      title: 'Feedback',
      message: "Silahkan tulis komentar & saran anda pada form dibawah",
      inputs: [
        {
          name: 'dari',
          placeholder: 'Nama Anda'
        },
        {
          name: 'komen',
          placeholder: 'Komentar & Saran'
        },
      ],
      buttons: [
        {
          text: 'Batal',
        },
        {
          text: 'Kirim',
          handler: data => {
            if(data.dari == "" || data.komen == ""){
              let alert = this.alertCtrl.create({
                title: 'Peringatan!',
                subTitle: 'Mohon lengkapi semua isian form',
                buttons: ['OK']
              });
              alert.present();
            } else{
              const feedbackBaru = this.afDatabase.list('feedback');
              feedbackBaru.push({ dari: data.dari, komen: data.komen });
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
