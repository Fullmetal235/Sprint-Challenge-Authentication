const db = require('../database/dbConfig.js')

module.exports = {
    add,
    findById,
    findBy,
}

function add (user) {
    return db('users').insert(user, 'id')
    .then(ids => {
        const [id] = ids;
        return findById(id);
    })
}

function findById (id) {
    return db('users').where({id}).first()
}

function findBy(item){
    return db('users').where(item)
}