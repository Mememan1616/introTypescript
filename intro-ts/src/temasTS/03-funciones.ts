function sumar(a: number , b: number):number {
    return a+b;
}

const resultado=sumar(4,5)

console.log(resultado)

function multiplicar(a: number , b:number):number{
    return a*b;
}

const multi=multiplicar(5,10)

console.log(multi)

//Creo mi interfaz
interface Mascota{
    nombre:string;
    edad:number;
    //defino que la interfaz tendra una funcion
    mostrarEdad:()=>void;

}
//Creo una nueva funcion en la cual ejecutar todo
function calcular (mascotas:Mascota,x:number):void{
    mascotas.edad+=x;
    console.log(mascotas.mostrarEdad());

}

//Creo el objeto con los parametros
const nuevaMascota:Mascota={
    nombre:"Fido",
    edad:4,
    //Definimos la funcion creando sus paramatros y acciones que realizara
    mostrarEdad(){
        //imprime en consola el string y ciertos parametros del objeto
        console.log(`La edad de ${this.nombre} es ${this.edad}`)
    },
}

//Mando a llamar la funcion
calcular(nuevaMascota,3)


