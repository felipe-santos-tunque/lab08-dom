class Herramientas{
    constructor(tipo, costo){
        this.tipo=tipo;
        this.costo=costo;
    }
    mostrarInfo(){
        return this.tipo + "cuesta: S/."+this.costo.toFixed(2);
    }
}

const destornillador = new Herramientas("Destornillador",100);
const alicate = new Herramientas("Alicate",50);
