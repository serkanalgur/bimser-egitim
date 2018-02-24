/* Ders 7 : JavaScript ifadeleri */

if (degisken) {
    "degiskene göre düzenlenecek kod"
}

if (degisken == "istenen değer") {
    "degisken istenen değerse dönülecek fonksiyon"
} else {
    "degisken istenen değerde değilse dönülecek fonksiyon"
}

//Ders 7 : break ile kullanımı

var isim = "mehmet";

if (isim == "mehmet") {
    console.log("Hoşgeldin Mehmet")
    break; //isim mehmet ise döngüyü bitir.
}

//Ders 7 : continue kullanımı

var toplam = 0;

for (i = 1; i <= 5; i++) {
    if (i == 3)
        continue; //Sayı 3 ise atla ve bir sonrakine geç dedik
    toplam += i;
}
console.log("1 ile 5 arası (3 hariç) rakamlar toplamı: " + toplam)
    //Çıktı "1 ile 5 arası (3 hariç) rakamlar toplamı: 12" olacaktır


//Ders 7 : for in kullanımı

// Objemizi oluşturalım
var a = { "a": "İstanbul", "b": "İzmir", "c": "Ankara" }

// Listelem için gerekli alanı yazalım
var s = ""
for (var key in a) {
    s += key + ": " + a[key];
    s += "<br />";
}
document.write(s);

// Çıktı:
// a: İstanbul
// b: izmir
// c: Ankara



/* Ders 7 : While Döngüsü */

var i = 0;
var text = "";
while (i < 10) {
    text += "<br>Sayı :" + i;
    i++;
}
document.write(text);
// Çıktı
/*
Sayı : 0
Sayı : 1
...
Sayı : 9
 */

/* Ders 7 : Switch ve label kullanımı*/

switch (anahtar) {
    case deger:
        //Yapılacak işlem
        break;
    case deger2:
        //Yapılacak işlem
        break;
    default:
        //Varsayılan olarak yapılacak işlem
        break;
}


//Label Yapısı
baslik: {
    console.log("başlık başlar")
    icbaslik: {
        for (var i = 1;;) {
            while (i <= 5) {
                console.log("i:" + i)
                if (i === 3) {
                    console.log("işlem durduruldu")
                    break icbaslik;
                }
                i++;
            }
        }
    }
    console.log("başlık biter")
}