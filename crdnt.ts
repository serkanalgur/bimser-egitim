 module CarModule {
	export class Yer { x: number; y: number; }

	export class Kordinat {
		public static Ev = { yer: { x: 0, y: 0 } };
		public static Park = { yer: { x: 20, y: 25 } };
		public static Is = { yer: { x: 25, y: 30 } };
		public static Market = { yer: { x: 30, y: 35 } };
	}
	export class KmPayment {
		toplamYol: number
		constructor(from: Yer, to: Yer) {
			var totalX = (to.x - from.x);
			var totalY = (to.y - from.y)
			this.toplamYol = (totalX < 0 ? totalX * -1 : totalX) + (totalY < 0 ? totalY * -1 : totalY)
		}
	}
}