
const menuLink = Array.from(document.querySelectorAll('.menu__link'));

for (let i = 0; i < menuLink.length; i++) {
    if (menuLink[i].closest('li').querySelector('ul')) {
        let element = menuLink[i].closest('li').querySelector('a');
        console.log(element);
        element.onclick = showSubMenu;
    }
}

function showSubMenu(e) {
    e.preventDefault();
    const currentSubMenu = this.closest('li').querySelector('ul');
    console.log(currentSubMenu);
    const allSubMenus = document.querySelectorAll('ul.menu_active');
    allSubMenus.forEach(menu => {
        if (menu !== currentSubMenu) {
            menu.classList.remove("menu_active");
        }
    });
    currentSubMenu.classList.toggle("menu_active");
}