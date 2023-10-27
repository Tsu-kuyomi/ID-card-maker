document.getElementById('fileInput').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        let content = e.target.result;

        // Remove carriage return characters "\r" from the content
        content = content.replace(/\r/g, '');

        const lines = content.split('\n');
        const cardContainer = document.getElementById('card-container');

        // Create the card elements for each line
        lines.forEach(line => {
            const [id, name, age, role, sex, Animeverse] = line.split(',');

            // Create a new card div
            const cardDiv = document.createElement('div');
            cardDiv.id = 'card';

            // Create the elements for the card
            cardDiv.innerHTML = `
                <h2 id="company-name">Anime Comunity</h2>
                <h5 id="sub-info">The Goat Faction</h5>
                <div id="img-holder">
                    <img src="/pics/${name}.png" alt="">
                </div>
                <h2 id="name-holder">${name}</h2>
                <h5 id="title-holder">${role}</h5>
                <div id="info-holder">
                    <div id="id-slot">
                        <h2 id="id-slot-main">ID</h2>
                        <h2 id="id-slot-info">:${id}</h2>
                    </div>
                    <div id="name-slot">
                        <h2 id="name-slot-main">Sex</h2>
                        <h2 id="name-slot-info">:${sex}</h2>
                    </div>
                    <div id="age-slot">
                        <h2 id="age-slot-main">Age</h2>
                        <h2 id="age-slot-info">:${age}</h2>
                    </div>
                    <div id="class-slot">
                        <h2 id="class-slot-main">Animeverse</h2>
                        <h2 id="class-slot-info">:${Animeverse}</h2>
                    </div>
                </div>
            `;

            // Append the card to the cardContainer div
            cardContainer.appendChild(cardDiv);
        });
    };

    reader.readAsText(file);
});