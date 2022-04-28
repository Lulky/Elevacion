// GIVEN
console.log(hello);                                   
var hello = 'world';                                 

// var hello;
// console.log(hello); // logs undefined
// hello = "world";

// GIVEN
var needle = 'haystack'; //'needle' es una declaración, es global y se eleva
test(); // la función se ejecuta antes de la función por lo que no pasa nada.
function test(){ // test() también  se eleva a la cima
    var needle = 'magnet';  // "needle" es declarada dentro de "test()", y se eleva a la parte superior de su scope y al declararse 
    console.log(needle);// "Este log registra "magnet"
}

//GIVEN
var brendan = 'super cool'; //'super cool' es una declaración, es global y se eleva
function print(){ // print() tambien se eleva a la cima
    brendan = 'only okay'; // Asigno un nuevo valor a la variable brendan y ahora es "only okay" esto solo es para el scope de la función de print
    console.log(brendan);// "no imprimirá esto pprque no se llama a la función print en ningún momento"
}
console.log(brendan);// imprimirá "super cool" ya que registra el brendan global

//GiVEN
eat()
var food = 'chicken'; //"chicken" es un declaración, es global y se eleva
console.log(food); // imprimirá  el valor de string relacionado con la variable food
function eat(){// eat se eleva a la cima
    food = 'half-chicken';//Asigno un valor a la variable food y ahora es "half-chicken"
    console.log(food); // imprimirá "half-chicken" siempre ycuando se llame a la función
    var food = 'gone'; // se cambia el valor de la varibale food a "gone" y solo cambia para la escope de la función. 

}

//GIVEN
// mean()//SALDRÁ Un error ya que no lo reconoce como función, solo que mean es una variable hasta este punto sin ningun valor pero no una funcion aún

console.log(food);// como food esta declarado globalmente imprimirá food
var mean = function() { // EStoy guardando en una variable una función, esa variable mean se eleva hasta el inicio pero sin ningún valor
    food = "chicken";// food solo pertenece al scope de la función puesta en la variable mean
    console.log(food); // se imprimirá siempre y cuando se llame a mean()
    var food = "fish"; // se canmbia e valor de la variable food a fish
    console.log(food); // por lo tanto este consol log tambien cambia a fish
}
console.log(food); //imprimirá chicken que esta en la lnea 27 ya que esa variables tiene scope global

//GIVEN
console.log(genre); //undefined ya que genre aun es declarado en la linea 50, pero el terminal si lo reconoce pero sin valor al ir hacia el principio
var genre = "disco"; // se Declara por primera vez genre
rewind(); // llama a la función , puede ser llamada de cuaquier parte
function rewind() { // rewind se eleva a la cima
    genre = "rock"; //ahora genre vale rock para este scope
    console.log(genre); // imprime rock
    var genre = "r&b"; // la variable cambia de nombre a r&b
    console.log(genre); // ahora imprime r&b siguiendo el orden dentro de la scope
}
console.log(genre); // imprime disco ya que toma la variable con scope global genre

//GIVEN
dojo = "san jose"; // se declara una variable "dojo"
console.log(dojo); // imprime "san josé"
learn(); // llama a la función leanr()
function learn() { // la función se eleva hasta la cima
    dojo = "seattle"; //ahora dojo vale "seattle"
    console.log(dojo); //imprime "seattle"
    var dojo = "burbank"; // variable cambia a burbank
    console.log(dojo); //ahora imprime "burbank"
}
console.log(dojo); // toma el valor de la variable global "san jose"

//GIVEN 
console.log(makeDojo("Chicago", 65));// LLama a la función makeDojo y le establece sus parametros, por lo que imprimirá lo que la función le retorne, en este caso
console.log(makeDojo("Berkeley", 0)); // llama a la funcion y le establece parametros, en este caso pasa por las condicionales pero se interrumpe porque la constante no se puede cambiar y lanza error
function makeDojo(name, students){ //crea una funcion con atributos name y studen
    const dojo = {};// dojo es un objeto 
    dojo.name = name; //se declara una nombre para el objeto dojo
    dojo.students = students; //se declara un estudiante para el objeto dojo.
    if(dojo.students > 50){ //si estudiante es mayor que 50
        dojo.hiring = true; // se agrega un boleano hiring a mi objeto dojo
    }
    else if(dojo.students <= 0){ // si estudiane es menor igual a 0 
        dojo = "closed for now"; // dojo es una constante por lo que no se peude cambiar su valor, saldría error de type
    }
    return dojo; // retorna todo el objeto dojo
}












