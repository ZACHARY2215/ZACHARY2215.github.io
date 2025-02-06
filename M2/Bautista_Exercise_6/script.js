const catImage = document.getElementById('cat-image');
const button = document.querySelector('button');
const imageContainer = document.querySelector('.image-container');

async function getRandomCat() {
    try {
        button.disabled = true;
        imageContainer.classList.add('loading');
        
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        
        if (data && data.length > 0) {
            const img = new Image();
            img.onload = function() {
                catImage.src = this.src;
                catImage.alt = 'Random cat image';
                imageContainer.classList.remove('loading');
            };
            img.src = data[0].url;
        } else {
            throw new Error('No cat image found');
        }
    } catch (error) {
        console.error('Error fetching cat image:', error);
        catImage.src = '/placeholder.svg';
        catImage.alt = 'Error loading cat image';
        imageContainer.classList.remove('loading');
    } finally {
        button.disabled = false;
    }
}

// Load initial cat image
getRandomCat();