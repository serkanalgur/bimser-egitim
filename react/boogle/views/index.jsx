/*
Ana karşılayıcı dosya görünümü
*/

const React = require( "react"); //Render vs işlemler
const propTypes = require( "prop-types"); //türler arası düzenleme
const Layout = require( "./layout"); // Ana kapsayıcısımız 
const {Button} = require("reactbulma");


class Index extends React.Component {
	render(){
		return (
			<Layout title={this.props.title}>
			<div className="giris">
				<img src="../images/boogle.png"/>
				<form name="google" action="/users" method="POST"><br />
					<input type="search" name="search" className="search" /><br />
					<input type="submit" className="button" name="submit" value="Google Search" />
					<input type="submit" className="button" name="lucky" value="I'm Feeling Lucky" />
				</form>
				<p>{this.props.mesaj}</p>
				<Button primary>Selam</Button>
			</div>
			</Layout>
		)
	};
}

Index.propTypes = {
	title : propTypes.string,
	mesaj : propTypes.string	
}

module.exports = Index;