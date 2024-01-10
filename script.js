import { fetchData, postData, putData, patchData } from './api.js';
import { displayDogPics, displayBreedInfo, populateBreedDropdown, displayFavoriteDogPics } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const breeds = await fetchData('breeds');

        populateBreedDropdown(breeds);

        let favoriteImages = [];
        
        let breedImages;

        const breedDropdown = document.getElementById('breedDropdown');
        breedDropdown.addEventListener('change', async () => {
            const selectedBreedId = breedDropdown.value;

            breedImages = await fetchData(`images/search?breed_ids=${selectedBreedId}`);
            displayDogPics(breedImages);

            const breedInfo = await fetchData(`breeds/${selectedBreedId}`);
            displayBreedInfo(breedInfo);
        });

        const dogPicsSection = document.getElementById('dogPics');
        dogPicsSection.addEventListener('click', (event) => {
            if (event.target.classList.contains('favorite-icon')) {
                const selectedImageId = event.target.dataset.imageId;

                const isAlreadyFavorite = favoriteImages.some(image => image.id === selectedImageId);

                if (!isAlreadyFavorite) {
                  
                    const selectedImage = breedImages.find(image => image.id === selectedImageId);

                    favoriteImages.push(selectedImage);
                } else {
                    removeFavorite(selectedImageId);
                }
                displayFavoriteDogPics(favoriteImages);
            }
        });

        const favoriteButton = document.getElementById('favoriteButton');
        favoriteButton.addEventListener('click', () => {
            displayFavoriteDogPics(favoriteImages);
        });
    } catch (error) {
        console.error('Error:', error);
    }
});

function removeFavorite(imageId) {
    const index = favoriteImages.findIndex(image => image.id === imageId);

    if (index !== -1) {
        favoriteImages.splice(index, 1);
    }
}
