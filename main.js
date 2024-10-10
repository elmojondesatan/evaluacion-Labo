import { padre } from "./Componente/componente_1/componente_1.js";



let DOM = document.querySelector("#root");


let componentes_1 = document.createElement('div');
componentes_1.className = "componentes1";
componentes_1.appendChild(padre);
DOM.appendChild(componentes_1);


let componentes_2 = document.createElement('div');
componentes_2.className = "componentes2";
DOM.appendChild(componentes_2);


let componentes_3 = document.createElement('div');
componentes_3.className = "componentes3";
DOM.appendChild(componentes_3);


