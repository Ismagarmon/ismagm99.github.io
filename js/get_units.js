const getJSON = async function loadJSON() {

    const json = await fetch('./assets/Units.json')
    const loadjson = await json.json()

    return loadjson;

}

getJSON().then((unit) => {
    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerText = unit[0].Name

}
)
