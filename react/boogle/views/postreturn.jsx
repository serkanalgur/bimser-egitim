/*
Arama sorgusu cevap sayfası
*/

const React = require("react");
const propTypes = require("prop-types");
const Layout = require("./layout");
const JsonTable = require("./jsonTable");

class PostReturn extends React.Component {
	render() {
		var cols = [{key:"baslik", label: "Başlık"},{key:"url",label:"URL"}]; // Tablo başlık alanı için gerekli olan veri
		var data = this.props.search;
		return(
			<Layout title={this.props.title}>
					<JsonTable cols={cols} data={data} />
			</Layout>
		)
	}
}

PostReturn.propTypes = {
	title : propTypes.string,
	//search : propTypes.string	
}

module.exports = PostReturn;