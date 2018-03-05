/*
Ana Sayfa için gerekli rota
*/

exports.index = function(req,res){
	res.render('index',{title:"Boogle Index",mesaj : "Araki Bulaki"});
}