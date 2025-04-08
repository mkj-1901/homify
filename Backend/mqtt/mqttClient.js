const mqtt = require('mqtt');
const client = mqtt.connect(process.env.MQTT_BROKER_URL);

client.on('connect', () => {
    console.log('Connected to MQTT Broker');
    client.subscribe('homify/+/status');
});

client.on('message', (topic, message) => {
    console.log(`Received message from ${topic}: ${message.toString()}`);
    // Handle incoming messages as needed
});

module.exports = client;
