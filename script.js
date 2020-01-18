//console.log(__dirname + " dirname " + __filename);
console.log(`Your port is ${process.env.PORT}`); // undefined
const dotenv = require("dotenv");
dotenv.config();
console.log(`Your port is ${process.env.PORT}`);
