const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost');

client.on('connect', () => {
  console.log('Publisher connected :' + client.connected);
});

client.on('error', (error) => {
  console.log('Publisher could not connected: ' + error);
  process.exit(1);
});

setInterval(() => {
  client.publish('musmaPractice', 'Hello mqtt, Hello Musma, Hello Mac', {
    qos: 2,
  });
}, 2000);
