document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('#menu a');
    const pages = document.querySelectorAll('.page');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = event.target.getAttribute('data-page');

            pages.forEach(p => p.classList.remove('active'));
            document.getElementById(page).classList.add('active');
        });
    });

    // Mostrar a página inicial por padrão
    document.getElementById('home').classList.add('active');
});
