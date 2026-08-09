'use strict';
//Remeber : we'are gonna use strict mode in all scripts now!

/*

const x = 23;
if (x === 23) {
  console.log(23);
}
const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(2003));

console.log('Hello');


*/
/*



//Problem Solving

//Challenge

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem

//-what is the temperature amplitued ? Answer : differnece between highest and lowest temp

//- How to compute the max and min temperature
//- what's a sensor error? And what do do ?

// 2) Breaking up into-sub problems

//- How to ignore errors ?
//- Find max value in temp array
//- Find min value in temp array
//- Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let index = 0; index < temp.length; index++) {

    const currentTemp = temp[index];

    if (typeof currentTemp !== "number") continue;
      
    

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
      
    
  }
  return max - min;
};

const amplitude =calcTempAmplitude(temperatures);

console.log(amplitude);


//Problem 2

//Function should now receive two functions

// 1) Understanding the problem
//- with 2 arrays, should we impelemt functionality twice ? NO! Just merge two arrays

// 2) Breaking up into sun-problems
//-  merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {

  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'c'];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);

  console.log(temps);
  

  let max = temps[0];
  let min = temps[0];
  for (let index = 0; index < temps.length; index++) {
    const currentTemp = temps[index];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};


const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);


console.log(amplitudeNew);


*/

//Debugging : Process of finding, fixing, and prevents bugs


const measureKelvin = function () {
  const measurement = {
    type : 'temp',
    unit : "celsius",
    //C)FIX
    value :Number(prompt("Degress celsius:"))

  }

 
  //B) FIND
  
  const kelvin = measurement.value + 273;
  return kelvin;
}


//A) IDENTIFY


console.log(measureKelvin());





//Using Debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'c'];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);

  console.log(temps);

  let max = 0;
  let min = 0;

  for (let index = 0; index < temps.length; index++) {
    const currentTemp = temps[index];

    if (typeof currentTemp !== 'number') continue;

   
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);


//A)IDENTITY
console.log(amplitudeBug);

