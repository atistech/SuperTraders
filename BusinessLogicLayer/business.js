const PortfolioDAL = require("../DataAccessLayer/Concrete/portfolioDAL");
const ShareDAL = require("../DataAccessLayer/Concrete/shareDAL");

const pDAL = new PortfolioDAL();
const sDAL = new ShareDAL();

const ListSharesOfPortfolio = (p_id) => {};

module.exports = {
  ListSharesOfPortfolio,
};
