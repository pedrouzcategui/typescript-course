type NetworkLoadingState = {
    state: "loading";
}

type NetworkFailedState = {
    state: "failed";
    code: number;
}

type NetworkSuccessState = {
    state: "success";
    response: {
        title: string;
        duration: number;
        summary: string;
    }
}

// Is Safe to access the state property because all of the 3 types have it.

type NetworkState = 
    NetworkLoadingState 
|   NetworkFailedState
|   NetworkSuccessState

function logger(network: NetworkState): string{
    //state.code This is not correct because we doesn't know which networkstate we receive.
    switch(network.state){
        case "loading":
            return "Downloading...";
        case "failed": 
            return `Error ${network.code} downloading`;
        case "success":
            return `Downloaded ${network.response.title} - ${network.response.duration}`
    }
}