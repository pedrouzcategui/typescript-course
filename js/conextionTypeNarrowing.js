"use strict";
function logger(network) {
    //state.code This is not correct because we doesn't know which networkstate we receive.
    switch (network.state) {
        case "loading":
            return "Downloading...";
        case "failed":
            return "Error " + network.code + " downloading";
        case "success":
            return "Downloaded " + network.response.title + " - " + network.response.duration;
    }
}
