let userweight = prompt( "enter your weight :" );
console.log(
    "No. planet Gravity\n",
    "1 venus 1.23 \n",
    "2 earth 3.45 \n",
    "3 jupiter 5.6 \n",
    "4 mars 23.3 \n",
    "5 satun 45.6 \n",
);
let userplanet = prompt( "enter your  planet:" );
const planetData = [
      1.23 ,
      3.45  ,
       5.6 ,
      23.3,
      45.62
    
  ];

   userplanet =planetData[userplanet-1];

const userfinalweight =  userplanet * userweight;
console.log(`Your weight is ${userfinalweight}`);
// console.log(userfinalweight);
// console.log(userweight);
// console.log(userplanet);
// let userWeight = parseFloat(prompt("Enter your weight:")); // Parse the weight as a number

// console.log(
//     "No. planet Gravity\n",
//     "1 venus 1.23 \n",
//     "2 earth 3.45 \n",
//     "3 jupiter 5.6 \n",
//     "4 mars 23.3 \n",
//     "5 saturn 45.6 \n"
// );

// let userPlanet = parseInt(prompt("Enter the number of your desired planet:")); // Parse the planet number

// const planetData = [
//     1.23,
//     3.45,
//     5.6,
//     23.3,
//     45.6
// ];

// if (userPlanet >= 1 && userPlanet <= planetData.length) {
//     let gravityOnChosenPlanet = planetData[userPlanet - 1];
//     let weightOnChosenPlanet = userWeight * gravityOnChosenPlanet;
    
//     console.log(`Your weight on planet ${userPlanet} is ${weightOnChosenPlanet.toFixed(2)}`);
// } else {
//     console.log("Invalid planet number.");
// }
