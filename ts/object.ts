declare function create(o: object|null): void;

create({prop: 0});
// create("Hello"); Throws an error
// create(3); Throws an error