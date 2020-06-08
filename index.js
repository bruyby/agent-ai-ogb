const express = require('express');
const app = express();
const dfff = require('dialogflow-fulfillment');

app.get('/', (req, res)=>{
    res.send('En ligne')
});

app.post('/', express.json(), (req, res)=>{
    const agent = new dfff.WebhookClient({
        request : req,
        response : res
    });

    function info(agent){
        agent.add("Recuper l'information du serveru");
    }

    var intentMap = new Map();
    intentMap.set('teste', info);

    agent.handleRequest(intentMap);

});





app.listen(3333, ()=> console.log("Serveur sur le port 3333"));