let favoriteImages = [];

export function displayDogPics(images) {
    const dogPicsSection = document.getElementById('dogPics');
    dogPicsSection.innerHTML = '';

    images.forEach(image => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'dog-pic-container';

        const img = document.createElement('img');
        img.src = image.url;
        img.alt = 'Dog';

        const favoriteIcon = document.createElement('span');
        favoriteIcon.className = 'favorite-icon';
        favoriteIcon.dataset.imageId = image.id;
        favoriteIcon.innerHTML = '★'; 

        imgContainer.appendChild(favoriteIcon);
        imgContainer.appendChild(img);

        dogPicsSection.appendChild(imgContainer);

        favoriteIcon.addEventListener('click', () => {
            const selectedImage = images.find(img => img.id === image.id);
            favoriteImages.push(selectedImage);

            displayFavoriteDogPics(favoriteImages);
        });
    });
}

export function displayBreedInfo(breedInfo) {
    const infoSection = document.getElementById('breedInfo');
    infoSection.innerHTML = `
        <h2>About Breed</h2>
        <p><strong>ID:</strong> ${breedInfo.id}</p>
        <p><strong>Name:</strong> ${breedInfo.name}</p>
        <p><strong>Temperament:</strong> ${breedInfo.temperament}</p>
        <p><strong>Origin:</strong> ${breedInfo.origin}</p>
        <p><strong>Life Span:</strong> ${breedInfo.life_span}</p>
    `;
}

export function populateBreedDropdown(breeds) {
    const breedDropdown = document.getElementById('breedDropdown');
    
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedDropdown.appendChild(option);
    });
}

export function displayFavoriteDogPics(favoriteImages) {
    const favoriteSection = document.getElementById('favoritePics');
    favoriteSection.innerHTML = '';

    favoriteImages.forEach(image => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'dog-pic-container';

        const img = document.createElement('img');
        img.src = image.url;
        img.alt = 'Favorite Dog';

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Favorites';
        removeButton.addEventListener('click', () => removeFavorite(image.id));

        imgContainer.appendChild(img);
        imgContainer.appendChild(removeButton);

        favoriteSection.appendChild(imgContainer);
    });
}

function removeFavorite(imageId) {
    const index = favoriteImages.findIndex(image => image.id === imageId);

    if (index !== -1) {
        favoriteImages.splice(index, 1);
        displayFavoriteDogPics(favoriteImages);
    }
}