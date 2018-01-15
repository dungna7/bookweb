/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function closeNavBar() {
    var W = window.innerWidth;
    if (W < 576) {
        $(".navbar-nav li").not(":first").hide();
    }
}