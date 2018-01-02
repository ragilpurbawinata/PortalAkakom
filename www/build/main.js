webpackJsonp([0],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BerandaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BerandaPage = (function () {
    function BerandaPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.gambar = [1, 2, 3, 4, 5, 6, 7, 8];
        this.tab = "profil";
    }
    BerandaPage.prototype.gambarFull = function (indeks) {
        switch (indeks) {
            case 1:
                this.info = "Bale Lantip";
                break;
            case 2:
                this.info = "Ruang Presentasi";
                break;
            case 3:
                this.info = "Perpustakaan";
                break;
            case 4:
                this.info = "Gerbang Akakom";
                break;
            case 5:
                this.info = "Halaman Depan Laboratorium";
                break;
            case 6:
                this.info = "Papan Nama Stmik Akakom";
                break;
            case 7:
                this.info = "Ruang Laboratorium";
                break;
            case 8:
                this.info = "Halaman Depan Stmik Akakom";
                break;
            default:
                this.info = "STMIK AKAKOM";
                break;
        }
        var toast = this.toastCtrl.create({
            message: this.info,
            duration: 3000,
            position: 'middle',
            showCloseButton: false,
        });
        toast.present();
    };
    BerandaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mars\PortalAkakom\src\pages\beranda\beranda.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Beranda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-segment [(ngModel)]="tab" color="primary">\n    <ion-segment-button value="profil">\n      Tentang Kampus\n    </ion-segment-button>\n    <ion-segment-button value="galeri">\n      Galeri Foto\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="tab">\n  <ion-list *ngSwitchCase="\'profil\'">\n    <ion-card>\n      <div class="logo"></div>\n      <div class="overlay"></div>\n      <div class="card-title">Mencetak Sarjana Plus</div>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header color="primary">\n        Visi dan Misi\n      </ion-card-header>\n      <ion-card-content>\n        <p>STMIK AKAKOM mempunyai visi untuk menjadi perguruan tinggi unggulan dalam bidang teknologi informasi yang bertumpu pada nilai-nilai dan etika kehidupan yang baik, benar dan universal untuk mewujudkan peningkatan taraf hidup bangsa.</p><br/>\n        <p>Adapun misi STMIK AKAKOM adalah melaksanakan Tridharma Perguruan Tinggi dalam bidang komputer dan teknologi informasi yang berorientasi kepada perkembangan ilmu pengetahuan, teknologi dan seni.</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header color="primary">\n        Program Studi\n      </ion-card-header>\n        <ion-item-group>\n          <ion-item-divider color="light">S1</ion-item-divider>\n          <ion-item>Teknik Informatika</ion-item>\n          <ion-item>Sistem Informasi</ion-item>\n        </ion-item-group>\n        <ion-item-group>\n          <ion-item-divider color="light">D3</ion-item-divider>\n          <ion-item>Manajemen Informatika</ion-item>\n          <ion-item>Teknik Komputer</ion-item>\n          <ion-item>Komputerisasi Akuntansi</ion-item>\n        </ion-item-group>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header color="primary">\n        Kontak\n      </ion-card-header>\n          <ion-list>\n            <a href="mailto:info@akakom.ac.id"><button ion-item>\n              <ion-icon name="mail" item-start></ion-icon>\n              Email : info@akakom.ac.id\n            </button></a>\n\n            <a href="tel:0274486664"><button ion-item>\n              <ion-icon name="call" item-start></ion-icon>\n              Telepon : (0274) 486664\n            </button></a>\n\n            <ion-item>\n              <ion-icon name="archive" item-start></ion-icon>\n              Fax : (0274) 486438\n            </ion-item>\n          </ion-list>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header color="primary">\n        Alamat\n      </ion-card-header>\n          <ion-card-content>Jl. Raya Janti Karang Jambe no. 143 Yogyakarta</ion-card-content>\n    </ion-card>\n\n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'galeri\'">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 col-md-4 col-xl-3 *ngFor="let g of gambar">\n          <div class="galeri" [style.background-image]="\'url(../assets/imgs/\' + g + \'.jpg)\'" (click)="gambarFull(g)"></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</div>\n</ion-content>'/*ion-inline-end:"C:\Users\Mars\PortalAkakom\src\pages\beranda\beranda.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], BerandaPage);
    return BerandaPage;
}());

//# sourceMappingURL=beranda.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeritaDanInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__berita_berita__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info_info__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeritaDanInfoPage = (function () {
    function BeritaDanInfoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tabBerita = __WEBPACK_IMPORTED_MODULE_2__berita_berita__["a" /* BeritaPage */];
        this.tabInfo = __WEBPACK_IMPORTED_MODULE_3__info_info__["a" /* InfoPage */];
    }
    BeritaDanInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-beritaDanInfo',template:/*ion-inline-start:"C:\Users\Mars\PortalAkakom\src\pages\beritaDanInfo\beritaDanInfo.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Berita dan Info Kampus</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-tabs>\n    <ion-tab [root]="tabBerita" tabTitle="Berita" tabIcon="paper" tabBadge="7" tabBadgeStyle="danger"></ion-tab>\n    <ion-tab [root]="tabInfo" tabTitle="Info" tabIcon="information-circle" tabBadge="4" tabBadgeStyle="danger"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mars\PortalAkakom\src\pages\beritaDanInfo\beritaDanInfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], BeritaDanInfoPage);
    return BeritaDanInfoPage;
}());

//# sourceMappingURL=beritaDanInfo.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeritaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__beritaDetail_beritaDetail__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BeritaPage = (function () {
    function BeritaPage(navCtrl, afDatabase, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loadingCtrl.create({
            content: 'Berita Sedang Dimuat...',
            //duration: 5000,
            dismissOnPageChange: true
        }).present();
        this.berita = afDatabase.list('/berita').valueChanges();
    }
    BeritaPage.prototype.beritaDetail = function (tgl, jdl, isi) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__beritaDetail_beritaDetail__["a" /* BeritaDetailPage */], { tglParam: tgl, jdlParam: jdl, isiParam: isi });
    };
    BeritaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-berita',template:/*ion-inline-start:"C:\Users\Mars\PortalAkakom\src\pages\berita\berita.html"*/'<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let b of berita | async" (click)="beritaDetail(b.tanggal, b.judul, b.isi)" text-wrap>\n      <p>{{b.tanggal}}</p>\n      <h2 class="judulBerita">{{b.judul}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mars\PortalAkakom\src\pages\berita\berita.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], BeritaPage);
    return BeritaPage;
}());

//# sourceMappingURL=berita.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeritaDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeritaDetailPage = (function () {
    function BeritaDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tanggal = navParams.get("tglParam");
        this.judul = navParams.get("jdlParam");
        this.isi = navParams.get("isiParam");
    }
    BeritaDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-beritaDetail',template:/*ion-inline-start:"C:\Users\Mars\PortalAkakom\src\pages\beritaDetail\beritaDetail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{judul}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-card>\n	  <ion-card-content text-justify>\n	    <p>{{tanggal}}</p><br/>\n	    <p>{{isi}}</p>\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mars\PortalAkakom\src\pages\beritaDetail\beritaDetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BeritaDetailPage);
    return BeritaDetailPage;
}());

//# sourceMappingURL=beritaDetail.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infoDetail_infoDetail__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InfoPage = (function () {
    function InfoPage(navCtrl, afDatabase, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loadingCtrl.create({
            content: 'Info Sedang Dimuat...',
            //duration: 5000,
            dismissOnPageChange: true
        }).present();
        this.info = afDatabase.list('/info').valueChanges();
    }
    InfoPage.prototype.infoDetail = function (tgl, jdl, isi) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__infoDetail_infoDetail__["a" /* InfoDetailPage */], { tglParam: tgl, jdlParam: jdl, isiParam: isi });
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Users\Mars\PortalAkakom\src\pages\info\info.html"*/'<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let i of info | async" (click)="infoDetail(i.tanggal, i.judul, i.isi)" text-wrap>\n      <p>{{i.tanggal}}</p>\n      <h2 class="judulInfo">{{i.judul}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Mars\PortalAkakom\src\pages\info\info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoDetailPage = (function () {
    function InfoDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tanggal = navParams.get("tglParam");
        this.judul = navParams.get("jdlParam");
        this.isi = navParams.get("isiParam");
    }
    InfoDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infoDetail',template:/*ion-inline-start:"C:\Users\Mars\PortalAkakom\src\pages\infoDetail\infoDetail.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{judul}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-card>\n	  <ion-card-content text-justify>\n	    <p>{{tanggal}}</p><br/>\n	    <p>{{isi}}</p>\n	  </ion-card-content>\n	</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mars\PortalAkakom\src\pages\infoDetail\infoDetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InfoDetailPage);
    return InfoDetailPage;
}());

//# sourceMappingURL=infoDetail.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TautanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TautanPage = (function () {
    function TautanPage(navCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
        this.tautan = [
            { namaTautan: "Yayasan Pendidikan Widya Bakti", link: "http://widyabaktiyk.or.id/" },
            { namaTautan: "Pendaftaran Mahasiswa", link: "http://pmb.akakom.ac.id/" },
            { namaTautan: "Blog Mahasiswa", link: "http://blog.akakom.ac.id/" },
            { namaTautan: "Portal Akademik", link: "http://siakad.akakom.ac.id/" },
            { namaTautan: "Laboratorium Akakom", link: "http://lab.akakom.ac.id/" },
            { namaTautan: "Career Center", link: "http://acc.akakom.ac.id/" },
            { namaTautan: "Ikatan Keluarga Alumni", link: "http://ika.akakom.ac.id/" },
            { namaTautan: "Olimpiade Komputer", link: "http://olimpiade.akakom.ac.id/" },
            { namaTautan: "SRITI Akakom", link: "http://sriti.akakom.ac.id/" },
            { namaTautan: "Pusat Jaminan Mutu", link: "http://pjm.akakom.ac.id/index1.html" },
            { namaTautan: "Perpustakaan Akakom", link: "http://perpus.akakom.ac.id/" },
            { namaTautan: "DIKTI", link: "http://dikti.go.id/" },
            { namaTautan: "Puslitbang AKAKOM", link: "http://puslitbang.akakom.ac.id/" },
            { namaTautan: "Jiko - Akakom", link: "http://ejournal.akakom.ac.id/index.php/jiko" },
            { namaTautan: "Akakom IT Fest 2016", link: "http://itfest.akakom.ac.id/" }
        ];
    }
    TautanPage.prototype.bukaLink = function (linkTautan) {
        // Opening a URL and returning an InAppBrowserObject
        this.inAppBrowser.create(linkTautan, '_self');
    };
    TautanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tautan',template:/*ion-inline-start:"C:\Users\Mars\PortalAkakom\src\pages\tautan\tautan.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tautan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-list>\n    <button ion-item *ngFor="let t of tautan" (click)="bukaLink(t.link)">\n      <div class="tautan">{{t.namaTautan}}</div>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Mars\PortalAkakom\src\pages\tautan\tautan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], TautanPage);
    return TautanPage;
}());

//# sourceMappingURL=tautan.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, afDatabase, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.afDatabase = afDatabase;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl.create({
            content: 'Feedback Sedang Dimuat...',
            //duration: 5000,
            dismissOnPageChange: true
        }).present();
        this.listFeedback = afDatabase.list('/feedback').valueChanges();
    }
    FeedbackPage.prototype.tulisFeedback = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        if (data.dari == "" || data.komen == "") {
                            var alert_1 = _this.alertCtrl.create({
                                title: 'Peringatan!',
                                subTitle: 'Mohon lengkapi semua isian form',
                                buttons: ['OK']
                            });
                            alert_1.present();
                        }
                        else {
                            var feedbackBaru = _this.afDatabase.list('feedback');
                            feedbackBaru.push({ dari: data.dari, komen: data.komen });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"C:\Users\Mars\PortalAkakom\src\pages\feedback\feedback.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Feedback</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let f of listFeedback | async" text-wrap>\n      <p>Dari : {{f.dari}}</p>\n      <h2 class="komentar">{{f.komen}}</h2>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="tulisFeedback()"><ion-icon name="create"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mars\PortalAkakom\src\pages\feedback\feedback.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_beranda_beranda__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_berita_berita__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_info_info__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tautan_tautan__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_beritaDanInfo_beritaDanInfo__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_beritaDetail_beritaDetail__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_infoDetail_infoDetail__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// Import the AF2 Module


// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyAXiFYX7_xudGDJrgSs6ROQK6miJNAH8_g",
    authDomain: "portalakakom.firebaseapp.com",
    databaseURL: "https://portalakakom.firebaseio.com",
    projectId: "portalakakom",
    storageBucket: "portalakakom.appspot.com",
    messagingSenderId: "527128437150"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_beranda_beranda__["a" /* BerandaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_beritaDanInfo_beritaDanInfo__["a" /* BeritaDanInfoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_berita_berita__["a" /* BeritaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tautan_tautan__["a" /* TautanPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_beritaDetail_beritaDetail__["a" /* BeritaDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_infoDetail_infoDetail__["a" /* InfoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__["a" /* FeedbackPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_beranda_beranda__["a" /* BerandaPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_beritaDanInfo_beritaDanInfo__["a" /* BeritaDanInfoPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_berita_berita__["a" /* BeritaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tautan_tautan__["a" /* TautanPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_beritaDetail_beritaDetail__["a" /* BeritaDetailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_infoDetail_infoDetail__["a" /* InfoDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__["a" /* FeedbackPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_beranda_beranda__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_beritaDanInfo_beritaDanInfo__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tautan_tautan__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feedback_feedback__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_beranda_beranda__["a" /* BerandaPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Beranda', component: __WEBPACK_IMPORTED_MODULE_4__pages_beranda_beranda__["a" /* BerandaPage */], icon: 'home' },
            { title: 'Berita dan Info Kampus', component: __WEBPACK_IMPORTED_MODULE_5__pages_beritaDanInfo_beritaDanInfo__["a" /* BeritaDanInfoPage */], icon: 'list' },
            { title: 'Tautan', component: __WEBPACK_IMPORTED_MODULE_6__pages_tautan_tautan__["a" /* TautanPage */], icon: 'link' },
            { title: 'Feedback', component: __WEBPACK_IMPORTED_MODULE_7__pages_feedback_feedback__["a" /* FeedbackPage */], icon: 'send' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mars\PortalAkakom\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list no-lines>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon" item-start color="primary"></ion-icon>{{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Mars\PortalAkakom\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map