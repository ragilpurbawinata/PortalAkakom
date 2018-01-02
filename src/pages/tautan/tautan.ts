import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-tautan',
  templateUrl: 'tautan.html'
})
export class TautanPage {

  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser) {
  	
  }

  tautan = [
    {namaTautan:"Yayasan Pendidikan Widya Bakti", link:"http://widyabaktiyk.or.id/"},
    {namaTautan:"Pendaftaran Mahasiswa", link:"http://pmb.akakom.ac.id/"},
    {namaTautan:"Blog Mahasiswa", link:"http://blog.akakom.ac.id/"},
    {namaTautan:"Portal Akademik", link:"http://siakad.akakom.ac.id/"},
    {namaTautan:"Laboratorium Akakom", link:"http://lab.akakom.ac.id/"},
    {namaTautan:"Career Center", link:"http://acc.akakom.ac.id/"},
    {namaTautan:"Ikatan Keluarga Alumni", link:"http://ika.akakom.ac.id/"},
    {namaTautan:"Olimpiade Komputer", link:"http://olimpiade.akakom.ac.id/"},
    {namaTautan:"SRITI Akakom", link:"http://sriti.akakom.ac.id/"},
    {namaTautan:"Pusat Jaminan Mutu", link:"http://pjm.akakom.ac.id/index1.html"},
    {namaTautan:"Perpustakaan Akakom", link:"http://perpus.akakom.ac.id/"},
    {namaTautan:"DIKTI", link:"http://dikti.go.id/"},
    {namaTautan:"Puslitbang AKAKOM", link:"http://puslitbang.akakom.ac.id/"},
    {namaTautan:"Jiko - Akakom", link:"http://ejournal.akakom.ac.id/index.php/jiko"},
    {namaTautan:"Akakom IT Fest 2016", link:"http://itfest.akakom.ac.id/"}
  ];

  bukaLink(linkTautan){
    // Opening a URL and returning an InAppBrowserObject
    this.inAppBrowser.create(linkTautan, '_self');
  }

}
