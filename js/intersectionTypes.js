"use strict";
var handleArtistsResponse = function (response) {
    if (response.error) {
        console.log(response.error.message);
        return;
    }
    console.log(response.artists);
};
