const PortfolioDAL = require("../DataAccessLayer/Concrete/portfolioDAL");

var dal = new PortfolioDAL();

const create = async (req, res) => {
  try {
    const portfolio = await dal.add(req.body);
    return res.status(201).json({
      portfolio,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const readAll = async (req, res) => {
  try {
    const portfolios = await dal.getAll();
    return res.status(200).json({
      portfolios,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const read = async (req, res) => {
  try {
    const portfolio = await dal.getById(req.params.id);
    if (portfolio) {
      return res.status(200).json({ portfolio });
    }
    return res.status(404).send("ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const [updated] = await dal.update(req.body, req.param.id);
    if (updated) {
      return res.status(200).json({ post: await dal.getById(req.params.id) });
    }
    throw new Error("Is not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const remove = async (req, res) => {
  try {
    if (await dal.remove(req.params.id)) {
      return res.status(204).send("Is deleted");
    }
    throw new Error("Is not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  create,
  readAll,
  read,
  update,
  remove,
};
