
class Areafiguras{

    rectanguloarea(base:number, altura:number):number{
        let area=(base*altura);
        console.log(`El area del rectangulo son ${area} unidades cuadradas`);
        return area;

    }

    circuloarea(radio:number):number{
        let area=(3.1416*Math.pow(radio,2));
        console.log(`El area del circulo son ${area} unidades cuadradas`);
        return area;
        

    }

    trianguloarea(base:number, altura:number):number{
        let area=(base*altura)/2;
        console.log(`El area del triangulo son ${area} unidades cuadradas`)
        return area;
    }


}

class VolumenFiguras extends Areafiguras{

    volumencilindro(radio:number, altura:number):number{
        let areabase=this.circuloarea(radio);
        let volumen=areabase*altura;
        console.log(`El volumen del cilindro ${volumen} unidades cubicas`)
        return volumen;
    }

    volumprismaR(lado1:number,lado2:number, altura:number):number{
        let areabase=this.rectanguloarea(lado1,lado2);
        let volumen=areabase*altura;
        console.log(`El volumen del prisma rectangular son ${volumen} unidades cubicas`)
        return volumen;
    }

    volumenprismaT(baseT:number,alturaT:number, altura:number):number{
        let areabase=this.trianguloarea(baseT,alturaT);
        let volumen=areabase*altura;
        console.log(`El volumen del prisma triangular son ${volumen} unidades cubicas`)
        return volumen;
    }

    
}


const areas= new Areafiguras()
areas.rectanguloarea(2,4);
areas.circuloarea(3);
areas.trianguloarea(2,4);

const volumen=new VolumenFiguras()
volumen.volumencilindro(3,5);
volumen.volumprismaR(2,4,5);
volumen.volumprismaR(2,4,5)