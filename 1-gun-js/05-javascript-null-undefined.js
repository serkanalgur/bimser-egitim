/* Ders 5: null ve undefined farklı birer durumdur
undefined tanımlanmamış veriyi özelliğindedir.
null veridir ve içeriği boş bir durumu gösterir
*/

var a;
console.log(a == undefined) //true
console.log(a == null) //true

/* "a" boş (null) bir değere sahiptir ancak türü
"undefined" olacaktır. eşitlik operatörü her iki durum
için de true dönecektir.
*/

var a;
console.log(a === undefined) //true
console.log(a === null) //false

/* Katı eşitlik operatörüne baktığımızda ise
"a" değişkeninin türü undefined ama verisi
null değildir. dolayısıyla ikinci sorgu false
dönecektir
*/