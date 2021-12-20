const conn = require('../database/connection')

module.exports = {
    async list(req, res){
        const ong_id = req.headers.authorization

        const incident = await conn('incidents').where('ong_id', ong_id).select('*')

        return res.json(incident)
    }
}