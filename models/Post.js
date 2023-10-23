//O ideal de sempre criar uma Model é sempre com a primeira letra maiúscula
//e sempre no singular, não no plural (boas praticas)

const db = require('./db');

const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

module.exports = Post;

//Post.sync({force: true});