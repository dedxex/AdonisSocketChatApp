'use strict'

const Schema = use('Schema')

class MessagesTableSchema extends Schema {

  up () {
    this.create('messages', (table) => {
      table.increments('id')
      table.string('name', 60).unique()
      table.string('message', 80)
      table.timestamps('created_at')
      table.timestamp('deleted_at')
    })
  }

  down () {
    this.drop('messages')
  }

}

module.exports = MessagesTableSchema
