
const reveals = Array.from(document.querySelectorAll('.reveal'));

function checkReveal() {
    reveals.forEach(reveal => {
        const rect = reveal.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            reveal.classList.add('reveal_active');
        }  else {
            reveal.classList.remove('reveal_active')
        }
    });
}

window.addEventListener('scroll', checkReveal);

