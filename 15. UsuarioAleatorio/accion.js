var main = document.querySelector("main");
const url = 'https://randomuser.me/api/';
    
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            let datos = data.results[0];
            let foto = datos.picture.large;
            let mail = datos.email;
            let nombre = datos.name.first;
            let apellido = datos.name.last;
            let calle = datos.location.street.name;
            let ciudad = datos.location.city;
            let estado = datos.location.state;
            main.innerHTML = 
            `<figure>` + 
            `<img src='${foto}' alt='foto'>` + `</figure>` + 
            `<p> ${nombre} ${apellido} </p>` + 
            `<p> Email: ${mail} </p>` +
            `<p> Calle: ${calle} </p>` +
            `<p>${ciudad} (${estado.toUpperCase()})</p>`;
        })
        .catch(error => {
            main.innerHTML = `<p class='error'> ${error} </p>`;
        });
    