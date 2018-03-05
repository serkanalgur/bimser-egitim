/*
Gerekli Modülleri Ekleyelim
*/

const express = require( "express"); /*HTTP SERVER olutşrmak için*/
const eview = require( "express-react-views"); /* REACT JSX Şablonu okumak için*/
const http = require( "http"); /* HTTP Desteği */
const path = require( "path"); /* DOSYA Yollarını alabilmek için*/
const logger = require( "morgan"); // Log Kayıtlarını tutmak için
const routes = require( "./routes"); // Sayfa tanımları için rotalar
const users = require("./routes/users"); // Users .list için çağırdığımız dosya. sonunda .js uzantısına gerek yok
const bodyParser = require("body-parser"); // POST isteklerinin datalarını okumak için eklenti

var app = express();

// APP için işlem tanımlamalarını yapalım

app.set('port', process.env.PORT || 3000); // çalışacak portun tanımlanması
app.set('views',__dirname + '/views'); // Views dosyalarının klasörünü atadık
app.set('view engine','jsx'); // Viewlerin gösterim motorunu tanımlıyoruz
app.engine('jsx',eview.createEngine()); // Gösterimleri okuyacak ve render edecek sistem motoru
app.use(logger('dev')); // Yapılan her işlemin kaydını tutacak bir eklenti
app.use(express.static('assets')); //Kullanılacak statik dosyaların sunucu taraflı gösteriminde program klasöründen servis edilmesini sağlayan alan
app.use(bodyParser.json()); //JSON ile kodlanmış verileri karşılar
app.use(bodyParser.urlencoded({extended : true})); //Kodlanmış istekleri karşılamak için

app.get('/',routes.index); // ana istek sayfası (index). get isteğine göre
app.get('/users',users.index).post('/users',users.postreturn); //Kullanıcı rotası ana sayfası - Post özelliği formu karşılar
app.get('/users/:name',users.list); // Kullanıcı Liste Sayfası Değerli

http.createServer(app).listen(app.get('port'),function(){
	console.log("Express ile yaptığımız boogle "+app.get('port')+" potunda çalışıyor");
});
