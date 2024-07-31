const rotator = document.querySelectorAll('.rotator');

    rotator.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
    let activeIndex = 0;

    cases[activeIndex].classList.add('rotator__case_active');

    setInterval(() => {
        cases[activeIndex].classList.remove('rotator__case_active');

        activeIndex = (activeIndex + 1) % cases.length;

        cases[activeIndex].classList.add('rotator__case_active');
    }, 1000);
});
