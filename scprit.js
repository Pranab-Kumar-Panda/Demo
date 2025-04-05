const button = document.getElementById('btn');
const bulb = document.getElementById('glass');

button.addEventListener('click', () => {
    bulb.classList.toggle('glow');
});
