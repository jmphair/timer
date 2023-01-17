// FEATURES

// implement an alarm clock/timer
// (obviously will use setTimeout...)

// it will beep after a specified amount of time has passed
// (will use process.stdout.write('\x07'); as per the activity guide)

// the user can specifiy unlimited number of alarms using command line arguments
// (will use process.argv.slice(2) to make this functionality possible)

// Edge Cases:

// 1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.

// 2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.

// 3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.


const userInput = process.argv.splice(2)
console.log("The user input was: ", userInput); //for my own reference
const correctUserInput = [];

//we need to sort the argv and then return only the items we need, so have to remove any edge cases!

// we need to look through the user input and find out if they made any mistakes, take only the correct input
for (let i = 0; i < userInput.length; i++) {
  if (userInput[i] >= 0 || userInput[i] === Number) {
    correctUserInput.push(userInput[i]);
  } 
}

//create a function to beep or ding making use of the setTimout function to create a delay as each userInput is used
const beepDing = () => {
  for (let i = 0; i < correctUserInput.length; i++) {
    setTimeout(() => {
      process.stdout.write(`"computer BEEPs at ${correctUserInput[i]} seconds" \n`) // no audible beep on mac so improvised
    }, correctUserInput[i] * 1000) // have to make sure we take the value from the command line and turn it into ms!
  }
}

beepDing();