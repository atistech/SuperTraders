const BaseDAL = require("../Abstract/baseDAL");
const { Portfolio } = require("../sequelize");

class PortfolioDAL extends BaseDAL {
  constructor() {
    super(Portfolio);
  }
}

module.exports = PortfolioDAL;