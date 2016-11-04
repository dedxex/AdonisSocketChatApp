'use strict'

const Schema = use('Schema')

class ConversationsTableSchema extends Schema {

  up () {
    this.create('conversations', (table) => {
       table.increments('id')
      table.string('name', 60)
      table.string('message', 80)
      table.timestamps('created_at')
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('conversations')
  }

}

module.exports = ConversationsTableSchema
