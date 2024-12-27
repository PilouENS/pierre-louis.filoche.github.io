document.addEventListener('DOMContentLoaded', function() {
    // Ouvrir la popup
    document.querySelectorAll('.open-popup').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const popupId = this.getAttribute('data-popup');
            document.getElementById(popupId).style.display = 'flex';
        });
    });

    // Fermer la popup
    document.querySelectorAll('.close-popup').forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.popup').style.display = 'none';
        });
    });

    // Fermer la popup en cliquant en dehors du contenu
    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup')) {
            e.target.style.display = 'none';
        }
    });
});