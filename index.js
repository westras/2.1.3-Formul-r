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

    // toggle on button click
    loginBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (overlay.classList.contains('visible')) closeLogin();
        else openLogin();
    });

    // close when clicking outside the login box
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLogin();
    });

    // close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('visible')) closeLogin();
    });
});