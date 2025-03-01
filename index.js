const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content-top nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
const imgcontainer = document.querySelector("#img"); // Targeting body to expand content

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
    imgcontainer.classList.toggle('expanded'); // Expanding body when sidebar is hidden
});

// Cursor effects
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = (dets.x - 250) + "px";
    blur.style.top = (dets.y - 250) + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1;
        crsr.style.border = "0px solid rgba(0, 170, 255, 1)";
        crsr.style.backgroundColor = "rgba(0, 170, 255, 1)";
    });
});
