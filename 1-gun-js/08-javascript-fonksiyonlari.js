/* Ders8 : JavaScript Fonksiyonları*/

function ilkFonksiyonum() {
    return "İlk Fonkisyonumu Yazdım!"
}

function ilkVeriliFonksiyonum(veri1, veri2) {
    return veri1 + " " + veri2;
}

/* Argümanlar */

enBuyukSayiyiBul(120, 250, 375, 46, 978, 1250)

function enBuyukSayiyiBul() {
    var i;
    var maks = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > maks) {
            max = arguments[i];
        }
    }
    console.log(max);
}

// Çıktı : 1250 olacaktır

/* Closure Kavramı */

var ekle = (function() {
    var sayac = 0;
    return function() { return sayac += 1; }
})();

ekle();
ekle();
ekle();

//Sayaç şu an 3 oldu


/* İsimsiz fonksiyonlar */

var isimsiz = function() {
    alert('I am anonymous');
}
isimsiz();

/* ya da */

setTimeout(function() {
    alert('hello');
}, 1000);