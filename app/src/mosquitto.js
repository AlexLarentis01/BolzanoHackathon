import * as mqtt from 'mqtt';

const url = `ws://localhost:9001`;
const client = mqtt.connect(url);
const callbacks = [];

export function start() {
    client.on('connect', () => {
        client.subscribe('/#', error => {
            if (error) {
                console.error('Error in mqtt connection: ', error);
            }
            else {
                console.log('subscribed');
            }
        });
    });

    client.on('message', (topic, message) => {
        callbacks.map(callback => callback(topic, message));
    });
}

export function push(callback)  {
    callbacks.push(callback);
}

export function clear() {
    callbacks = [];
}