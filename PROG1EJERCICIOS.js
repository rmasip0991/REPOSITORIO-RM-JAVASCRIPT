//DATOS Y VARIABLES

//Ejercicio 1: Añadir en variables JS los siguientes datos: nombre, apellido1, apellido2, edad, 
//dirección y dni y mostrar una frase formateada con toda la información.

var nombre = "Ricardo"

var apellido1 = "Masip"

var apellido2 = "Candil"

var edad = "32"

var dni = "53336678S"

console.log(
    nombre +" "+ apellido1 +" "+ apellido2 +" "+ edad +" "+ dni
);


console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");



//Ejercicio 2: Rehacer el ejercicio 1 pero definiendo de base la información en un array.

var datos_personales = ["nombre","apellido2","apellido2","edad","dni"]
console.log(datos_personales);
datos_personales[0] = "ricardo";
datos_personales[1] = "masip";
datos_personales[2] = "candil";
datos_personales[3] = "32";
datos_personales[4] = "53336678S"
console.log(datos_personales);

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//OPERADORES Y EXPRESIONES

//Ejercicio 1: Dadas las variables de tipo entero con valores A = 5, B = 3, C = -12 
//indicar si la evaluación de estas expresiones daría como resultado verdadero o falso:
// Crea un script donde declares estas variables, les asignes valores y muestren por pantalla 
//el valor de verdad que tienen cada una de las expresiones antes indicadas. 
//¿Coincide lo que se muestra con pantalla con lo que tú esperarías que se mostrará?


var A = 5;

var B = 3;

var C = -12;

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//a) A > 3        
console.log( A > 3);
//b) A > C          
console.log(A > C);                 	            	
//c) A < C
console.log(A < C);
//d) B < C         
console.log(B < C);                   	            	        	
//e) B != C        
console.log(B != 3);              	 	         	
//f) A == 3
console.log(A == 3);
//g) A * B == 15  
console.log(A * B == 15);  	                           	
//h) A * B == -30
console.log(A * B == -30);                        	
//i) C / B < A
console.log(C / B < A);
//j) C / B == -10
console.log(C / B == -10);               	                         	  
//k) C / B == -4   
console.log(C / B == -4);     	                    
//l) A + B + C == 5
console.log(A + B + C == 5);
//m) (A+B == 8) && (A-B == 2) 
console.log((A+B == 8) && (A-B == 2));                  	
//n) (A+B == 8) || (A-B == 6)
console.log((A+B == 8) || (A-B == 6));
//o) A > 3 && B > 3 && C < 3 
console.log(A > 3 && B > 3 && C < 3);                      	
//p) A > 3 && B >= 3 && C < -3
console.log(A > 3 && B >= 3 && C < -3);

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");


// IF & ELSE

//Ejercicio 1 -> Introducir el color del semáforo y mostrar si puede pasar, extremar la precaución o no pasar.
var color = "VERDE";

color = color.toLowerCase(); // Convierte el string en minuscula

if (color == "rojo") {
  console.log("NO PASAR");
} else if (color == "ambar") {
  console.log("PRECAUCION");
} else if (color == "verde") {
  console.log("PUEDES PASAR");
} else {
  console.log("NO ENTIENDO ESE COLOR!!!");
}

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//Ejercicio 2 -> Mostrar si un número es par o impar

var numero = 36;


if (numero%2 == 0) {
  console.log(numero + " es par");
} else {
  console.log(numero + " es impar");
}

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//Ejercicio 3 -> Introducir 3 números. Indicar si el tercero es la suma de los dos primeros o no.

var n1 = 12;
var n2 = 4;
var n3 = -10;

var suma_n1_n2 = n1 + n2;

if (n3 == suma_n1_n2) {
  console.log(n3 +  " es la suma de " + n1 + " y " + n2);
} else {
  console.log(n3 + " NO es la suma de " + n1 + " y " + n2);
}


console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//Ejercicio 4 -> Introducir un precio a pagar y el dinero disponible y mostrar 
//si le falta dinero, indicarle cuanto, si le sobra indicar cuánto y si esta 
//justo mostrar gracias por la compra

var recibo = 500;

var saldo = 600;

if (recibo > saldo) {
    console.log("falta a pagar " + (recibo - saldo));
  } else if (recibo == saldo) {
    console.log("gracias por su compra");
  } else if(recibo < saldo){
    console.log("su cambio es de " + (saldo - recibo));
  }

  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//Ejercicio 5 -> Introducir 3 números. Ordenar descendentemente.

var num1 = 56;

var num2 = 85;

var num3 = 108

var a = num1;

var b = num2;

var c = num3;



 
if (num1 > num2 && num1 > num3 )
a = num1;
if (num1 < num2 && num1 > num3 )
b = num1;
if (num1 < num2 && num1 < num3 )
c = num1;



if (num2 > num1 && num2 > num3 )
a = num2;
if (num2 < num1 && num2 > num3 )
b = num2;
if (num2 < num1 && num2 < num3 )
c = num2;


if (num3 > num2 && num3 > num1 )
a = num3;
if (num3 < num2 && num3 > num1 )
b = num3;
if (num3 < num2 && num3 < num1 )
c = num3;

console.log("El orden de mayor a menor es el siguiente: " + " "
+ a + " " + b + " " + c + ".");

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//Ejercicio 6 -> Comprobar la letra del DNI:
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

console.log(letras[53336688%23]);


console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");


//Ejercicio 7 -> Introducir día, mes, año. Comprobar que sean correctos.

var dia = 31;
var mes = 02;
var anio = 2022;


if (dia <= 0 || dia > 31) {
    console.log("La fecha es inválida.");
    
}
if (mes <= 0 || mes > 12) {
    console.log("La fecha es inválida.");
    
}
if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
    console.log("La fecha es inválida.");
    
}
if (mes == 2) {
    if (dia > 29) {
        console.log("La fecha es inválida.");
     
    }
    if (dia > 28 && (anio % 4 != 0 || (anio % 100 == 0 && anio % 400 != 0))) {
        console.log("La fecha es inválida.");
        
    }
}


console.log("La fecha es válida.");



console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//Ejercicio 8 -> Introducir segundos. Mostrar horas, minutos y segundos.

var segundos = 7256;

var horas = (segundos - (segundos % 3600)) / 3600;
var minutos = ((segundos % 3600) - ((segundos % 3600) % 60)) / 60;
var sobraSegundos = segundos % 60;

console.log(`${horas} horas, ${minutos} minutos y ${sobraSegundos} segundos`); 

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

// SWITCH

//Ejercicio 1: Preguntar el número del día de la semana. Mostrar que dia es.
//Ejemplo: 1 -> Lunes
 
var dia = "1";

switch(dia) {
    case "1":
        console.log("Lunes");
        break;
    case "2":
        console.log("Martes");
        break;
    case "3":
        console.log("Miércoles");
        break;
    case "4":
        console.log("Jueves");
        break;
    case "5":
        console.log("Viernes");
        break;
    case "6":
        console.log("Sábado");
        break;
    case "7":
        console.log("Domingo");
        break;
    default:
        console.log("Ingresa un número entre 1 y 7");

}

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//Ejercicio 2: Ampliar el ejercicio 1 para que acepte mes y día.
//Ejemplo: 1 1 -> Lunes de Enero

var dia = "1";
var mes = "1";


switch(mes) {
    case "1":
        switch(dia){
            case "1":
                console.log("lunes 1 de Enero");
                break;
            case "2":
                console.log("martes 2 de Enero");
                break;
            //...
            case "31":

                console.log("jueves 31 de Enero");
                break;
            default:
                console.log("Ingresa un día válido para Enero");
            }
        }
        

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
 
//Ejercicio 3: Preguntar la edad. En función de esta mostrar:
        	//- Si tiene 0 -> Acabas de nacer
        	//- Si tiene más de 0 y menos de 18 -> Eres menor de edad
        	//- Si tiene 18 o más y menos de 65 -> Eres mayor de edad
        	//- Si tiene más de 65 -> Ya puedes jubilarte.

var edad = 25;

switch(true){
    case edad == 0:
        console.log("Acabas de nacer");
        break;
    case edad < 18:
        console.log("Eres menor de edad");
        break;
    case edad >= 18 && edad < 65:
        console.log("Eres mayor de edad");
        break;
    case edad >= 65:
        console.log("Ya puedes jubilarte");
        break;
}

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//Ejercicio 4: Consulta del médico. Preguntar al usuario si tiene dolor de cabeza, tos o ninguno de los anteriores.
 
//-   	Si tiene dolores de cabeza preguntar si tiene problemas estomacales. Si los tiene mostrar que ha de tomar paracetamol, sino aspirina.
//-   	Si tiene tos preguntar cuántos años tiene, si es menos de 12 mostrar que debe tomar caramelos de miel, sino de eucalipto.
//-   	Si no tiene ninguno de los síntomas anteriores mostrar que tiene que acudir a la consulta.

var sintoma = "dolor de cabeza";

switch(sintoma){
    case "dolor de cabeza":
        var estomacal = "no";
        if(estomacal === "si"){
            console.log("Debes tomar paracetamol");
        } else {
            console.log("Debes tomar aspirina");
        }
        break;
    case "tos":
        var edad = "18";
        if(edad < 12){
            console.log("Debes tomar caramelos de miel");
        } else {
            console.log("Debes tomar caramelos de eucalipto");
        }
        break;
    case "ninguno de los anteriores":
        console.log("Debes acudir a la consulta");
        break;
    default:
        console.log("Opción no válida");
}
 
console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//Ejercicio 5: Preguntar al usuario en qué planta se encuentra: 0, 1, 2. 
//A continuación preguntarle cuántos pisos quiere subir/bajar: 1 o 2. 
//Indicarle en qué planta está, teniendo en cuenta que solo hay 3 plantas.

var plantaActual = 0;
var pisos = 2;

plantaActual += pisos;

switch (plantaActual) {
    case 0:
        console.log("Te encuentras en la planta 0, es la planta más baja");
        break;
    case 1:
        console.log("Te encuentras en la planta 1");
        break;
    case 2:
        console.log("Te encuentras en la planta 2, es la planta más alta");
        break;
    default:
        console.log("Sólo hay 3 plantas, te encuentras en la planta " + (plantaActual < 0 ? 0 : 2));
}

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

// Ejercicio 1 -> Declarar una variable numérica. Mostrar todos los números pares en formato decreciente.
var numero = 20;
for (let i = numero; i > 0; i--) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

// Ejercicio 2 -> Declarar una variable numérica. 
// Después imprimir hasta ese número los números impares concatenado con el texto “es impar”.
let num = 20;

for (let i = 1; i < num; i++) {
  if (i % 2 != 0) {
    console.log(i + " es impar");
  }
}

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

// Ejercicio 3: Recrear la siguiente imagen.
let asterisco = "*";
for (let i = 0; i < 20; i++) {
  console.log(asterisco);
  asterisco += "*";
}

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

// Ejercicio 4 -> Crear un número e ir sumando ese número hasta que llegue a 100. 
// Mostrando su estado y viendo al final el número de veces que ha sido necesario sumar hasta llegar a 100.
let n = 20;
let limite = 100 / n;
let resultado = 0;
for (let i = 1; i <= limite; i++) {
  resultado += n;
  console.log(resultado);
}
console.log("Se ha sumado el numero " + limite + " veces");

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

// Ejercicio 1: Preguntarle al usuario cuántos números quiere introducir. 
// Almacenar esa cantidad de números aleatorios(1 al 10) en un array, y luego imprimir los números pares.

// Math.floor(Math.random() * 10 + 1)
var cant_numeros = 10;
var numeros_array = [];
// Math.floor: static method always rounds down and returns the largest integer less than or equal to a given number.
// Math.random() :static method returns a floating - point, pseudo - random number that's greater than or equal to 0 and less than 1
for (let i = 0; i < cant_numeros; i++) {
  numeros_array[i] = Math.floor(Math.random() * 10 + 1);
  // cant_numeros.push(Math.floor(Math.random() * 10 + 1));
}
console.log(numeros_array);

console.log("-------------------------------")
for (let i = 0; i < numeros_array.length; i++) {
  if (numeros_array[i] % 2 == 0) {
    console.log(numeros_array[i]);
  }
}
console.log("-------------------------------")
// Ejercicio 2: Programa que pide un numero al usuario y la potencia a la que lo quiere elevar y mostrar el resultado.
var base = 2;
var exp = 2;
var potencia = 1;

for (let i = 0; i < exp; i++) {
  potencia = potencia * base;
}
console.log(potencia);
console.log("-------------------------------")
// Ejercicio 3: Almacenar 10 números en un array e imprimir la suma de los últimos 5 valores ingresados.
var array = []
for (let i = 0; i < 10; i++) {
  array[i] = Math.floor(Math.random() * 10 + 1);
}
console.log(array);

var total = 0;
for (let i = 5; i < array.length; i++) {
  total += array[i]
}
console.log(total);

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");


// Ejercicio 4: Crear la tabla de multiplicar de 10 x 10.

// 10x0=0
// 10x1=10 ... 

for (let i = 0; i < 11; i++) {
  // console.log("10x"+i+"="+(10*i));
  console.log(`10x${i}=${10 * i}`);
}

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");


// Ejercicio 5: Comprobar si un número introducido por el usuario es primo o no.

var numero_ = 6;
var primo = true;

for (let i = 2; i < numero_; i++) {
  if (numero_ % i == 0) { // no es primo
    primo = false;
    break;
  }
}

if (primo) {
  console.log("Es primo");
} else {
  console.log("No es primo");
}

console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

// Almacenar los nombres de los compañeros
// de clase, y aleatoriamente devolver uno 
// de ellos.

const compis = ["DaniS", "Soliman", "Vlad", "Agus", "DaniG", "Mily", "Isra", "Armand", "Oscar"];

const cant_compis = compis.length;
const aleatorios = Math.floor(Math.random() * cant_compis);

console.log(compis[aleatorios]);
console.log("------------------------------");
// Calcular el factorial de un numero
var _numero = 20; // 120
var factorial = 1;
for(let i = _numero;  i >= 1; i--) {
  factorial = factorial * i;
  // factorial *= i;
}
console.log(factorial);



// triangulo

var _asterisco = "*";
var _espacio = " ";
var _triangulo = "";
var _mitad_triangulo = 40;
var _vuelta_linea = 1;

for(let y = 0; y < 20; y++) {
  for (let x = 0; x < 80; x++) {
    _triangulo += _espacio;
    for (let z = 0; z < _vuelta_linea; z++) {
      if (x === _mitad_triangulo-z) {
        _triangulo += _asterisco;
      }
    }
  }
  _vuelta_linea += 2;
  _triangulo += "\n";
}
console.log(_triangulo);

