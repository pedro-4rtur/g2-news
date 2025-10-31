function open_menu() {
    let menu = window.document.getElementById('menu-panel');

    menu.classList.remove('menu-closed')
    menu.classList.add('menu-open');
}

function close_menu() {
    let menu = window.document.getElementById('menu-panel');

    menu.classList.remove('menu-open');
    menu.classList.add('menu-closed');
}

function toggle_star(e) {
    if(e.classList.contains('bi-star-fill')) {
        e.classList.remove('bi-star-fill');
        e.classList.add('bi-star');
        console.log("Faz o L");
    } else {
        e.classList.remove('bi-star');
        e.classList.add('bi-star-fill');
        console.log("Não Faz o L");
    }
}