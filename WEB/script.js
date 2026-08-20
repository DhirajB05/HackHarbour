const togglebutton = typeof document !== 'undefined' ? document.getElementById('Click') : null;

if (togglebutton) {
    togglebutton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
} else {
    console.error('Button with id "Click" not found.');
}
