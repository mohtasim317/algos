// A tandem bicycle is a bicycle that's operated by two people: person A and person B. Both people pedal the bicycle, but the person that pedals faster dictates the speed of the bicycle. So if person A pedals at a speed of 5, and person B pedals at a speed of 4, the tandem bicycle moves at a speed of 5 ( i.e., tandemSpeed = max(speedA, speed B) ).

// You're given two lists of positive integers: one that contains the speeds of riders wearing red shirts and one that contains the speeds of riders wearing blue shirts. Each rider is represented by a single positive integer, which is the speed that they pedal a tandem bicycle at. Both lists have the same length, meaning that there are as many red-shirt riders as there are blue-shirt riders. Your goal is to pair every rider wearing a red shirt with a rider wearing a blue shirt to operate a tandem bicycle.

// Write a function that returns the maximum possible total speed or the minimum possible total speed of all the tandem bicycles being ridden based on an input parameter, fastest. If fastest = true, your function should return the maximum possible total speed; otherwise it should return the minimum total speed.

// "Total speed" is defined as the sum of the speeds of all the tandem bicycles being ridden. For example, if there are 4 riders (2 red, 2 blue) who have speeds of 1, 3, 4, 5, and if they're paired on tandem bicycles as follows: [1, 4], [5, 3], then the total speed of these tandem bicycles is 4 + 5 = 9.

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let speed = 0;
  blueShirtSpeeds.sort((a, b) => b - a);

  if (fastest === true) {
    redShirtSpeeds.sort((a, b) => a - b);
  } else {
    redShirtSpeeds.sort((a, b) => b - a);
  }

  for (let i = 0; i < blueShirtSpeeds.length; i++) {
    speed += Math.max(blueShirtSpeeds[i], redShirtSpeeds[i]);
  }

  return speed;
}

console.log(tandemBicycle([1, 2, 3], [3, 2, 1], true));
console.log(tandemBicycle([5, 2, 2], [4, 10, 3], false));
console.log(tandemBicycle([3, 591, 21], [1, 2, 3], true));
console.log(tandemBicycle([1, 2, 3], [3, 2, 1], false));
console.log(tandemBicycle([123, 32, 300], [300, 22, 400], false));
console.log(tandemBicycle([3, 9, 2], [7, 2, 1], true));
console.log(tandemBicycle([3, 9, 2], [7, 2, 1], false));
