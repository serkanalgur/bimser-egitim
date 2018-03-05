/*
Kişi Listesi ya da kullanıcı listesi alanı
*/

const reQuest = require('request');
const API_KEY = 'AIzaSyBpCoGnZJvu4h2qZSvqQ6AhrZeLPnzSgtY';


exports.index = function (req,res){
	res.send("Kullanıc Listesi Sayfası");
}

exports.list = function(req,res){
	res.send(req.params.name + "cevabı burada");
}

exports.postreturn = function(req,res){
	var search = req.body.search;
	let uriss;
	if(typeof search === "number"){	
		console.log ('Evet');
uriss = "https://reqres.in/api/users?page="+search;
	} else {
		uriss = "https://reqres.in/api/users";
	}
	reQuest({
		url: uriss,
		json : true
	}, function (error,response,body){
			if(!error && response.statusCode === 200){
				res.render('postreturn', { title: "Arama Sonucu", search: body });
			} else {
				res.send(error + "Hata Else Döndü");
			}
	})


	 // Arama sorgusu için render olacak dosya ve verisi
		//res.send("Yağtığımız sorgu : "+ search);
}