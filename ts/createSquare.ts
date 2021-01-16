interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare2(config: SquareConfig):{color: string, area: number}{
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20
    }
}

