const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}


function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}


console.log(findMatching(drivers, 'Bobby')); 
console.log(fuzzyMatch(drivers, 'Sa')); 
console.log(matchName([
  { name: 'Bobby', hometown: 'Pittsburgh' },
  { name: 'Sammy', hometown: 'New York' },
  { name: 'Sally', hometown: 'Cleveland' },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby', hometown: 'Tampa Bay' }
], 'Bobby')); 

