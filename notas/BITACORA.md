# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)
 
## Ejercicio 2: Seleccionar y modificar el DOM
| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde app.js | Cambio el texto de h1|No |
| style.color |El color del texto h1 |Sí |

## Ejercicio 3: Evento click
| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click |Hacer un click sobre el boton |suma 1 |
| dblclick |Hacer doble click |Suma 1 |
| mouseover | Pasar el mouse sobre el boton|Suma 1 |
Para el caso de click mostro:
```js
click <button id=​"btnSumar">​Sumar 1​</button>​
```
Para el caso de dobleclick mostro:
```js
dblclick <button id=​"btnSumar">​Sumar 1​</button>​
```

Para el caso de mouseover mostro:
```js
mouseover <button id=​"btnSumar">​Sumar 1​</button>​

```

## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre |La pantalla mostro lo que estaba escribiendo en tiempo real |No |
| Enviar sin preventDefault |Se envio el texto escrito sin verificar |Sí |
| Enviar con preventDefault, correo sin @ |Mostro un mensaje en color rojo advirtiendo sobre el error |No |
| Enviar con preventDefault, correo con @ |Muestra el mensaje de corre enviado |No |


## Ejercicio 5: Clases y objetos
| Objeto | nombre | precio | conDescuento(0.25) |
|--------|--------|--------|--------------------|
| laptop |Laptop |2500 |1875 |
| mouse | Mouse|45 |33.75 |
| teclado |Teclado |120 |90 |
