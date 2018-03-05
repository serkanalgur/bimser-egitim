/*
Ana servis dosyası, Kapsayıcı dosya
*/

const React = require( "react"); //Render ve Componentler için gerekli
const propTypes = require( "prop-types"); // gönderilen değerlerin alınması ve diğer işlemler

class Layout extends React.Component {
	render() {
		return (
			<html>
				<head>
				<title>{this.props.title}</title>
						<link rel="stylesheet" type="text/css" href="../css/style.css"/>
		<link rel="shortcut icon" type="image/png" href="../images/favicon.ico"/>
				</head>
				<body>
		<header>
			<a href="https://plus.google.com/u/0/up/follow">+Lara</a>
			<a href="https://mail.google.com">Gmail</a>
			<a href="https://www.google.com/imghp?hl=en&tab=wi&ei=Ox1NVMXuJYO3yATCjoFA&ved=0CAQQqi4oAg">Images</a>
			<img id="products" src="../images/products.png"/>
			<img id="bell" src="../images/bell.png"/>
			<img id="share" src="../images/share.png"/>
			<img id="lara" className="headerpics" src="http://lh3.googleusercontent.com/-zkPWifjxy1M/AAAAAAAAAAI/AAAAAAAAAAA/7pAALFnncq4/s32-c/photo.jpg" />
		</header>

					{this.props.children}

		<footer>
			<a className="leftlinks" href="https://www.google.com/intl/en/ads/?fg=1">Advertising</a>
			<a className="leftlinks" href="https://www.google.com/services/?fg=1">Business</a>
			<a className="leftlinks" href="https://www.google.com/intl/en/about/">About</a>
			<a className="rightlinks" href="https://www.google.com/preferences?hl=en">Settings</a>
			<a className="rightlinks" href="https://www.google.com/intl/en/policies/?fg=1">Privacy & Terms</a>
		</footer>
					</body>
					</html>
		);
	}
}

Layout.propTypes = {
	title : propTypes.string,
};

module.exports = Layout;
