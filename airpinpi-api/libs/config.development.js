import logger from './logger.js';

module.exports = {
  host: 'airpinpi.tk',
  database: 'app',
  username: 'app',
  password: 'mickey3G4Y!',
  params: {
    dialect: 'mysql',
    logging: (sql) => {
      logger.info(`[${new Date()}] ${sql}`);
    },
    define: {
      underscored: true,
    },
  },
  jwtSecret: 'A1rP1nP!',
  jwtSession: { session: false },
};
