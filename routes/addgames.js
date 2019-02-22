//Get our game data
var gamedata = require('../game.json');

 /*
 * GET new stats
 */
exports.addGamesview = function(req, res) {

    //console.log(req.query.date);
    //console.log(req.query.points);

    newGame = {
        "id": gamedata.games.length,
        "mapID": "mapArea1",  //FIX
        "name": req.query.name,
        "time": req.query.time,
        "date": req.query.date,
        "skill": req.query.skill,
        "players": req.query.players,
        "distance": req.query.distance,
        "isFavorited" : false
    };
    console.log(newGame);
    gamedata.games.push(newGame);
    
    console.log(gamedata);
    
    res.render('savedgames',gamedata);
}
/*
 * GET home page.
 */

exports.view = function(req, res) {
    res.render('addgames',gamedata);
};