import chalk from 'chalk';
import {red, blue} from 'nanocolors';
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
    let lastOne = arr[arr.length - 1];
    console.log(arr);
       arr.map((el, ind) =>setTimeout(() => {
           (el % 2 == 0 && el == lastOne) ?  res (console.log(chalk.red(loves = 'No me quiere'))) :
           (el % 2 !== 0 && el == lastOne) ? res (console.log(chalk.blue(loves = 'Me quiere'))) :
           (el % 2 == 0) ?  res (console.log((loves = 'No me quiere')))  :  
           (el % 2 !== 0) ? res (console.log((loves = 'Me quiere'))) : rej (console.log(new Error('Something is wrong')));
       
       }, (ind)*1000));
   
 });
 solveMe = () => {
    let solve =  this.evenOrOdds(this.allPetals(this.howManyPetals()));
    solve.then((data)=> (data)).catch((err) => err.message);
 }
solveMe2 = async () => {
   
    try {
        let solve = await this.evenOrOdds(this.allPetals(this.howManyPetals()));
        (solve);
    } catch (error) {
        console.log(err.message);
        
    }
} 
 
}

let myMargarita = new Margarita;

// myMargarita.evenOrOdds(myMargarita.allPetals(myMargarita.howManyPetals()));
// myMargarita.solveMe();
// myMargarita.solveMe2();
//export default Margarita;

/**
 * set a number randomly
 * take that number and create an array from 1 until howManyPetals return
 * to iterate the array and if 
 */

/******************************Solucion Raúl churrera***************************************/
/**
 * Dos funciones involucradas => Una que pinta el resultado final (rojo y azul)  que será devuelta con la respuesta de la promesa
 * 
 */
/* const deshojarMar =  () => {
    let msm = "Me quiere";
    let numberPetals = Math.floor(Math.random()*12+1);

    return new Promise((res, rej) => {
    const id = setInterval(() => {
        console.log(msm);
        msm = (msm == 'Me quiere') ? 'No me quiere' : 'Me quiere'; // cambia el valor cada vez que se ejecuta
        numberPetals--; // va restando del numero random
        // cuando llegues a cero paramos el interval
        if(numberPetals == 0){
            clearInterval(id);
            res(msm);
        }
// cuanats veces se va a ejecutar?

    }, 1000)
});
//return Promise.resolve('Me quiere');
}

const printResult = (men) =>{
if(men == 'Me quiere'){
    console.log(blue(men));
}else {
    console.log(red(men));
}
} 

(()=> deshojarMar().then(data => printResult(data)))() */

// cómo desacoplamos? => Creamos una clase

export default class DaisyGame {
 async play() {
     try {
        this.message = 'me quiere';
        let result = await this.deshojarMargarita();
        this.printBlue(result); 
     } catch (error) {
         console.log(error);
         this.printRed(error);
     }
    
 }

 async deshojarMargarita() {
    this.setPetals();
    return new Promise(this.startInterval)
    // let resultado = await this.startInterval();
    // return resultado;
 }
startInterval(res, rej){
const id = setInterval(() =>{
    console.log(this.message);
    this.setMessage();
    this.petals--;
    if(this.petals == 1){
        clearInterval(id);
        res(this.message);
    } else {
        rej(this.message);
    }

});
}

setMessage(){
    this.message = (this.message == 'Me quiere') ? 'No me quiere' : 'Me quiere';
}

 setPetals(){
     this.petals = Math.floor(Math.random()*12+1);
 }

 async printResult(result){

 }
printBlue(message){console.log(blue(message));}
 printRed(message){console.log(red(message));}
}
let daisy = new DaisyGame();
daisy.play();
/**
 * Cuando trabajamos con async Es siempre recomendable trabajar con try and catch
 *  No significa que no podamos trabajar con tehn and catch, but why we shouldn't
 */