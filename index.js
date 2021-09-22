// what to do 
// KISS
// chalk
import chalk from 'chalk';

// create object promise
class Margarita {
    // constructor
 constructor(){

 }
 // methods
 // metod random to get the number
 howManyPetals = () => {
     let randomNum = 0;
    randomNum = Math.floor(Math.random() * 10) + 1;
    return randomNum;
    };

 // array allpetals
 allPetals = (num) => [...Array(num).keys()].map((el) => el + 1);

 // check even and odds
 evenOrOdds = (arr) =>  new Promise((res, rej) => {
     
        arr.map((el) => (el[arr.length - 1] % 2 == 0) ? res(console.log(chalk.red('No me quiere'))) : 
                                        rej(console.log(chalk.blue('Me quiere'))));
     
   
 })
}

let myMargarita = new Margarita;

console.log(myMargarita.evenOrOdds(myMargarita.allPetals(myMargarita.howManyPetals())));
export default Margarita;

/**
 * set a number randomly
 * take that number and create an array from 1 until howManyPetals return
 * to iterate the array and if 
 */