window.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slider");
        let dots = document.getElementsByClassName("dot");
        for(i = 0; i < slides.length; i++){
            slides[i].classList.add("hidden");
        }

        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}

        for(i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex-1].classList.remove("hidden");
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000);
    }
});

function validateForm() {
    var name = document.getElementById("fname").value;
    var email = document.getElementById("femail").value;
    var option = document.getElementById("option").value;
    
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }
    if (option == "") {
        alert("Please select an option");
        return false;
    }
    return true;
}

function toggleNavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}