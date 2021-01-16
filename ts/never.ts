function error(message: string): never {
    throw new Error(message);
}

function fail(){
    return error("something failed");
}

function infiniteLoop(): never{
    while(true){};
}

