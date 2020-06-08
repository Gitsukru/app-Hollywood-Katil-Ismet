/**
 * app HOLLYWOOD "Kiralik Katil Ismet"
 * 
 *  Akis:
 *  - katil ismet musterilerini ve kurbanlarini kayit edecek
 *  - Kurbanlarini daha iyi ve hizli takip edebilmesi icin her kisini  birden fazla olan adreslerini de girebilmeli
 *  - 
 * 
 *  ANALIZ:
 * 
 *   html
 *      - sisteme gir                                                                       FORM | LOGIN
 *      - müsterilerinin listesini gör                                                      LISTE
 *      - bu listede bir buton ile form acilmali ve yeni musteri girbilmeli                 + FORM/Client+(button add-victim)
 *      - ayni anda kurban listesi de olusturabilmeli musteriyi ekledikten sonra            + FORM/Victim +(button add-addresse)
 *      - Musteri bilgileri : Data 
 *      - her musteriye tikladiginda kurban edileecek kisileri görür                        html1 (kurbanlar listesi)
 *      - sansli kurbana tikladiginda ise Adreslerini görür                                 html2 (sansli kurban ve bilgilerinin listesi)
 *      - isi bitirmisse veya kisi kazara ölmüs ise bir butona tikla ve solgun gözüksün     is bitti BOUTON
 *          
 *   css + (bootstrap)==> Form ==>data ya bak
 * 
 *   js 
 *    -Model
 *      - login.js (OPS)
 *      - client
 *      - Victims.js
 *      - storage.js
 *      - data 
 *          - musteriler:   ISIM SOYISIM   TELEFON                    class Client
 *          - Kurbanlar:    FOTOGRAF(URL) ISIM SOYISIM YAS CINSIYET   class Victims (extend super kullanilabilirmi ?)
 *              - Adresler: adres1  SOKAK NUMARA SEHIR ULKE,
 *                          adres2  SOKAK NUMARA SEHIR ULKE,
 *                          adres3  SOKAK NUMARA SEHIR ULKE,
 * 
 *      - localStorage                                  class Storage 
 *          - set(){}
 *          - get(){}
 *          - üstünücizen(){} ==>is bitince soluk hale gelecek fonksiyon
 * 
 *      -view
 *          - eventsCustomer.js
 *          - eventsVictim.js
 *          - victimTemplate.js
 */

import { eventsCustomer } from "./src/view/eventsCustomer";
import { eventsVictim } from "./src/view/eventsVictim";
import { Initialize } from "./src/model/initialize";

eventsCustomer();
eventsVictim();
let start = new Initialize();
start.init();