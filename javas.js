window.onscroll = function () {
    handleScroll();
};

function handleScroll() {
    const navbar = document.querySelector('.navbar');
    const fixedNavbar = document.querySelector('.navbar.fixed');
    const videoDiv = document.querySelector('.videodiv');

    // Main Navbar disappears when you scroll
    if (window.scrollY > 100) {
        // Move main navbar up with smooth transition
        navbar.style.top = '-100px';  // Adjust this value to make navbar disappear completely

        // Show the new fixed navbar with animation
        fixedNavbar.classList.add('visible'); // Add visible class to make it fade in and move down

        // Shrink video width
        videoDiv.classList.add('shrink-video');
    } else {
        // Reset the main navbar to its original position
        navbar.style.top = '15px';  // Reset to original top position

        // Hide the fixed navbar
        fixedNavbar.classList.remove('visible');  // Remove visible class to hide navbar

        // Reset video width
        videoDiv.classList.remove('shrink-video');
    }
}

function toggleMenu() {
    const menu = document.querySelector('.navbar .menu');
    const fixedMenu = document.querySelector('.navbar.fixed .menu');
    menu.classList.toggle('active');
    fixedMenu.classList.toggle('active');
}
