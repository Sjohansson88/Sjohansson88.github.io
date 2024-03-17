document.addEventListener("DOMContentLoaded", function () {
    // Läs in JSON-data
    fetch('cv_data.json')
        .then(response => response.json())
        .then(data => {
            // Generera utbildningar
            const utbildningarDiv = document.getElementById('utbildningar');
            data.utbildningar.forEach(utbildning => {
                const utbildningElement = document.createElement('p');
                utbildningElement.textContent = `${utbildning.titel} (${utbildning.skola}) - ${utbildning.år}`;
                utbildningarDiv.appendChild(utbildningElement);
            });

            // Generera arbeten
            const jobbDiv = document.getElementById('arbeten');
            data.arbeten.forEach(arbete => { // Ändrat från data.tidigare_arbeten till data.arbeten
                const arbeteElement = document.createElement('p');
                arbeteElement.textContent = `${arbete.titel} (${arbete.företag}) - ${arbete.år}`;
                jobbDiv.appendChild(arbeteElement);
            });
        })
        .catch(error => console.error('Error:', error));
});