const AV = require('../utils/leancloud.js');

class Songs extends AV.Object {
  get _File() {
    return this.get('_File');
  }
}

AV.Object.register('_File', 'Songs');

module.exports = Songs;
