import { Sensor } from './sensor';
import { Co2Sensor } from './co2Sensor';
import { TemperatureSensor } from './temperatureSensor';


export function generateCo2Sensors(n: number): Sensor[] {
    const res = [];
    for (let i = 0; i < n; i++) {
        res.push(new Co2Sensor());
    }
    return res;
}
export function generateTemperatureSensors(n: number): Sensor[] {
    const res = [];
    for (let i = 0; i < n; i++) {
        res.push(new TemperatureSensor());
    }
    return res;
}