class Herramientas{
    constructor(tipo, costo){
        this.tipo=tipo;
        this.costo=costo;
    }
    mostrarInfo(){
        return this.tipo + " cuesta: S/."+this.costo.toFixed(2);
    }
}

const destornillador = new Herramientas("Destornillador",100);
const alicate = new Herramientas("Alicate",50);


const herramientas = [destornillador, alicate];
const listaHerramientas = document.querySelector("#herramientas");
 
herramientas.forEach((h) => {
    const li = document.createElement("li");
    const btnBorrar = document.createElement("button");
    btnBorrar.style.marginLeft = "20px";
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", () => {
    li.remove();
    });


   // Información
    const info = document.createElement("span");
    info.textContent = h.mostrarInfo();

    const inputPrecio = document.createElement("input");
    inputPrecio.type = "number";
    inputPrecio.style.marginLeft = "20px";
    inputPrecio.placeholder = "Nuevo precio";


    const btnActualizar = document.createElement("button");
    btnActualizar.textContent = "Actualizar";

    btnActualizar.addEventListener("click", () => {
        h.costo = parseFloat(inputPrecio.value);
        info.textContent = h.mostrarInfo();
    });


    
    li.appendChild(info);
    li.appendChild(btnBorrar);
    li.appendChild(inputPrecio);
    li.appendChild(btnActualizar);
    listaHerramientas.appendChild(li);
});