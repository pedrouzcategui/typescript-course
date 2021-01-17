"use strict";
function createSquare2(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20
    };
}
