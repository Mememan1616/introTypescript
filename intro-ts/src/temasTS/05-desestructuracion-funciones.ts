//con la palabra export se exporta una clase o una interfaz

export interface Producto{

    nombre:string;
    precio: number;

}

const telefono:Producto={
    nombre:'iPhone',
    precio: 1000
}

const tablet :Producto={
    nombre:'iPad',
    precio: 800
}

function calcularIVA(productos:Producto[]):number{
    let total=0;
    for (let producto of productos){
        total += producto.precio;
    }

    return total* 0.12;

}
 //-------------------------------------------------------------------------------
 //funcion desestruturada
const articulos1=[telefono,tablet];
const iva1=calcularIVA(articulos1)
console.log(`IVA: ${iva1}`);

export function calcularIVA2(productos:Producto[]):[number,number]{
    let total=0;
    for (let producto of productos){
        total += producto.precio;
    }

    return [total,total* 0.12];

}


const articulos2=[telefono,tablet];
const [total,iva2]=calcularIVA2(articulos1)
console.log(`Total: ${total}`);
console.log(`IVA: ${iva2}`);