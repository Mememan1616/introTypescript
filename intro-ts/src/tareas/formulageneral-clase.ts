
class FormulaGeneral{
    protected a:number;
    protected b:number;
    protected c:number;
    constructor(a:number,b:number,c:number){
        this.a=a;
        this.b=b;
        this.c=c;
        
    }
    resolver(){
        
        let x1= (-this.b+Math.pow((Math.pow(this.b,2))-(4*this.a*this.c),1/2))/(2*this.a);
        let x2= (-this.b-Math.pow((Math.pow(this.b,2))-(4*this.a*this.c),1/2))/(2*this.a);
        console.log(`El valor de x1=${x1} y el valor de x2=${x2}`);
       
    }    
     

}

const ecuacion=new FormulaGeneral(1,3,-28)
ecuacion.resolver()

