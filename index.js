import express  from 'express';
let app = express();
import { engine } from 'express-handlebars';

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('home');
});

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});