// Tämä varmistaa, että koodi suoritetaan vasta kun koko html sivu on ladattu    
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('treeni-form'); // viittaa lomakkeeseen, johon käyttäjä syöttää tiedot
    const summaryBody = document.getElementById('summary-body'); // viittaa taulukkoon, johon tiedot syötetään
    const errorMessage = document.getElementById('error-message'); // näyttää mahdolliset virheilmoitukset
    const clearButton = document.getElementById('tyhjenna'); // viittaa tyhjennä-nappiin
    let data = JSON.parse(localStorage.getItem('treeniData')) || []; // haetaan tallennetut tiedot localStoragesta

    // Näytetään tallennetut tiedot
    renderTable();

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        errorMessage.textContent = ''; // Nollataan virheilmoitus

        // Haetaan lomakkeen arvot
        const activity = document.getElementById('activity').value;
        const hours = parseFloat(document.getElementById('hours').value);
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;

        // Tarkistetaan virheet
        if (isNaN(hours) || hours <= 0 || !date) {
            errorMessage.textContent = 'Syötä kelvollinen tuntimäärä ja päivämäärä.';
            return;
        }

        // Tarkistetaan, että vuoden tulee olla suurempi kuin 2000
        const dateObj = new Date(date);
        const year = dateObj.getFullYear();
        const currentYear = new Date().getFullYear();
        if (year <= 1999 || year > currentYear || year.toString().length !== 4) {
            errorMessage.textContent = 'Vuoden tulee olla suurempi kuin 2000 tai meneillään oleva vuosi.';
            return;
        }

        // Tallennetaan tiedot
        const entry = { activity, hours, description, date };
        data.push(entry);
        localStorage.setItem('treeniData', JSON.stringify(data));
 
        // Päivitetään taulukko
        renderTable();

        // Tyhjennetään lomake
        form.reset();
    });

    // Funktio taulukon päivittämiseen
    function renderTable() {
        summaryBody.innerHTML = ''; // Tyhjennetään taulukko
        let categorySummary = {};
        let totalHours = 0;

        data.forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.activity}</td>
                <td>${entry.hours}</td>
                <td>${entry.description}</td>
                <td>${entry.date}</td>
            `;
            summaryBody.appendChild(row);

            // Lasketaan tunteja kategorioittain
            if (!categorySummary[entry.activity]) {
                categorySummary[entry.activity] = 0;
            }
            categorySummary[entry.activity] += entry.hours;
            totalHours += entry.hours;
        });

        // Päivitetään kategorioiden yhteenvedot
        const categorySummaryDiv = document.getElementById('category-summary');
        categorySummaryDiv.innerHTML = '<h3>Tunnit kategorioittain:</h3>';
        for (let category in categorySummary) {
            const percentage = ((categorySummary[category] / totalHours) * 100).toFixed(2);
            categorySummaryDiv.innerHTML += `<p>${category}: ${categorySummary[category]} tuntia (${percentage}%)</p>`;
        }
    }

    // Tyhjennä tiedot ja päivitä taulukko
    clearButton.addEventListener('click', function() {
        localStorage.clear();  // Tyhjennetään localStorage
        data = [];  // Tyhjennetään myös muistissa oleva data
        renderTable();  // Päivitetään taulukko, jolloin kaikki poistuu
        alert('Kaikki tiedot on tyhjennetty!');
    });
});
