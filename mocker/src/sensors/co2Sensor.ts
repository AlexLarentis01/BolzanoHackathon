import { Sensor, Coordinates } from './sensor';
import { getSensorPosition } from './position';

export class Co2Sensor extends Sensor {

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
        return 'co2/' + Math.random();
    }

    public getRandomValue(): number {
        return this.randomRange(250, 350);
    }

    constructor() {
        super();
        this.coordinates = this.getRandomPosition();
        this.interval = this.getRandomInterval();
        this.id = this.getRandomId();
    }

}