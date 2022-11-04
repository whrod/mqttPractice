const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost');
//const client = mqtt.connect('mqtt://test.mosquitto.org');

client.subscribe('musmaPractice');

client.on('connect', () => {
  console.log('Subscriber connected :' + client.connected);
});

// on_error
client.on('error', (error) => {
  console.log('Subscriber could not connected: ' + error);
  process.exit(1);
});

client.on('message', function (topic, message) {
  console.log(`Topic:${topic.toString()}, Message:${message.toString()}`);
});
