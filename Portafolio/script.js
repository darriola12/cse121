document.addEventListener('DOMContentLoaded', async function () {
    const changeLanguageButton = document.getElementById('changeLanguage');

    // Evento al hacer clic en el botón de cambiar idioma
    changeLanguageButton.addEventListener('click', async function () {
        const currentLanguage = document.documentElement.lang; // Obtener el idioma actual
        const newLanguage = (currentLanguage === 'es') ? 'en' : 'es'; // Alternar entre español e inglés

        try {
            const response = await fetch(`languages/${newLanguage}.json`);
            
            if (response.ok) {
                const data = await response.json();
                updateContent(data);
            } else {
                console.error('Error al cargar el archivo de idioma:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud de cambio de idioma:', error);
        }
    });

    function updateContent(data) {
        document.getElementById('about').innerHTML = data.about;
        document.getElementById('projects').innerHTML = data.projects;
        document.getElementById('studies').innerHTML = data.studies;
    }
});

let studies =
{
    school: "Universidad de Costa Rica",
    year: "2019",
    degree: "Administracion de empresas"
};
// document.querySelector("#school").textContent = studies.school;

const displayEducation = (places) => {
    
    places.foreach((place) => 
    {
        const article = document.createElement("article");
        const newh3 = document.createElement("h3");
        newh3.textContent = studies.degree;
        article.appendChild(newh3);
    })
};
const sort = fu


