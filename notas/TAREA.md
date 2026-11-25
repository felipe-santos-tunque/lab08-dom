# Tarea: Mi componente interactivo
 
## Componente elegido
 
## Codigo principal
```js
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
  li.textContent = h.mostrarInfo();
  const btnBorrar = document.createElement("button");
  btnBorrar.style.marginLeft = "20px";
btnBorrar.textContent = "Borrar";
btnBorrar.addEventListener("click", () => {
  li.remove();
});
li.appendChild(btnBorrar);

  listaHerramientas.appendChild(li);
});
```
## Pruebas realizadas
| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
|Botón borrar|Borrar el elemento|Sí|
|   Botón actualizar costo     |               Cambia el precio de la herramienta    |Sí                |

 
## Por que disene asi mi clase

Para poder cumplir con los requerimientos de la tarea