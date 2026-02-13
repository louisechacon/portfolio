const temaBtn = document.getElementById('tema-btn');

temaBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        temaBtn.classList.remove('fa-regular', 'fa-moon');
        temaBtn.classList.add('fa-solid', 'fa-sun');
    } else {
        temaBtn.classList.remove('fa-solid', 'fa-sun');
        temaBtn.classList.add('fa-regular', 'fa-moon');
    }
});