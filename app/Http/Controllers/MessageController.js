'use strict'

class MessageController {

  * index(request, response) {
    //
  }

  * create(request, response) {
    //
  }

  * store(request, response) {
    //
    const data_server = request.only('message','to','from');
    const fromUser = data_server.from;
    const stringg = fromUser.concat(data_server.to);
    console.log("the name of conversation between the two users is "+stringg);
     const userData =  yield Database.from('messages').where({ name : stringg }).limit(1);
    if(userData == stringg) {
        
    }
    yield User.create(userData);
    console.log("arrived at MessageController@store "+data_server.message);
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = MessageController
