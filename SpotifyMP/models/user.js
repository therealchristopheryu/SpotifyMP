const AV = require('../utils/leancloud.js');

class Users extends AV.Object {
  get Users() {
    return this.get('Users');
  }
}

AV.Object.register(Users, 'Users');

module.exports = Users;
