/*

Let's consider the word "run". Run is a single word which could 
mean many different things depending on the context.

- “I will run home” – means to move quickly on foot.
- “She ran the 1500m” – means to run in a race.
- “The app is running” – means the software application is still open and active

*/

/*

this Context:

When used in a function, the this keyword simply points to an object to which it is bound. 
It answers the question of where it should get some value or data from:

*/

function alert() { 
    console.log(this.name + ' is calling'); 
}
alert();   // undefined is calling