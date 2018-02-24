/* Ders 10 : Object-Oriented JavaScript */

/* Nesneler */

var nesne = {
    isim: 'Serkan',
    soyisim: 'Algur',
    yas: 30,
    gozRengi: 'Kahverengi',
    gorunenIsim: function() { return this.isim + " " + this.soyisim; }
}

/* çağrılma */
console.log(nesne.isim) // Serkan
console.log(nesne.gorunenIsim()) // Serkan Algur


/* Scope ve Scope Chain */

var globalNesnem = "Burada";
//Glbal nesne, fonksiyon içinde ve dışında kullanılabilir

function veriKullanimi() {
    var yerelNesnem = "Fonksiyon için"
        //Yerel nesne, sadece fonksiyon içerisinde kullanılabilir
}

/* Scope Chain */

function Banka() {
    loan = 300;
    Ahmet();

    function Ahmet() {
        mathew = 300;
        Mehmet();

        function Mehmet() {
            eldekipara: 400;
            alert('Para Lazım!');
        }

    }

}

Banka();

/*OOP Class ve this */
function Kisi(isim) {
    this.isim = isim,
        this.selamla = function() {
            alert("Selam, benim adım" + this.name + ".")
        }
}


/* Prototype */
function Kisi(isim, soyisim, yas, gozrengi) {
    this.isim = isim,
        this.soyisim = soyisim,
        this.yas = yas,
        this.gozrengi = gozrengi

}

Kisi.prototype.ulke = "Türkiye"
Kisi.prototype.selamla = function() {
    return "Selam benim adım " + this.isim + " " + this.soyisim + ".";
}