function myfunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


    // Check if dark mode is enabled in localStorage when the page loads
    window.onload = function() {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }
    };

    function myfunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");

        // Save the current mode to localStorage
        if (element.classList.contains("dark-mode")) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    }
    let scrolll = document.getElementById('scroll')
window.onscroll = function () {
    if (scrollY >= 400) {
        scrolll.style.display = "block";
    } else {
        scrolll.style.display = "none";
    }
}

function upScroll() {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth",
    })
}