const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');

setInterval(() => {
  client.publish('test', 'Hello mqtt', { qos: 2 });
}, 2000);
