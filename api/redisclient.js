var redis = require('redis');

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || 'password';

module.exports.createClient = () => {
    var client = redis.createClient({
        port: REDIS_PORT,
        host: REDIS_HOST,
        password: REDIS_PASSWORD,
    });

    client.on('connect', function () {
        console.log('Redis client connected');
    });

    client.on('error', function (err) {
        console.log('Something went wrong ' + err);
    });

    return client;
};