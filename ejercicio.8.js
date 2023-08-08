/*
    Programa una función que elimine cierto patrón de caracteres de un texto dado, 
    pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/



const eliminarPatron = (text="", patron=undefined) => {
    
    if (!text) return console.warn("Ingresa una palabra wachin");
    if (patron === undefined) return console.warn("Ingresa una patron a ser eliminado");

    textoMejorado = text.split(patron).join("")

    return console.info(textoMejorado);
}

console.info("EJERCICIO 8");
eliminarPatron();
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");