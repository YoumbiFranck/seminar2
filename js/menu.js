
/** Variablen **/
const btn_show_anomaly = document.getElementById("show_anomaly");
const block_text1 = document.getElementById("blocktext_1");
const block_text2 = document.getElementById("blocktext_2");

const modal = document.querySelector(".modal");
const btn = document.querySelector(".submit");
const span = document.querySelector(".close");
const del = document.querySelector('.del')
const cancel = document.querySelector(".cancel")





/** Inhaltsverzeichnis**/
/* 
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
 */


/** Anomalie in Rot anzeigen **/
btn_show_anomaly.addEventListener("click", displayAnomaly);
function displayAnomaly(){
 
    const nodeList = document.querySelectorAll(".adara");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "red";
    }

    btn_show_anomaly.disabled = true;
    btn_show_anomaly.style.cursor = "not-allowed";
}

/** Name in Gelb anzeigen **/
btn_show_anomaly.addEventListener("click", displayName);
function displayName(){
    const nodeList = document.querySelectorAll(".adara2");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "#dc8c1b";
    }
}

/** Blocktext anzeigen **/
block_text1.style.display = 'none';
btn_show_anomaly.addEventListener("click", showblocktext);
function showblocktext() {
    if (block_text1.style.display === "none") {
        block_text1.style.display = "block";
    } else {
        block_text1.style.display = "none";
    }
}



/** Open Modal **/
block_text2.style.display = 'none';
function showblocktext2() {
    block_text2.style.display = "block";

}
btn.addEventListener("click", () => {

    //Open Modal
    modal.style.display = "block";
    createmodalvalue();



});

/** aktion rückgängig machen **/
cancel.addEventListener("click", ()=> {
    hidemodalvalue();
    hideModal()

})

/** Close Modal **/
span.addEventListener("click", () => {
    hidemodalvalue();
    hideModal();
});

/** Modal bestätigen  **/
del.addEventListener("click", () => {
    //insert data and close modal
    insertData();
    let btn = document.querySelector('#submit');
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
    hideModal();
    showblocktext2();
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

function createmodalvalue() {
        //get the value from Form
        let matrikelNr = document.getElementById("matrikelNr").value;
        let sname = document.getElementById("sname").value;
        let idatum = document.getElementById("idatum").value;
        let email = document.getElementById("email").value;
        let kursNr = document.getElementById("kursNr").value;
        let kurs = document.getElementById("kurs").value;
        let mDozent = document.getElementById("mDozent").value;
        let nDozent = document.getElementById("nDozent").value;
        let adatum = document.getElementById("adatum").value;
        let betrag = document.getElementById("betrag").value;
        let note = document.getElementById("note").value;

        //Create a Fake SQL-Befehl
        const textNode1 = document.createTextNode("(" + matrikelNr + ",");
        const textNod2 = document.createTextNode("'" + sname + "',");
        const textNod3 = document.createTextNode("'" + idatum + "',");
        let textNod4 = document.createTextNode("'" + email + "',");
        let textNod5 = document.createTextNode(" " + kursNr + ",");
        let textNod6 = document.createTextNode("'" + kurs + "',");
        let textNod7 = document.createTextNode(" " + mDozent + ",");
        let textNod8 = document.createTextNode("'" + nDozent + "',");
        let textNod9 = document.createTextNode("'" + adatum + "',");
        let textNod10 = document.createTextNode("'" + betrag + "',");
        let textNod11 = document.createTextNode(" " + note + ")");
        document.getElementById("code1").appendChild(textNode1);
        document.getElementById("code1").appendChild(textNod2);
        document.getElementById("code1").appendChild(textNod3);
        document.getElementById("code1").appendChild(textNod4);
        document.getElementById("code1").appendChild(textNod5);
        document.getElementById("code1").appendChild(textNod6);
        document.getElementById("code1").appendChild(textNod7);
        document.getElementById("code1").appendChild(textNod8);
        document.getElementById("code1").appendChild(textNod9);
        document.getElementById("code1").appendChild(textNod10);
        document.getElementById("code1").appendChild(textNod11);


}

//hide modal value

function hidemodalvalue (){
    window.location.reload();
}

/* **************************** Open Modal 2  ************************/ 
const block_text3 = document.getElementById("blocktext_3");

const modal2 = document.querySelector(".modal2");
const btn2 = document.querySelector(".updateemail");
const span2 = document.querySelector(".close2");
const update2 = document.querySelector('.update2')
const cancel2 = document.querySelector(".cancel2")

/** Open Modal **/
block_text3.style.display = 'none';
function showblocktext3() {
    block_text3.style.display = "block";

}



/** aktion rückgängig machen **/
cancel2.addEventListener("click", ()=> {
   hideModal2()
   hidemodalvalue ();

})

/** Close Modal **/
span2.addEventListener("click", () => {
   hideModal2();
   hidemodalvalue ();
});



/** Modal bestätigen  **/
update2.addEventListener("click", () => {
    updateemail();
    let update = document.querySelector('#updateemail');
    update.disabled = true;
    update.style.cursor = "not-allowed";
    hideModal2();
    showblocktext3();
});

function hideModal2() {
    modal2.style.display = "none";
}



window.onclick = function(event) {
    if (event.target === modal) {
        hideModal2();
    }
};

/*............. Update email.............*/
function updateemail (){
    //get email value for update 
    const email_update = document.getElementById("email-update").value;
    let myTable = document.getElementById('update');
    for ( let i=1; i<4; i+=2 ){
        myTable.rows[i].cells[3].innerHTML = email_update;
        myTable.rows[i].cells[3].style.backgroundColor = "green";
        myTable.rows[7].cells[3].style.backgroundColor = "red";
        
    }
    
}

/*............. Create TexNode for updating email.............*/
function createNodeForUpdate (){
    const email_update2 = document.getElementById("email-update").value;
    const textNode = document.createTextNode("'" + email_update2 + "'");
    document.getElementById("code2").appendChild(textNode);
    console.log("test");  
}


/*............. Form validate .............*/
const email = document.getElementById("email-update");
email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("bitte geben Sie eine gültige email adresse ein");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
   
    //Open Modal
    btn2.addEventListener("click", () => {
        modal2.style.display = "block";
       createNodeForUpdate();
       
   });
    
  }
});


/*............. Update email.............*/

const blocktext4 = document.getElementById("blocktext_4");

const modal3 = document.querySelector(".modal3");
const btn3 = document.querySelector(".deleteinfos");
const span3 = document.querySelector(".close3");
const delete3 = document.querySelector(".delete3")
const cancel3 = document.querySelector(".cancel3")

const block_tex = document.getElementById("c_datenlöschen");

block_tex.style.backgroundColor = '#DF9595';

blocktext4.style.display = 'none';
function showblocktext4() {
    blocktext4.style.display = "block";

}
/** Open Modal **/
//Open Modal
btn3.addEventListener("click", () => {
    modal3.style.display = "block";
     
});


/** aktion rückgängig machen **/
cancel3.addEventListener("click", ()=> {
   hideModal3()
   
})

/** Close Modal **/
span3.addEventListener("click", () => {
   hideModal3();
  
});



/** Modal bestätigen  **/
delete3.addEventListener("click", () => {
    block_tex.remove();
    btn3.disabled = true;
    btn3.style.cursor = "not-allowed";
    hideModal3();
    showblocktext4();
});

function hideModal3() {
    modal3.style.display = "none";
}



window.onclick = function(event) {
    if (event.target === modal) {
        hideModal3();
    }
};


/*............. erste Normalform .............*/

const nodesE = document.querySelectorAll(".hide");
for (item of nodesE){
    item.style.display = "none";
}

const normalform1 = document.getElementById("normalform1");
const hideElements = document.querySelectorAll(".hide");
const hideElements2 = document.querySelectorAll(".hide2");

normalform1.addEventListener("click", () =>{
    for (item of hideElements){
        item.style.display= "revert";
        item.style.backgroundColor = "green";
    }
    for (item of hideElements2){
        item.style.display= "none";
    }
    normalform1.disabled = true;
    normalform1.style.cursor = "not-allowed";
});


/*............. zweite Normalform .............*/
const normalform2 = document.getElementById("normalform2");

const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const tab4 = document.getElementById("tab4");

tab2.style.display = "none";
tab3.style.display = "none";
tab4.style.display = "none";

normalform2.addEventListener("click", () =>{ 

    const initialtab = document.getElementById("tab1");
    initialtab.style.display = "none";

const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const tab4 = document.getElementById("tab4");

tab2.style.display = "revert";
tab3.style.display = "revert";
tab4.style.display = "revert";


});


 

