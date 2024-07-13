async function fetchNASAImageOfTheDay() {
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=PnJpYNWFNe9YNtwZW3VrrVXW30HBJa9en2sg9FtQ');
        const data = await response.json();
        const imageUrl = data.url;
        document.body.style.backgroundImage = `url(${imageUrl})`;
    } catch (error) {
        console.error('Error fetching NASA image:', error);
    }
}
fetchNASAImageOfTheDay();