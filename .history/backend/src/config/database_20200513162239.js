const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://money:money123456@ds245762.mlab.com:45762/mymoney',{
    useMongoClient: true
})

mongoose.Error.messages.general.require = "O atributo '{PATH}' é Obrigatório"