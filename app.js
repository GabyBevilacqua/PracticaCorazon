/* 
Funciones a elaborar:

* animateByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* animateByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerdas que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

*/

/*
 Ejecutar el comando <' node app.js '> para ver el resultado del codigo

*/


 const asciiHeart = [
    " ⣠⣤⣶⣶⣦⣄   ⠀⢀⣤⣴⣶⣶⣤", 
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
]

const animateByChart = (ms) => {
    let currentIndex = 0;                                   // contador global para todos los caracteres 
    asciiHeart.forEach((linea, liIndex) => {            //para q recorra cada linea (liIndex queda nombrado pero no se esta usando, se puede poner cualquier nombre cuando esta sin uso)
        linea.split('').forEach((char, charIndex) => {    // .split para convertir cada linea en un array para q vayan uno a uno (charIndex queda nombrado pero no se esta usando, se puede poner cualquier nombre)
            setTimeout(() => {                            // char en el lugar que determina el string, puede ser cualquier nombre q escoja
                process.stdout.write(char);              // se usa para que no haya salto de linea porque lo ve como un objeto en cambio consol.log los imprimiria uno debajo del otro
            }, ms * currentIndex);                      // por el tiempo para el caracter entre caracter
            currentIndex++;                               // Incrementa el índice global para el siguiente carácter
        });
                                                // aqui esto para que siga la misma proporcion de tiempo que lleva entre caracteres pero para ir de linea a linea
       setTimeout(() => {
            console.log('');                             // aqui esto para hacer el salto de linea despues que termina cada una
       }, ms * currentIndex);
        currentIndex++;                                 // esto para que siga con las demas lineas hasta la ultima
   });
  };

/*
    let currentIndex = 0;                                   
    asciiHeart.forEach((linea, liIndex) => {            
        linea.split('').forEach((char, charIndex) => {     
            setTimeout(() => {                           
                process.stdout.write(char);
                if(charIndex === linea.split('').length -1){       tambien se puede poner asi y funciona igual
                    process.stdout.write('\n')                     if llega al final de la linea pasa a la siguiente con el mismo tiempo dado para los caract
                    }             
            }, ms * currentIndex);                      
            currentIndex++;                               
        })                                
   });
*/

const animateByLine = (ms) => {

 /*   asciiHeart.forEach((linea, index) => {                 tambien se puede poner asi y debe funcionar igual
        setTimeout(() => {                                   
            console.log(linea);  
        }, ms * index);  
    });
}; */
    for(let i = 0; i < asciiHeart.length; i++){            // para que lea cada linea como un todo (index) y pase a la siguiente
        setTimeout(() => {
            console.log(asciiHeart[i])}, ms * i);          // aqui si cons.log para que salte de linea a linea indicando i(index) y se multiplica el tiempo        
    }
}
   animateByChart(100)
   // animateByLine(500)
 
