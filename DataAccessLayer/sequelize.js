const Sequelize = require("sequelize");

const PortfolioModel = require("../EntitiesLayer/portfolio");
const ShareModel = require("../EntitiesLayer/share");

const sequelize = new Sequelize("super_traders", "postgres", "admin1234", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const Portfolio = PortfolioModel(sequelize, Sequelize);
const Share = ShareModel(sequelize, Sequelize);

Share.belongsTo(Portfolio);

/*sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});*/

module.exports = {
  Portfolio,
  Share,
};
