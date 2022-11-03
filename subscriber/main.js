const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://test.mosquitto.org');

client.subscribe('test');

client.on('message', function (topic, message) {
  console.log(`토픽:${topic.toString()}, 메세지:${message.toString()}`);
});
