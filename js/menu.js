/**
$(document).ready(function(){
    $('#menuToggle').click(function(){
        $('#s2_mainNav').stop(true, true).slideToggle()
    })
})

// requires jquery library
jQuery(document).ready(function() {
    jQuery(".main-table").clone(true).appendTo('#table-scroll').addClass('clone');
});

$ (document) .ready (function () {
    $(' .dropdown-button').dropdown({
        constrainWidth: false, hover: true, beloworigin: true, alignment: 'left'
    });
});

 **/

//Variablen
let     table = document.getElementById("customers2")
let   matrikelNr = document.getElementById("matrikelNr").value;
let   sname = document.getElementById("sname").value;
let   idatum = document.getElementById("idatum").value;
let   email = document.getElementById("email").value;
let    kursNr  = document.getElementById("kursNr").value;
let    kurs  = document.getElementById("kurs").value;
let    mDozent = document.getElementById("mDozent").value;
let    nDozent = document.getElementById("nDozent").value;
let   adatum  = document.getElementById("adatum").value;
let    betrag = document.getElementById("betrag").value;
let   note  = document.getElementById("note").value;



/** Inhaltsverzeichnis**/
const windowHeight = window. innerHeight;
const sections = document. querySelectorAll ('.section' );
const navigation = document. querySelector ('.navigation');

function resetSelection() {
    for (let i = 0; i < navigation. children. length; i++){
        navigation.children[i].classList. remove( 'selected');
    }
}

window.addEventListener ('scroll', function() {
    const scrollTop = window.scrollY;
    sections.forEach(function(section, i) {
        if (section.offsetTop < scrollTop + windowHeight / 2 && scrollTop < section.offsetTop + windowHeight / 2) {
            resetSelection();
            navigation.children[i].classList.add('selected');
        }
    });
});

navigation.querySelectorAll('li').forEach(function(item, i) {
    item.addEventListener('click', function() {
        resetSelection();
        window.scrollTo({
            top: i * windowHeight, behavior: "smooth"
        });
    });
});



/** Anomalie in Rot anzeigen **/
document.getElementById("show_anomaly").addEventListener("click", displayAnomaly);
function displayAnomaly(){
 
    const nodeList = document.querySelectorAll(".adara");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "red";
    }
}

/** Name in Gelb anzeigen **/
document.getElementById("show_anomaly").addEventListener("click", displayName);
function displayName(){
    const nodeList = document.querySelectorAll(".adara2");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "#dc8c1b";
    }
}

/** Modal Insert  **/

let modal = document.querySelector(".modal");
let btn = document.querySelector(".submit");
let span = document.querySelector(".close");
let del = document.querySelector('.del')
let cancel = document.querySelector(".cancel")

btn.addEventListener("click", () => {
    modal.style.display = "block";

});

cancel.addEventListener("click", ()=> {
    hideModal()
})

span.addEventListener("click", () => {
    hideModal();
});

del.addEventListener("click", () => {
    insertData();
    hideModal();
});

function hideModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        hideModal();
    }
};


//Funktion insert Data
function insertData(){
    let table = document.getElementById("customers2");
    let row = table.insertRow(-1);
    let matrikelNr = row.insertCell(0);
    let sname = row.insertCell(1);
    let idatum = row.insertCell(2);
    let email = row.insertCell(3);
    let kursNr = row.insertCell(4);
    let kurs = row.insertCell(5);
    let mDozent = row.insertCell(6);
    let nDozent = row.insertCell(7);
    let adatum = row.insertCell(8);
    let betrag = row.insertCell(9);
    let note = row.insertCell(10);

    matrikelNr.innerHTML = document.getElementById("matrikelNr").value;
    matrikelNr.style.backgroundColor = "red";
    sname.innerHTML = document.getElementById("sname").value;
    idatum.innerHTML = document.getElementById("idatum").value;
    email.innerHTML = document.getElementById("email").value;
    kursNr.innerHTML = document.getElementById("kursNr").value;
    kurs.innerHTML = document.getElementById("kurs").value;
    mDozent.innerHTML = document.getElementById("mDozent").value;
    nDozent.innerHTML = document.getElementById("nDozent").value;
    adatum.innerHTML = document.getElementById("adatum").value;
    betrag.innerHTML = document.getElementById("betrag").value;
    note.innerHTML = document.getElementById("note").value;

    const nodeList = document.querySelectorAll(".brandon");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "red";
    }
    
}



//Create a Fake SQL-Befehl
let textNode1 = document.createTextNode( "(" + matrikelNr+ ",");
document.getElementById("code1").appendChild(textNode1);

let textNod2 = document.createTextNode( "'" + sname + "',");
document.getElementById("code1").appendChild(textNod2);

let textNod3 = document.createTextNode( "'" + idatum + "',");
document.getElementById("code1").appendChild(textNod3);

let textNod4 = document.createTextNode( "'" + email + "',");
document.getElementById("code1").appendChild(textNod4);

let textNod5 = document.createTextNode( " " + kursNr + ",");
document.getElementById("code1").appendChild(textNod5);

let textNod6 = document.createTextNode( "'" + kurs + "',");
document.getElementById("code1").appendChild(textNod6);

let textNod7 = document.createTextNode( " " + mDozent + ",");
document.getElementById("code1").appendChild(textNod7);

let textNod8 = document.createTextNode( "'" + nDozent + "',");
document.getElementById("code1").appendChild(textNod8);

let textNod9 = document.createTextNode( "'" + adatum + "',");
document.getElementById("code1").appendChild(textNod9);

let textNod10 = document.createTextNode( "'" + betrag + "',");
document.getElementById("code1").appendChild(textNod10);

let textNod11 = document.createTextNode( " " + note + ")");
document.getElementById("code1").appendChild(textNod11);



/** Insert Data in a table
document.getElementById("submit4").onclick=function()
{
    let table = document.getElementById("customers2");
    let row = table.insertRow(-1);
    let matrikelNr = row.insertCell(0);
    let sname = row.insertCell(1);
    let idatum = row.insertCell(2);
    let email = row.insertCell(3);
    let kursNr = row.insertCell(4);
    let kurs = row.insertCell(5);
    let mDozent = row.insertCell(6);
    let nDozent = row.insertCell(7);
    let adatum = row.insertCell(8);
    let betrag = row.insertCell(9);
    let note = row.insertCell(10);

    matrikelNr.innerHTML = document.getElementById("matrikelNr").value;
    sname.innerHTML = document.getElementById("sname").value;
    idatum.innerHTML = document.getElementById("idatum").value;
    email.innerHTML = document.getElementById("email").value;
    kursNr.innerHTML = document.getElementById("kursNr").value;
    kurs.innerHTML = document.getElementById("kurs").value;
    mDozent.innerHTML = document.getElementById("mDozent").value;
    nDozent.innerHTML = document.getElementById("nDozent").value;
    adatum.innerHTML = document.getElementById("adatum").value;
    betrag.innerHTML = document.getElementById("betrag").value;
    note.innerHTML = document.getElementById("note").value;

    return false;
}
 **/
