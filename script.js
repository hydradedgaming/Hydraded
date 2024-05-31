function redirectTo(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'url1.jpg',
        'url2.jpg',
        'url3.jpg'
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url(${randomImage})`;

    const customLabel = document.getElementById('custom-label');
    const customLabelText = 'This is a customizable label';
    const customLabelColor = '#190FDC';

    customLabel.textContent = customLabelText;
    customLabel.style.backgroundColor = customLabelColor;
});
