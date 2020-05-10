let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false;

let runnerAge = 16;

if (runnerAge > 18 && earlyRegistration) {
  raceNumber += 1000;
}

if(runnerAge > 18 && earlyRegistration) {
  console.log(`Your starting time is 9:30, and your race number is ${raceNumber}`);
} else if (runnerAge > 18 && !earlyRegistration) {
  console.log(`Your starting time is 11:00, and your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Your starting time is 12:30, and your race number is ${raceNumber}`);
} else {
  console.log(`Your starting time is 12:30, and your race number is ${raceNumber}`);
}
