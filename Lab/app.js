import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';
import MongoClient from 'mongodb';
import assert from 'assert';
// import MoviesRoutes from './app/routes/moviesRoutes';

let app = express();
let port = process.env.PORT || 3000;

let url = 'mongodb://db:27017';
let dbName = 'Movies';

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('www'))

MongoClient.connect(url + '/' + dbName, (err, client) => {
    if (err) return console.log(err)
    let db = client.db('MovieDB') // whatever your database name is


    app.route('/movies')
    .get((req,res) => {
        // db.collection('movies').find().toArray((err, results) => {
        //     if(err) return console.log(err)
        //     console.log(results)
        //     res.json(results);
        // });    
        let one = db.collection('movies').findOne((err, results) => {
            if(err) return console.log(err);
            res.json(results)
            console.log(results)
        })
        
    });


    app.get('/', (req,res) => {
        res.send('Welcome to moviesapp')
        console.log("Welcome to moviesapp")
    })
    
});





  
    


    


app.route('/movie/:id')
    .get((req,res) => {
        res.send('Movies  1')
        console.log("Movie 1");
    });

app.listen(port);
console.log('Server start on ' + port);