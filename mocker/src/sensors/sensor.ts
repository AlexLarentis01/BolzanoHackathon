export interface Coordinates {
    latitude: number;
    longitude: number;
}

export abstract class Sensor {
    public coordinates: Coordinates;
    public interval: number;
    public id: string;

    abstract getRandomValue(): number;
}