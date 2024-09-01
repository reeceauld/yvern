function openNav(){
    if (matchMedia('only screen and (max-width: 640px)').matches){
        document.getElementById("pageSideNavFooter").style.height = "0";
        document.getElementById("pageSideNav").style.width = "90vw";
        document.getElementById("pageSideNavFooter").style.width = "90vw";
        setTimeout(showFooter, 500)
    }
    else{
        document.getElementById("pageSideNavFooter").style.height = "0";
        document.getElementById("pageSideNav").style.width = "50vw";
        document.getElementById("pageSideNavFooter").style.width = "50vw";
        setTimeout(showFooter, 500)
    }
}
function showFooter(){
    document.getElementById("pageSideNavFooter").style.height = "10vh";
}

function closeNav(){

    document.getElementById("pageSideNavFooter").style.width = "0";
    document.getElementById("pageSideNav").style.width = "0";
    setTimeout(closeNav2, 500)

}

function closeNav2(){
    document.getElementById("pageSideNavFooter").style.height = "0";
}