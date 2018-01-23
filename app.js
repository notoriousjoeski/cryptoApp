// <JS> | Backend Side 
// ---------------------------------------
// Required Dependencies 
var   express = require('express'),
        bodyParser = require('body-parser'),
        mongoose    = require('mongoose'),
        app = express();
        

//setting up the database 
mongoose.connect("mongodb://localhost/cryptoApp"); 
//setting up the app
app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended:true})); 
app.set("view engine", "ejs"); 

// SERVER PORT 
// --------------
const SERVER_PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    
    res.render("index"); 
    
}); 

app.listen(SERVER_PORT, () => {
    console.log("Listening on Port: " + SERVER_PORT); 
});