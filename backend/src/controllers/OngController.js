const crypto = require('crypto')
const conn = require('../database/connection')

module.exports = {
    // criando ongs
    async create(req, res){
        const {name, email, whatsapp, city, uf} = req.body
        const id = crypto.randomBytes(4).toString('hex')

        await conn('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json({id})
    },

    // listando ongs
    async list(req, res){
        const ongs = await conn('ongs').select('*')
        return res.json({ongs})
    }
}