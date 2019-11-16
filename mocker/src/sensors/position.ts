import { Coordinates } from './sensor';

const bozenCenter = { latitude: 46.491475, longitude: 11.338403 };
const yRay = 0.015132, xRay = 0.015686;

function randomRange(x: number, y: number): number {
    return (Math.random() * (y - x) + x);
}

export function getSensorPosition(): Coordinates {
    const latitude = randomRange(bozenCenter.latitude - yRay, bozenCenter.latitude + yRay);
    const longitude = randomRange(bozenCenter.longitude - xRay, bozenCenter.longitude + xRay);
    return { latitude, longitude };
}