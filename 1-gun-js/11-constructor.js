/* NameSpace Yapalım */
var Shape = Shape || {};

/* Constructor Yapısını Kuralım. Ekstra Fonksiyon ile */

Shape.Rectangle = function Shape_Rectangle(width, height, color) {
	this.Width = width;
	this.Height = height;
	this.Color = color;
}

/* Alt Detayları Verelim */
Shape.Rectangle.prototype = {
	Width: null,
	Height: null,
	Color: null,
	Draw: function Shape_Rectangle_Draw(canvasId, x, y) {
		var canvas = document.getElementById(canvasId);
		var context = canvas.getContext("2d");
		context.fillStyle = this.Color;
		context.fillRect(x, y, this.Width, this.Height);
	}
}

/* Statik Veriler Ekleyelim */
Shape.Rectangle.Sides = 4;

/* Statik Fonksiyonlar */
Shape.Rectangle.CreateSmallBlue = function Shape_Rectangle_CreateSmallBlue() {
	return new Shape.Rectangle(5, 8, '#0000ff');
}
Shape.Rectangle.CreateBigRed = function Shape_Rectangle_CreateBigRed() {
	return new Shape.Rectangle(280, 55, '#ff0000');
}

Shape.Rectangle.CreateBigRed().Draw("painting", 10, 0);