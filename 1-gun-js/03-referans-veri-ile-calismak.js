/* Ders 3: Referans veri türleri ile çalışmak
assigned-by-value durumu
*/

var araclar = 7
var filo = araclar; // assign-by-value
filo++
console.log(araclar) // 7
console.log(filo) // 8

/* Ders 3: Referans veri türleri ile çalışmak
assigned-by-reference durumu
*/

var gdns = [8, 8, 8]
var dnsekle = gdns; // assign-by-reference
dnsekle.push(8)
console.log(gdns); // [8,8,8,8]
console.log(dnsekle); // [8,8,8,8]

/* Ders 3: Referanslar fonksiyon içerisinde değiştirilebilirler
ama fonksiyon işlemi sonrası değerler orjinal kalacaktı
*/

var dizgemiz = [8, 4, 8](
    function(x) { // IIFE
        x.push(99)
        console.log(x); // [8,4,8,99]
        x = [1, 4, 1]; // tekrar tanılmayalım  (yeni değerler atayalım)
        x.push(88)
        console.log(x); // [1,4,1,88]
    })(dizgemiz)
console.log(dizgemiz); // [8,4,8,99]

/* Ders 3: Referansları tamamiyle değiştirmek için
		sıfırlamak ve yeniden tanımlamak gereklidir.
*/

var sifirlanacak_dizge = [8, 7, 8]
    (function(x) { // IIFE
        x.length = 0 // Boş bir dizge oluşturalım
        x.push(1, 4, 7, 2)
        console.log(x); // [1,4,7,2]
    })(sifirlanacak_dizge)
console.log(sifirlanacak_dizge); // [1,4,7,2]

/* Ders 3: Referansın içerisine veri eklemek ve eski dizeden yeni
bir dize oluşturmak işlemi
*/

var cisco = [7, 4, 7];
var zoom = cisco.slice(); // yüzeysel kopya oluşturalım
cisco.push(77, 33);
console.log(zoom); //[7,4,7]
console.log(cisco); //[7,4,7,77,33]

/* Ders 3: Referans içerisine statik bir veri
(assign-by-value) yerleştirmek
*/

var flash = {
    speed: 88
};
(function(x) { //IIFE
    x.speed = 55;
})(flash);
console.log(flash.speed); //55


/* Ders 3: Statik olan veriler değiştirilemezdir, ancak biz bunları
referans objelere atarsak değiştirilebilir olacaklardır
*/

var captainCold = 12;
var legendsTomorrow = { member: captainCold };
legendsTomorrow.member++; //13
console.log(captainCold); //12