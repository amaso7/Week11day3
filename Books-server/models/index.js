'use strict'

const fs = require('fs')
const path = require('path')
const Sequalize = require('Sequalize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname +'/../config/config.json')[env]
const db = {}

let sequalize
if (config.use_env_variable){
    sequalize = new Sequalize(process.env[config.use_env_variable], config)
} else{
    sequalize = new Sequalize(config.database, config.username, config.password, config)
}
fs
.readdirSync(__dirname)
.filter(file => {
    return(file.indexOf('.')!==0) && (file !== basename) && (file.slice(-3)==='.js')
    })
    .forEach(file => {
        const model = sequalize['import'](path.join(__dirname))
        db[model.name]= model
    })
Object.keys(db).forEach(modelName => {
    if (db[modelName].assosiate){
        db[modelName].assosiate(db)
    }
})
db.sequalize = sequalize
db.Sequalize = Sequalize
module.exports = db