require('dotenv').config();
// if (process.env.NODE_ENV === "production") {
//   module.exports = require("../config/keys_prod").mongoURI;
// } else {
//   module.exports = require("../config/keys").mongoURI;
// }

module.exports = {
  mongoURI: process.env.MONGO_URI,
  jwt: process.env.JWT,
  secretOrKey: process.env.SECRET

}
