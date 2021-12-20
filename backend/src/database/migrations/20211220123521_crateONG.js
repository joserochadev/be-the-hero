//metodo up e responsável pela criaçao da tabela

//npx knex migrate:latest   //execulta a migration e cria a tabela

exports.up = function(knex) {
    //criando uma tabela
   return knex.schema.createTable('ongs', function(table){
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
  
};


//metodo down e responsavel pra se caso der algum problema, poder voltar atras com o q foi feito
exports.down = function(knex) {
    //deletando a tabela
 return knex.schema.dropTable('ongs')
};
