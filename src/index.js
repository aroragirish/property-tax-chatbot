// external packages
const express = require('express');
const data = require('../mock/propertyData.json')
const bodyParser = require('body-parser');
require('dotenv').config();

// Start the webapp
const webApp = express();

// Webapp settings
webApp.use(bodyParser.urlencoded({
    extended: true
}));
webApp.use(bodyParser.json());

// Server Port
const PORT = process.env.PORT;

// Home route
webApp.get('/', (req, res) => {
    res.send(`Hello World.!`);
});

const WA = require('../helper-function/whatsapp-send-message');

// Route for WhatsApp
webApp.post('/whatsapp', async (req, res) => {

    let message = req.body.Body;
    let senderID = req.body.From;

    console.log(message);
    console.log(senderID);

    // Write a function to send message back to WhatsApp
    if (message.toLowerCase() === 'hi' || message.toLowerCase() === 'hello' || message.toLowerCase() === 'hey') {
        await WA.sendMessage(`
        Hello!

Welcome to CA Juneja-Thakur and Associates ChatBot.
We can help you with your property tax filing and more.

Please reply with your property number to know more!!
    `, senderID);
    }
    if (!isNaN(Number(message))) {
        const property = data.find(prop => {
            return prop.propertyNo.toString() === message;
        });
    
        if (property) {
            await WA.sendMessage(`
The property with number: ${message} belongs to ${property.Owner} and is located at ${property.propertyAddress}.
The pending tax on this property is ${property.pendingTax}.

You can pay your property tax by going to below link:
https://payme.demo.com/

        `, senderID);
        } else {
            await WA.sendMessage(`
            Oops! :(
    
It seems like we don't have any property registered with us with property number ${message}
        `, senderID);
        }
    } else if (!(message.toLowerCase() === 'hi' || message.toLowerCase() === 'hello' || message.toLowerCase() === 'hey')) {
        await WA.sendMessage(`
Sorry, I am still learning and couldn't process whatever you have typed. :(
        `, senderID);
    }
});

// Start the server
webApp.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});