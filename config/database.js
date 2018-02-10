// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

module.exports = {
 uri: 'mongodb://kyledb:elykdb@ds131258.mlab.com:31258/meandb', // Databse URI and database name: Old >  mongodb://localhost:27017/meandb
 secret: crypto, // Cryto-created secret
 db: 'meandb' // Database name
}