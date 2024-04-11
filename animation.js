AOS.init();

let tour_slide = 0
let aff_menu_tel = 1

function slideLeft() {

    if (tour_slide == 0) {
        let slide = document.getElementById('form1');
        slide.classList.remove('affForm');
        slide.style.display = "none";
        slide = document.getElementById('form2');
        slide.style.display = "flex";
        slide.classList.add('affForm');
    } else if (tour_slide == 1) {
        slide = document.getElementById('form2');
        slide.classList.remove('affForm');
        slide.style.display = "none";
        slide = document.getElementById('form3');
        slide.style.display = "flex";
        slide.classList.add('affForm');
    } else if (tour_slide == 2) {
        slide = document.getElementById('form3');
        slide.classList.remove('affForm');
        slide.style.display = "none";
        slide = document.getElementById('form4');
        slide.style.display = "flex";
        slide.classList.add('affForm');
    }

    tour_slide++
}

function goBack() {
    window.history.back();
}

$(document).ready(function() {
    $(".disabled").bind("contextmenu",
        function(e) {
            e.preventDefault();
        });
});

let slider = document.getElementById("age");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}


function menuTel() {
    if (aff_menu_tel == 1) {
        let menu = document.getElementById('menu');
        menu.classList.remove('menu');
        menu.style.display = "block";
        menu.classList.add('menu_tel');
        aff_menu_tel++
    } else if (aff_menu_tel == 2) {
        let menu = document.getElementById('menu');
        menu.classList.remove('menu_tel');
        menu.style.display = "none";
        aff_menu_tel--

    }

}