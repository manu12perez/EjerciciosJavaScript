var capa=document.getElementById("capa");

//El raton entra en la capa
//mouseenter -> El vento se realiza al mover el cursor dentro del elemento
capa.addEventListener ("mouseenter", (ev)=>{
    capa.style.backgroundColor = "pink";
});

//El raton sale de la capa
capa.addEventListener ("mouseleave", (ev)=>{
    capa.style.backgroundColor = "white";
});

//Se aprieta el boton sobre la capa
//mousedown -> El evento se realiza cuando el usuario pulsa el boton
capa.addEventListener ("mousedown", (ev)=>{
    //Propiedad button -> Si devuelve 0 = Boton principal; si devuelve 2 =boton secundario
    if(ev.button==0){
        capa.style.backgroundColor = "blue";
    }
    else if(ev.button==2){  
        capa.style.backgroundColor = "yellow";
    }
});

//Se suelta el boton sobre la capa
//mouseup -> El evento se realiza cuando el usuario suelta el boton
capa.addEventListener ("mouseup", (ev)=>{
    capa.style.backgroundColor = "transparent";
});

//preventDeafult -> metodo que hace que no se produzca el comportamiento por defecto
//contextmenu -> Se produce cuando el usuario pide el menu contextual (boton derecho)
capa.addEventListener("contextmenu",(ev)=>{
    ev.preventDefault();
});