const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        tabs.forEach(t => t.classList.remove('tab_active'));
        tabContent.forEach(c => c.classList.remove('tab__content_active'));

        tab.classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');
    })
})