window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}
function Class(elem) {
    return document.getElementsByClassName(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}
var szam =0;
var szamok = "";
var db = 0;
var muvjel = ["+","-","*","/",".","="];
function init() {
    for (let index = 0; index < 10; index++) {
        szamok += '<button type="button">'+db+'</button>';
        db++
    }
    Class("szamok")[0].innerHTML = szamok;
    index =0;
    for (let index = 0; index < 10; index++) {
        $("button")[index].addEventListener("click",kijelzobeRak);
      
    }
    
    /* for (let index = 0; index < szamok.length; index++) {
        Class("szamok")[i].onclick = kijelzobeRak();
    } */
    ID("osszeadas").addEventListener("click", muvjelKijelzobe(i=0));
    ID("kivonas").addEventListener("click", muvjelKijelzobe(i=1));
    ID("szorzas").addEventListener("click", muvjelKijelzobe(i=2));
    ID("osztas").addEventListener("click", muvjelKijelzobe(i=3));
    ID(".").addEventListener("click", muvjelKijelzobe(i=4));
    ID("egyenlo").addEventListener("click", muvjelKijelzobe(i=5));
    
}

function kijelzobeRak() {
    Class("kijelzo")[0].innerHTML = szam =0;
}

function muvjelKijelzobe() {
    Class("kijelzo")[0].innerHTML = muvjel[i];
}