const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Obtendrá la primera posicion del arreglo
console.log(otherRandomCar) //  obstendrá la segunda posición del arreglo

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // Obtendrá is not defined ya que name ya no es un atributo en sí,
console.log(otherName); // Obtendrá Elon ya que se le asignó una variable para name y ahora es othername;


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // Obtendrá  12345
console.log(hashedPassword); // es undefined ya que hashedPassword no existe en en el objeto person



const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); // Obtendrá 2 == 5  ==> false
console.log(first == third); // Obtendrá 2 == 2  ==> true


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // Obtendrá "value"
console.log(secondKey); //Obtendrá el arreglo [1, 5, 1, 8, 3, 3] 
console.log(secondKey[0]);  // Obtendrá la posición 0 del arreglo [1, 5, 1, 8, 3, 3] --> 1
console.log(willThisWork); // Se le asignó un atributo en la segunda posición willThisWork a secondkey la cual obtendrá 5


