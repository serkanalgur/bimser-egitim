/*
JSON veri ile tablo oluşturan görünüm
*/

const React = require("react");

class JsonTable extends React.Component{
	render(){
		var tabloHeadFunc = this.ustkisimOlustur();
		var tabloRowFunc = this.satirlariOlustur();

		return(
			<table className = "tablo">
				<thead><tr>{tabloHeadFunc}</tr></thead>
				<tbody>{tabloRowFunc}</tbody>
			</table>
		);
	}

		ustkisimOlustur(){
			var cols = this.props.cols;
			return cols.map(function(colData){
				return <th key={colData.key}>{colData.label}</th>
			});
		}

		satirlariOlustur() {
			var data = this.props.data;

			return data.data.map(function(item,index){
				return <tr key={"sonuc"+index}><td>{item.first_name}</td><td><a href={item.avatar} target="_blank">{item.avatar}</a></td></tr>;
			}) 
		}
}
module.exports = JsonTable;