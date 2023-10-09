import { Sequelize } from "sequelize";

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('Tiendita', 'root', '12345678', {
    host: 'mysql',
    dialect: "mysql",
    port: 3306,
    //logging: false
  });

export default sequelize;