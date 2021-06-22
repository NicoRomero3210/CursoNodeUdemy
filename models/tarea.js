const { v4 } = require('uuid');

class Task {
  id = '';
  desc = '';
  completadoEn = null;
  constructor(desc) {
    this.id = v4();
    this.desc = desc;
    this.completadoEn = null;
  }
}

module.exports = Task;
