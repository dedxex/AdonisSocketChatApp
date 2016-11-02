'use strict'

const Factory = use('Factory')

class UserSeeder {

  * run () {
    // run model/database factories here
    yield Factory.model('App/Model/User').create(5);
  }

}

module.exports = UserSeeder
