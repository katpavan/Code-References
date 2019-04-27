// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser());

// Database configuration
var databaseUrl = process.env.MONGODB_URI || "frogs_db";
var collections = ["frogs"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);


// Log any mongojs errors to console
db.on("error", function (error) {
    console.log("Database Error:", error);
});


// frogs Routes
// ======
//documentation for mongojs:
//https://github.com/mafintosh/mongojs

app.get("/frogs", function (req, res) {
    // Find all frogs in the frogs collection
    db.frogs.find({}, function (error, frogs) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Otherwise, send json of the frogs back to user
        // This will fire off the success function of the ajax request
        else {
            //pretend that it takes 5 seconds to get the frogs back
            //setTimeout(function(){
            res.json(frogs);
            //}, 5000)
        }
    });
});

app.get("/frogs/:id", function (req, res) {
    // Find all frogs in the frogs collection
    db.frogs.findOne({ _id: mongojs.ObjectId(req.params.id) }, function (error, frogs) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Otherwise, send json of the frogs back to user
        // This will fire off the success function of the ajax request
        else {
            //pretend that it takes 5 seconds to get the frogs back
            //setTimeout(function(){
            res.json(frogs);
            //}, 5000)
        }
    });
});


// Handle form submission, save submission to mongo
app.post("/frogs", function (req, res) {
    //validation here
    // req.body.songName.length > 1

    // Insert the song into the frogs collection
    db.frogs.insert({ name: req.body.name, species: req.body.species }, function (error, newFrog) {
        // Log any errors
        if (error) {
            console.log(error);
        } else {
            //the reason why we are sending the savedSong back is because we now have an _id to give to the client
            res.json(newFrog);
        }
    });
});

// curl -X PUT http://localhost:3000/frogs/5cc494debf60aabc22feecfb/Nelly/Office
app.put("/frogs/:id/:updatedName/:updatedSpecies", function (req, res) {
    db.frogs.findAndModify({
        query: {
            "_id": mongojs.ObjectId(req.params.id)
        },
        update: {
            $set: {
                "name": req.params.updatedName,
                "species": req.params.updatedSpecies
            }
        },
        new: true
    }, function (err, editedFrog) {
        res.json(editedFrog);
    });
});


/*  
  curl -X DELETE http://localhost:3000/frogs/5cc288d471a416daebc0d4d6/
*/
app.delete("/frogs/:id", function (req, res) {
    var id = req.params.id;

    db.frogs.remove({
        "_id": mongojs.ObjectID(id)
    }, function (error, removed) {
        if (error) {
            res.send(error);
        } else {
            res.json(id);
        }
    });
});

// Listen on port 3001
app.listen(PORT, function () {
    console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
});
