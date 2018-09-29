/*  Universidad Cenfotec
    Maestria en Ciberseguridad
    Creado por: izamora@ucenfotec.ac.cr
    Ejemplo 8.2: Pipe Streams
*/

//var fs = require("fs");
// Create a readable stream
//var readerStream = fs.createReadStream('a-wing.txt');
// Create a writable stream
//var writerStream = fs.createWriteStream('j-type-327.txt');
// Se lee input.txt y se agrega la data a output.txt
//readerStream.pipe(writerStream);*/

// Salvar el pipe TODO.
// Ejericio: trate de salvar el texto en un nuevo archivo

var fs = require("fs");

var readerStream1 = fs.createReadStream('a-wing.txt');
var readerStream2 = fs.createReadStream('j-type-327.txt');
console.log("Saved with pipe");
var EndFile = fs.createWriteStream('Pipe.txt');
readerStream1.pipe(EndFile);
readerStream2.pipe(EndFile);
