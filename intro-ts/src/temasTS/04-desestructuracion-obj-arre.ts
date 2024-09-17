interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;

}

interface Detalles{
    artista:string;
    genero:string;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:'Levels',
    detalles: {
        artista:'Avicii',
        genero:'Electronica'
    },


}

console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`Los segundos son : ${reproductor.segundo}`);
console.log(`La cancion es : ${reproductor.cancion}`);
console.log(`El artista es : ${reproductor.detalles.artista}`);
console.log(`El genero es : ${reproductor.detalles.genero}`);

//desestructuracion del objeto
const{volumen, segundo, cancion, detalles}=reproductor
const{artista,genero}=detalles

console.log('--------------------------------------------------------------')
console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundos son : ${segundo}`);
console.log(`La cancion es : ${cancion}`);
console.log(`El artista es : ${artista}`);
console.log(`El genero es : ${genero}`);

const dbz:string[]=['Goku','MajinBuu','Cell','Freezer']
console.log(`Los personajes de Dragon Ball Z son :
            ${dbz.join(',')}`);

console.log('--------------------------')
console.log(`Personaje 1: ${dbz[0]}`);
console.log(`Personaje 2: ${dbz[1]}`);
console.log(`Personaje 3: ${dbz[2]}`);
console.log(`Personaje 4: ${dbz[3]}`);

console.log('--------------------------')
//desestructuracion del arreglo

const[a,b,c]=dbz

console.log(`Personaje 1: ${a}`)

console.log(`Personajes son: ${a} , ${b} , ${c}`)