// Ders1 : JavaScript genel yazım kuralları  <--- Bu bir yorum satırıdır

var merhaba = 1;
var Merhaba = 2;

//Bunların çıktıları farklıdır. merhaba ile Merhaba aynı değil!

var virgulle_de_olur = "tanım";
var virgulsuz_de = 12

/*
ASI (Automatic Semicolon Insertion) kuralı gereği virgülsüz tanım ve dönüş sağlanabilir.
Sadece minify, YUI compressor gibi kod sıkıştırıcılar kullanılırken dikkat edilmelidir
Ek olarak Bu alan da aslında büyük yorum dediğimiz alandır. İşleme motoru bu alanı da
 es geceçektir
*/

function parantezin_onemi() { //<-- İlk parantez
    if (merhaba == 1) {
        return "Ahmet Selamlar"
    } else {
        return 'Mehmet Selamlar'
    }
} //<-- İlk parantez

/*
İlk açılan parantez "{" veya "(" açıldığı sıranın tersine kapatılmalıdır ")" 
yani ilk açılan en son kapatılır "}"
*/

/*
YASAK Kelimeler!!!

break, case, catch, continue, default, delete, do, else, finally, for,
function, if, in, instanceof, new, return, switch, this, throw, try, typeof,
var, void, while, with

ve 
class, enum, export, extends, import, super,

"strict mode" açık ise

implements, interface, let, package, private, protected, public, static, yield

yukarıdakiler de kısıtlanır

*/