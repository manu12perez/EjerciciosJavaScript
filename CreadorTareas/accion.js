/*
    prepararBorrar
    prepararLista
    actualizarLsta
    anadirTarea
*/
var listaTareas = new Set();
var btMas = document.getElementById("mas");
var tTarea = document.getElementById("tarea");
var uLista  = document.getElementById("lista");

/*
 *Realiza todas las acciones necesarias para añadir la tarea y que se vea en la lista
 */
function anadirTarea(nuevaTarea){
    //buscamos si la tarea existe, si no, la añadimos
    if(listaTareas.has(nuevaTarea) == false){
        //almacenamos la nueva tarea en la lista
        listaTareas.add(nuevaTarea);
        actualizarLista();
        //creamos el nuevo elemento con la tarea
        let liNuevo = document.createElement("li");
        liNuevo.innerHTML = `<span> ${nuevaTarea} </span>` + `<button> Eliminar </button>`;
        //preparamos el evento en el boton 
        prepararBorrar(liNuevo);
        //Ahora la colocamos en su posicion idonea
        //hay que buscar cual es
        if(uLista.children.length>0){
            //comprobamos que el elemento actual siga siendo menor alfabeticamente
            //y de no ser asi, añadimos el nuevoelemento delante del actual
            for(let li of uLista.children){
                let contenidoLi = li.querySelector("span").textContent;
                if(contenidoLi.localeCompare(nuevaTarea, "es")>0){
                uLista.insertBefore(liNuevo, li);
                return; //abandonamos la funcion
                }
            }
        }
        //tanto en caso de que la lista este vacia como en el de que sea el ultimo elemento
        //lo añadimos
        uLista.appendChild(liNuevo)
    }
}
function prepararBorrar(liTarea){
    let boton = liTarea.querySelector("button");
    boton.addEventListener("click",(ev)=>{
        //target--> objeto al que se le aplica el evento
        let textoLista = ev.target.parentNode.querySelector("span").textContent;
        //borramos el elemento de la lista
        uLista.removeChild(ev.target.parentNode);
        listaTareas.delete(textoLista);
        actualizarLista();
    })
}
/*
 *Muestra el contenido de la lista de tareas en forma de lista ordenada
 */
function prepararLista(arrayTareas){
    //recorremos el set y mostramos la lista
    for(let textoLi of arrayTareas){
        let liNuevo = document.createElement("li");
        liNuevo.innerHTML = `<span> ${textoLi} </span>` + `<button> Eliminar </button>`;
        prepararBorrar(liNuevo);
        uLista.appendChild(liNuevo);
    }
}
/*
 * Pone el LocaleStorage al dia
 */
function actualizarLista(){
    localStorage.setItem("listaTareas",JSON.stringify([...listaTareas]));
}

/*
 *CODIGO PRINCIPAL
 */
//Lectura del array de tareas en el LocalStorage
if(localStorage.getItem("listaTareas")){
    //leemos el array de tareas
    let arrayTareas = JSON.parse(localStorage.getItem("listaTareas"));
    prepararLista(arrayTareas);
    //convertimos el array en una estructura de tipo set
    listaTareas = new Set(arrayTareas);
}

//Evento añadir tarea
btMas.addEventListener("click", (ev)=> {
    ev.preventDefault();
    anadirTarea(tTarea.value);
    tTarea.value = "";
    tTarea.focus();
});