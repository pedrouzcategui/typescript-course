import { Map } from "typescript";

function setUpMap(config: MapConfig): void{}; // We apply the entire Interface as the parameter named config.

interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
}

setUpMap({lng: -73.935242, lat: 40.73061, tileSize: 16});