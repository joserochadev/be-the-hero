const conn = require('../database/connection')
const { list } = require('./OngController')

module.exports = {
    async create(req, res){
        const { title, description, value } = req.body
        const ong_id = req.headers.authorization

        const [id] = await conn('incidents').insert({
            title,
            description,
            value,
            ong_id 
        })

        return res.json({id})
    },

    async list(req, res){
        const { page = 1} = req.query

        const [count] = await conn('incidents').count()
        const incidents = await conn('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5).offset((page - 1)*5)
        .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
        ])
        
        // res.header("Access-Control-Allow-Origin", "*")
        // res.header("Access-Control-Allow-Headers", "X-Requested-With")
        res.header({'X-Total-Count': count['count(*)']})
        return res.json(incidents)

    },

    async delete(req, res){
        const {id} = req.params
        const ong_id = req.headers.authorization

        const incident = await conn('incidents').where('id', id).select('ong_id').first()

        if(incident.ong_id != ong_id){
            return res.status(401).json({error: "Operation not permitted"})
        }

        await conn('incidents').where('id', id).delete()
        return res.status(204).send()
    }
}