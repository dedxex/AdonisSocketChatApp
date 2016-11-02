'use strict'
const User = use('App/Model/User');
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
  * store(request,response) {
      const userData = request.only('username', 'password');
      yield User.create(userData);
        response.redirect('/');
  }
  * loginUser(request,response) {
      const user = request.only('username', 'password');
      const userData = User.find(user.username);
      if(userData) {
          response.redirect('/chat');
      }
        response.redirect('/');
  }
  
  
  }
  

module.exports = UserController
