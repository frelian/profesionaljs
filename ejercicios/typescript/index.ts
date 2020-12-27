// 1. Boolean
// Opcion 1, implicito
let muted = true;

// Para ser explicitos con la declaracion
// Opcion 2, explicito
let muted_explicit: boolean = true;

// 2. Numeros
let numerador: number = 34;
let denominador: number = 6;
let resultado = numerador / denominador;

// 3. String
let nombre: string = 'Julian';
let saludo = `Saludo, me llamo ${nombre}`;

// 4. Arreglos
// Arreglo predefinido de tipo STRING e inicializado vacio
// Solo admitira strings, lo demas generara error
let people: string[] = [];
people = ["Jesus", "Adan", "Eva"];
people.push("Moises");

// Arreglo combinado de STRING y NUMBER e inicializado vacio
let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push("Enoc");
peopleAndNumbers.push(99);

// 5. Enum implicito
enum Color1 {
    Rojo,
    Verde,
    Azul,
}

// Enum Explicito
enum Color_ {
    Rojo  = "Rojo",
    Verde = "Verde",
    Azul  = "Azul",
}


let colorFavorito: Color_ = Color_.Azul;
// Imprimira: 2, es decir imprime el indice si no declaro el enum explicitamente:
console.log(`Mi color favorito es ${colorFavorito}`);

// 6. Any
let comodin: any = "Joker";
comodin = {type: "Wildcard"}

// 7. Object
let someObject: object = { name: "Julian" }

// *************************** //
// FUNCIONES

function add(a: number, b: number): number{
    return a + b;
}

const sum = add(4, 6);

// Funciones que regresan otras funciones con retorno no expecificado
function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour   = createAdder(4);
const fourPlus6 = addFour(6);

console.log(fourPlus6);

// Funciones con parametros opcionales
function fullName( firstName: string, lastName: string = 'Niño' ): string {
    return `${firstName} ${lastName}`;
}

const julian = fullName('Julian');
console.log(julian);

// Definiendo tipos de datos al des-estructurar un objeto
function update({providerId, data}: { providerId: number; data: object }){
    console.log(providerId, data);
}

const object = {
    providerId: 1,
    data: {}
};

update(object);

// ************************* //
// INTERFACES

enum Color {
    Rojo  = "Rojo",
    Verde = "Verde",
}

interface Rectangulo {
    ancho: number,
    alto: number,
    color?: Color,
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo,
}

function area(r: Rectangulo): number{
    return r.alto * r.alto;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
    // En este punto this se refiere a "rect" de la anterior linea
    return this.color ? `Un rectangulo ${this.color}` : 'Un rectangulo sin color.';
}

console.log(rect.toString());