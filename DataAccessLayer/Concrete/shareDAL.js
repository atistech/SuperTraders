const BaseDAL = require("../abstract/baseDAL");
const { Share } = require("../sequelize");

class ShareDAL extends BaseDAL {
  constructor() {
    super(Share);
  }
}

module.exports = ShareDAL;