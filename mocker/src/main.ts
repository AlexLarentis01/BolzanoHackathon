import { publish, Protocol, MqttPublishOptions } from 'mqtt-now';
import { generateCo2Sensors, generateTemperatureSensors } from './sensors/generateSensors';
import { Sensor } from './sensors/sensor';
import { debug } from './debug';

const n = +process.argv[2] || 300;
const sensors: Sensor[] = [...generateCo2Sensors(n), ...generateTemperatureSensors(n)];
const actions = sensors.map(sensor => ({
    topic: `/envinronment/${sensor.id}`,
    message: () => JSON.stringify({ coordinates: sensor.coordinates, value: sensor.getRandomValue() }),
    interval: sensor.interval
}));

const options: MqttPublishOptions = {
    host: 'localhost',
    type: Protocol.WS,
    actions
};

publish(options);
debug(sensors);