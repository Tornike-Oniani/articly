const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

module.exports = async (connectionString = 'default') => {
  let conn;

  if (connectionString === 'default') {
    conn = open({
      filename: path.resolve(__dirname, '../NikasDB.sqlite3'),
      driver: sqlite3.Database,
    });
  } else if (connectionString === 'user') {
    conn = open({
      filename: path.resolve(__dirname, '../User.sqlite3'),
      driver: sqlite3.Database,
    });
  }

  return conn;
};
