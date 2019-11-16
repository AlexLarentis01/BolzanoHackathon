import { Sensor, Coordinates } from './sensor';
import { getSensorPosition } from './position';

export class TemperatureSensor extends Sensor {

    public coordinates: Coordinates;
    public interval: number;
    public id: string;

    private randomRange(x: number, y: number): number {
        return (Math.random() * (y - x) + x);
    }

    private getRandomPosition(): Coordinates {
        return getSensorPosition();
    }

    private getRandomInterval(): number {
        return Math.floor(this.randomRange(250, 750));
    }

    private getRandomId(): string {
        return 'temperature/' + Math.random();
    }

    public getRandomValue(): number {
        return this.randomRange(10, 12);
    }

    constructor() {
        super();
        this.coordinates = this.getRandomPosition();
        this.interval = this.getRandomInterval();
        this.id = this.getRandomId();
    }

}