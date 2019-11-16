import * as mqtt from 'mqtt';

export function startMqtt() {
    const url = `ws://localhost:9001`;
    const client = mqtt.connect(url);

    client.on('connect', () => {
        client.subscribe('/envinronment/temperature/+', error => {
            if (error) {
                console.error('Error in mqtt connection: ', error);
            }
            else {
                console.log('subscribed')
            }
        });
    });

    client.on('message', (topic, message) => {
        console.log(`topic: ${topic} message: ${message.toString()}`);
    });
}