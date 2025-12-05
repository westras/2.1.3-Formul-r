document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const overlay = document.getElementById('loginOverlay');
    const wholepage = document.querySelector('.wholepage');

    function openLogin() {
        overlay.classList.add('visible');
        wholepage.classList.add('blurred');
        document.body.style.overflow = 'hidden';
    }

    function closeLogin() {
        overlay.classList.remove('visible');
        wholepage.classList.remove('blurred');
        document.body.style.overflow = '';
    }

    
    loginBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (overlay.classList.contains('visible')) closeLogin();
        else openLogin();
    });

    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('visible')) closeLogin();
    });
});