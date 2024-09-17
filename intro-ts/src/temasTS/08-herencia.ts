
class Persona3{
    protected nombre:string;
    protected edad:number;
    protected direccion:string;
    constructor(nombre:string,edad:number,direccion:string){
        this.nombre=nombre;
        this.edad=edad;
        this.direccion=direccion;

    }
    mostrarPersona(){

        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Direccion: ${this.direccion}`);
    }
}

class Empleado extends Persona3{

    private salario:number;
    constructor(nombre:string, edad:number, direccion:string, salario:number){
        //usando super mandamos a llmar los parametros de la clase padre
        super(nombre, edad, direccion);
        this.salario=salario;
    }
    imprimir(){
        if(this.salario>5000)
            console.log(`${this.nombre} no debe de pagar impuestos`)
        else
        console.log(`${this.nombre} no debe pagar impuestos`)
    }
}

const persona3=new Persona3('Juan',20,'Lomas');
persona3.mostrarPersona();

const empleado= new Empleado('Alex',20,'Lomas',4000);
empleado.imprimir();