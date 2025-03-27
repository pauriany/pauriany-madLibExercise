const isNight = true;  // changes from sunrise to night
const timeOfDay = isNight ? "night" : "sunrise";
const booleanValue = timeOfDay.includes("night");  // true if night time
const place = "Salty Spitoon";
const person = { name: "Flying Dutchman", age: 500 };
const sound = "screech";
const num1 = 200;
const num2 = 299;
const mathResult = `${num1} + ${num2} = ${num1 + num2}`;


const story = `On a stormy ${timeOfDay}, I ventured into the ${place}. 
The creaking walls seemed to ${sound}, sending chills down my spine. 
Suddenly, a ${person.age} year old ${person.name} appeared, its glowing eyes piercing through the darkness. 
My heart raced as it floated silently toward me. 
Did you know ${mathResult}? 
Spooky, right?`;

document.getElementById("madlibs-output").textContent = story;