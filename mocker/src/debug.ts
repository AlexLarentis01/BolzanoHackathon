import { Protocol, subscribe, MqttSubscribeOptions } from 'mqtt-now';


export function debug(sensors) {
    const actions = sensors.map(sensor => ({
        topic: `/envinronment/${sensor.id}`,
        onMessage: m => console.log('m', m.toString()),
    }));
    const subOptions: MqttSubscribeOptions = {
        host: 'localhost',
        type: Protocol.WS,
        actions
    };
    subscribe(subOptions);
}