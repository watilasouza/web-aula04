const mongoose = require ('mongoose');
const schema = mongoose.Schema;
 
var fraseSchema = new Schema(
    {
        autor: String,
        frase: String
    },
    {versionKey : false,collection: 'frases'}

)

module.exports = mongoose.model("Frase", FraseSchema);