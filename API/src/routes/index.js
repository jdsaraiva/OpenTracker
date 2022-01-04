var amqp = require('amqplib/callback_api');

const express = require('express');
const router = express.Router();
const opt = { credentials: require('amqplib').credentials.plain('jds', 'jds!') };

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "MotoTracking API",
        version: "0.0.1"
    });
});

// Pq crasha ? ver outros exemplos para mandar msg em JS -

router.post('/sendLocation', function (req, res, next) {

    console.log("0");

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    console.log("1");

    res.status(200).send({
        title: "MotoTracking API",
        version: "0.0.1",
        status: "Location updated for user: " + req.body.id
    });

    /*
    amqp.connect('amqp://192.168.1.12', opt, function(error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function(error1, channel) {
            if (error1) {
                throw error1;
            }

            console.log("2");

            var queue = 'hello';

            // Deve ir em XML ou Json, adicionar restentes campos -
            var msg = 'Hello World!';

            channel.assertQueue(queue, {
                durable: true
            });
            channel.sendToQueue(queue, Buffer.from(msg));

            res.status(200).send({
                title: "MotoTracking API",
                version: "0.0.1",
                status: "Location updated for user: " + req.body.id
            });

        });
        setTimeout(function() {
            connection.close();
            process.exit(0);
        }, 500);

    });
     */

    console.log("3");

});


module.exports = router;
