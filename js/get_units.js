window.addEventListener
('DOMContentLoaded', () => 
{
    fetch('./assets/Units.json').then((response) => response.json()).then((data) => console.log(data)).then(() => alert('JSON file succesfully obtained'))
})

