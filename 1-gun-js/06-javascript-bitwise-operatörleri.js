/*Ders 6: Bitwise operatörleri örnekler*/

/* &, | , ^, ~ , <<, >>, >>> ile işlemler için
 Örnek sayılarımız 15 ve 9 yani onluk düzende "1111" ve "1001"
 Öteleme için de 1 sayısını kullanalım
 */

console.log(15 & 9); // 9	"1001"
console.log(15 | 9); // 15	"1111"
console.log(15 ^ 9); // 6	"0110"
console.log(~15); // -16
console.log(15 << 1); // 30	"00011110"
console.log(15 >> 1); // 7	"0111"
console.log(15 >>> 1); // 7	"0111"