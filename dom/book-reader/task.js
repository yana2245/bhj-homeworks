const fontSize = document.querySelectorAll('.font-size');
const bookElement = document.getElementById('book');

fontSize.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        fontSize.forEach(item => {
            item.classList.remove('font-size_active');
        });
        this.classList.add('font-size_active');

       
        bookElement.classList.remove('book_fs-small', 'book_fs-big');

        const fontSizes = this.getAttribute('data-size');
        if (fontSizes === 'small') {
            bookElement.classList.add('book_fs-small');
        } else if (fontSizes === 'big') {
            bookElement.classList.add('book_fs-big');
        }
    });
});