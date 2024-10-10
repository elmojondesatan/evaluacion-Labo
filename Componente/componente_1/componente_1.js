let padre = document.createElement('div');
padre.className = "com-1";


let titulo = document.createElement('h3');
titulo.innerText = "Componentes 1";
padre.appendChild(titulo);


let imagen = document.createElement('img');
imagen.className = "imagen-1";

imagen.src = "https://es.mypet.com/wp-content/uploads/sites/23/2021/03/GettyImages-623368750-e1582816063521-1.jpg";
padre.appendChild(imagen);




export {padre}