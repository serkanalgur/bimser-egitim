module CarModule {
	class ProductCar {
		element: HTMLElement;
		private brandName: string;
		private productYear: number;
		constructor(element: HTMLElement, _brandName: string, _year: number) {
			this.element = element;
			this.brandName = _brandName;
			this.productYear = _year;
			this.element.innerHTML += this.GetReady();
		}
		public GetReady(): string {
			return this.productYear + " yılına ait " + this.brandName + " hazırlandı.";
		}
	}
	class Mercedes extends ProductCar {
		private YakitTipi: YakitTipi;
		constructor(element: HTMLElement, _brandName: string, _year: number, _yakitTip: YakitTipi) {
			super(element, _brandName, _year);
			this.YakitTipi = _yakitTip;
			this.element.innerHTML += " Yakit Tipi: " + YakitTipi[this.YakitTipi];
		}
	}
	interface Finance<T, Z> {
		masraf: number;
		YakitTipi: T;
		sanzimanTipi: Z;
		TotalPayment(m: number, yt: T, st: Z);
	};
	class CarPayment extends KmPayment implements Finance<YakitTipi, Sanziman>{
		element: HTMLElement;
		masraf: number;
		YakitTipi: YakitTipi;
		sanzimanTipi: Sanziman;
		constructor(_masraf: number, _yakitTip: YakitTipi, _sanziman: Sanziman, _from: Yer, _to: Yer) {
			super(_from, _to);
			this.masraf = _masraf;
			this.YakitTipi = _yakitTip;
			this.sanzimanTipi = _sanziman;
		}
		TotalPayment(totalKm: number): number {
			var yakitMasraf: number;
			var sanzimanMasraf: number;
			switch (this.YakitTipi) {
				case 1:
					yakitMasraf = 5;
					break;
				case 2:
					yakitMasraf = 3;
					break;
				case 3:
					yakitMasraf = 2;
					break;
			};
			switch (this.sanzimanTipi) {
				case 1:
					sanzimanMasraf = 7;
					break;
				case 2:
					sanzimanMasraf = 5;
					break;
				case 3:
					sanzimanMasraf = 3;
					break;
			}
			return this.masraf * yakitMasraf * sanzimanMasraf * totalKm;
		}
	}
	class MercedesPayment extends CarPayment {
		constructor(_masraf: number, _yakitTip: YakitTipi, _sanziman: Sanziman, _element: HTMLElement, _from: Yer, _to: Yer) {
			super(_masraf, _yakitTip, _sanziman, _from, _to);
			this.element = _element;
			this.element.innerHTML += this.WriteFinance() + "TL harcanmıştır.";
		}
		WriteFinance(): string {
			return "Aracınız <mark>" + this.toplamYol + "km </mark> yol yapmıştır. Toplam Yakit masrafı olarak <mark>" + this.TotalPayment(this.toplamYol).toString() + "</mark>";
		}
	}
	window.onload = () => {
		var el = document.getElementById('content');
		var mercedesPayment = new MercedesPayment(5, YakitTipi.Benzin, Sanziman.Manuel, el, Kordinat.Park.yer, Kordinat.Market.yer);

	};
}