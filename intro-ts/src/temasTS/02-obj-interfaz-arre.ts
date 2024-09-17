
//Creacion de una interfaz en  typescript, funciona parecido a una clase
interface Alumno{
    nombre:string;
    apellido:string;
    email:string;
    edad:number;
    //dato opcional de una clase para generar objetos
    nota?:number;
}

//Creacion de un objeto  a partir de la interfaz
const alumno:Alumno={
    nombre: 'Mario',
    edad: 20,
    email: 'mario@gmail.com',
    apellido: "Martinez",
    
}
console.table(alumno)

//arreglos

let mascotas=['perro','gato','perico']

console.log(mascotas)

mascotas.push('pajaro')

//asignar tipos de datos permitidos para el arreglo

let tem:(number|string)[]=[];
tem.push(11)
tem.push('Once')
console.log(tem)