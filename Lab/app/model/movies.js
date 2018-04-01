import mongodb from 'mongodb';


let Schema = mongodb.Schema()

let moviesSchema = new Schema({
    // Champs à mettre
})

module.exports = mongoose.model('Movies', moviesSchema);