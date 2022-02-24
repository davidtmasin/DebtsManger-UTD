module.exports = (sequelize, Sequelize) => {
  const Debt = sequelize.define('debt', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    description: {
      type: Sequelize.STRING,
      notNull: true
    },
    value: {
      type: Sequelize.DOUBLE,
      notNull: true
    },
    payday: {
      type: Sequelize.STRING,
      notNull: true
    }
  })
  return Debt
}
