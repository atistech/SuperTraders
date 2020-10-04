module.exports = (sequelize, type) => {
  return sequelize.define("share", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    symbol: {
      type: type.STRING,
      allowNull: false,
    },
    rate: {
      type: type.INTEGER,
      allowNull: false,
    },
    price: {
      type: type.INTEGER,
      allowNull: false,
    },
  });
};
