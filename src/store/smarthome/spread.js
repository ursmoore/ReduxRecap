const myobj = { a: 1, b: "cow", c: true };

// spreadoperator {...myobj} is equal to {a: 1, b: "cow", c: true }
// if I want to refactor 'a' for example, I have to do const mysecobj = {...myobj, a:2}
const mysecobj = { ...myobj };

// in reducer we do:   return { ...lamp, power: !lamp.power }; which means we take the lamp object and we override the power field!
