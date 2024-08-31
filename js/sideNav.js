function openNav() {
    document.getElementById("pageSideNav").style.width = "35vw";
    document.getElementById("pageSideNavFooter").style.width = "35vw";
    setTimeout(showFooter, 250)
}
function showFooter(){
    document.getElementById("pageSideNavFooter").style.height = "5vh";
}

function closeNav() {
    document.getElementById("pageSideNav").style.width = "0";
    document.getElementById("pageSideNavFooter").style.height = "0";
}