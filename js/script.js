document.querySelectorAll('.level-toggle').forEach((toggleButton) => {
    toggleButton.addEventListener('click', () => {
        const descriptionBlock = toggleButton.closest('.level').querySelector('.level__description-block');

        if (descriptionBlock.style.display === 'none' || !descriptionBlock.style.display) {
            descriptionBlock.style.display = 'block';
        } else {
            descriptionBlock.style.display = 'none'
        }

        const icon = toggleButton.querySelector('i');
        if (icon.style.transform === 'rotate(180deg)') {
            icon.style.transform = 'rotate(0deg)';
        } else {
            icon.style.transform = 'rotate(180deg)';
        }
    });
}); 