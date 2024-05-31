document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const scriptButton = document.getElementById('script-btn');
    const discordButton = document.getElementById('discord-btn');
    const mainHeading = document.getElementById('main-heading');
    const description = document.getElementById('description');

    // Customize these variables
    const scriptURL = 'https://example.com/script';
    const discordURL = 'https://discord.com/invite/example';
    const headingText = 'Welcome to My Awesome Site';
    const descriptionText = 'Explore amazing content and connect with us!';

    // Apply customizations
    mainHeading.textContent = headingText;
    description.textContent = descriptionText;

    // Add event listeners for buttons
    scriptButton.addEventListener('click', () => {
        window.location.href = scriptURL;
    });

    discordButton.addEventListener('click', () => {
        window.location.href = discordURL;
    });
});
