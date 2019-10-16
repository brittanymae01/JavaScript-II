// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function family(name) {
  const parent1 = 'Dad';
  const parent2 = 'Mom';
  console.log(`${parent1} likes to be in charge!`)

  function kids(kid1, kid2) {
    const sport = 'soccor';
    console.log(`The kids love to play ${sport}`)

    function oneBigHappyFam(feeling) {
      const food = 'Bread';
      console.log(`The ${name} family is very ${feeling}, the kids are named ${kid1} and ${kid2}. The kids play ${sport} on Mondays and Fridays. An interesting fact is that ${parent2} eats a lot of ${food}!`)
    }//this closes oneBigHappyFam
    oneBigHappyFam('happy');
  }//this closes kids
  kids('Jack', 'Jill');
}//this closes family
family('Smith');



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
//const counterMaker = () => {
// IMPLEMENTATION OF counterMaker:
// 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
//let count = 0;
// 2- Declare a function `counter`. It should increment and return `count`.
//      NOTE: This `counter` function, being nested inside `counterMaker`,
//      "closes over" the `count` variable. It can "see" it in the parent scope!
// 3- Return the `counter` function.

//function counter() {
//let count = 0
//count = count + 1;
// return count;
//}
//};

//console.log(counterMaker());
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
//const counterFactory = () => {
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
//};
