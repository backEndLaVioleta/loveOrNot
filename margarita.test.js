// import space
import Margarita from './index.js';
// test
describe('Sample', ()=>{
    it('Should test that true equals true', ()=>{
        expect(true).toBe(true);
    });
});

// test class promises
describe('class Margarita', ()=>{
   let myPromises;

   beforeEach(()=> {
       myPromises = new Margarita();
   })
   describe('Constructor', ()=>{
       test('Margarita´s class should exist and should create objects', ()=>{
        expect(myPromises instanceof Margarita).toBe(true);
       });
       test('Maragarita should have a constructor', ()=>{
           expect(constructor()).toBeDefined();
       });
       test('Margarita should have a function called "howManyPetals"', ()=>{
           expect(myPromises.howManyPetals()).toBeDefined();
       });
       test('Margarita should have a function called "allPetals"', ()=>{
           expect(myPromises.allPetals()).toBeDefined();
       });
       test('Margarita should have a function called ')
   });
// howManyPetals
   describe('HowManyPetals', ()=>{
       test('howManyPetals should return a number', ()=>{
           expect(myPromises.howManyPetals()).toEqual(expect.any(Number));
       });
   });

// allPetals
   describe('allPetals array', ()=> {
       const expected = [1,2,3];
       it('should have numbers inside the array despite the length',()=> {
           expect(myPromises.howManyPetals([1])).toEqual((expected))
       })
   })// falla, a revisar
})