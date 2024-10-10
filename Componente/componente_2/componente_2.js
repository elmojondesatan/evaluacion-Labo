let padre2 = document.createElement('section');
padre2.className = "padre-2";


let titulo = document.createElement('h1');
titulo.innerText = "Buscar";
padre2.appendChild(titulo);


let div = document.createElement('div');
div.className = "div-componentes";
padre2.appendChild(div);


let div2 = document.createElement('div');
div2.className = "div-boton";
div2.innerText = "Enviar";
padre2.appendChild(div2);


export {padre2}
