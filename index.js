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
 evenOrOdds = (arr) => new Promise((res, rej) => {
     let loves = "";
     let lastOne = arr;
     console.log(arr);
        arr.map((el, ind) =>setTimeout(() => {
            (el % 2 == 0) ?                               console.log((loves = 'No me quiere'))  : 
            (el % 2 == 0 && el == arr[arr.length - 1]) ?  console.log(chalk.grey(loves = 'No me quiere')) :
            (el % 2 != 0 && el == arr[arr.length - 1]) ?  console.log(chalk.blue(loves = 'Me quiere')) : 
                                                          console.log((loves = 'Me quiere'));
        }, (ind)*1500))

    /* arr.map((el, ind) => {
            setTimeout(() => {
                if(el % 2 == 0) {
                    console.log((loves = 'No me quiere'));
               } else {
                   console.log((loves = 'Me quiere'));
               }
               
            }, ind*1500) */
    
 });
 
}

let myMargarita = new Margarita;
/* setInterval(() => {
    console.log(myMargarita.evenOrOdds(myMargarita.allPetals(myMargarita.howManyPetals())));
}, 1000); */
(myMargarita.evenOrOdds(myMargarita.allPetals(myMargarita.howManyPetals())));
export default Margarita;

/**
 * set a number randomly
 * take that number and create an array from 1 until howManyPetals return
 * to iterate the array and if 
 */
