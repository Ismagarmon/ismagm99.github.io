window.addEventListener
    ('DOMContentLoaded', () => {
        alert('Se ha terminado de cargar la pagina')
    })

const getJSON = async function loadJSON() {

    const json = await fetch('./assets/Units.json')
    const loadjson = await json.json()

    return loadjson;

}

getJSON().then((unit) => {
    var h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = unit[0].Name
}
)
