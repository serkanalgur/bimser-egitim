/* Ders 9 : Diziler */

var arabalar = ["BMW", "Mercedec", "Peougeot", "Opel"];

var arabalar2 = new Array("BMW", "Mercedec", "Peougeot", "Opel");

console.log(arabalar[0]); // BMW
console.log(arabalar2[1]); //Mercedes

/* Diziler ile kullanılabilen fonksiyonlar */

var arabas = ["BMW", "Mercedec", "Peougeot", "Opel"];
arabas.length; // 4
arabas.sort(); //Diziyi Sıralar
arabas.push("Audi") // Diziye yeni veri olarak Audi ekler

/* Dizileri döngüye sokmak */

var fruits, text, fLen, i;

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}

/*Çıktı
<ul>
	<li>Banana</li>
	<li>Orange</li>
	<li>Apple</li>
	<li>Mango</li>
</ul>
*/