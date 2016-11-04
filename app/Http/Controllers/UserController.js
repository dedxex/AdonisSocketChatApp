'use strict'
const User = use('App/Model/User');
const Database = use('Database');
class UserController {
    * index (request, response) {
        const users = yield User.all();
        console.log("hmmmmmmmmm");
    yield response.sendView('login',{ users : users.toJSON() });
  }
  * create (request,response) {
      yield response.sendView('signup');
  }
  * chat (request,response) {
      const usertest = yield User.all();
      const users = usertest.toJSON();
      const loggedUser =  yield request.session.get('username');
      users.loggedUser=loggedUser;
      console.log("the logged user is "+users.loggedUser);
      users.loggedUser = loggedUser;
      yield response.sendView('chat',{ users : users });
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
