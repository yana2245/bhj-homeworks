
    const modalMain = document.getElementById("modal_main");
    const modalSuccess = document.getElementById("modal_success");
    const modalCloseElements = Array.from(document.querySelectorAll('.modal__close_times'));
    const btnDanger = document.querySelector(".btn_danger");

    modalMain.className = "modal modal_active";

    modalCloseElements.forEach(element =>
        element.onclick =  () => {
            modalMain.className = "modal";
            modalSuccess.className = "modal";
        });

    btnDanger.onclick = () => {
        modalSuccess.className = "modal modal_active";
        modalMain.className = "modal";
    };

