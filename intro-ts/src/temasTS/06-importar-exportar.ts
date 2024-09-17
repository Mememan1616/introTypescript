import{calcularIVA2, Producto} from "./05-desestructuracion-funciones";

const carrito:Producto[]=[

    {
        nombre:'Telefono1',
        precio:100

    },

    {
        nombre:'Telefono2',
        precio:200

    },

    {
        nombre:'Telefono3',
        precio:300

    },
]

const[total , iva2]=calcularIVA2(carrito)
console.log(total,iva2);