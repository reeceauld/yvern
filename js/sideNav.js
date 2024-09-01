function openNav(){
    document.getElementById("pageSideNav").style.width = "75vw";
    document.getElementById("pageSideNavFooter").style.width = "75vw";
    setTimeout(showFooter, 300)
}
function showFooter(){
    document.getElementById("pageSideNavFooter").style.height = "10vh";
}

function closeNav(){

    document.getElementById("pageSideNavFooter").style.height = "0";
    setTimeout(closeNav2, 100)
}

function closeNav2(){
    document.getElementById("pageSideNav").style.width = "0";
}