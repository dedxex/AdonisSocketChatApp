'use strict'
const User = use('App/Model/User');
const Database = use('Database');
class UserController {
    * index (request, response) {
        const users = yield User.all();
    yield response.sendView('login',{ users : users.toJSON() });
  }
  * create (request,response) {
      yield response.sendView('signup');
  }
  * chat (request,response) {
      const users = yield User.all();
      yield response.sendView('chat',{ users : users.toJSON() });
  }
  * login (request,response) {
      const data = request.only('username', 'password');
      const userData =  yield Database.from('users').where({ username : data.username }).limit(1);
      if(data.password==userData[0].password) {
            yield request.session.put('username', data.username);
          response.redirect("/chat");
      }
        response.redirect("/");
  }
  * store(request,response) {
      const userData = request.only('username', 'password');
      yield User.create(userData);
        response.redirect('/');
  }
  
  }
  

module.exports = UserController
