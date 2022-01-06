let sessionString = sessionStorage.getItem("andmejarjend");
let retsept = JSON.parse(sessionString);

let sessionString2 = sessionStorage.getItem("andmejarjend1");
let retsept2 = JSON.parse(sessionString2);

let nimi = document.createElement("div");
nimi.textContent = retsept.retseptiNimi;
nimi.setAttribute("class", "nimi");
document.getElementsByClassName("nimekast")[0].appendChild(nimi);

let retseptipilt = document.createElement("img");
retseptipilt.src = retsept.pilt;
retseptipilt.setAttribute("class", "pilt");
document.getElementsByClassName("peaminepilt")[0].appendChild(retseptipilt);

for (i = 0; i < retsept.koostisosadeNimekiri.length; i++) {
  let koostisosad = document.createElement("div");
  koostisosad.setAttribute("class", "koostisosad");
  koostisosad.textContent = retsept.koostisosadeNimekiri[i];
  document.getElementsByClassName("koostisosadPea")[0].appendChild(koostisosad);
}

let valmistamine = document.createElement("div");
valmistamine.textContent = retsept.valmistamine;
valmistamine.setAttribute("class", "valmistamine");
document
  .getElementsByClassName("valmistamiseKast")[0]
  .appendChild(valmistamine);

let tagasinupp = document.createElement("div");
tagasinupp.textContent = "Tagasi retseptidesse";
tagasinupp.setAttribute("class", "tagasinupp");
tagasinupp.addEventListener("click", function () {
  let andmed = retsept2;
  sessionStorage.setItem("andmejarjend", JSON.stringify(andmed));
  window.location.href = "Projekt-LK2.html";
});
document.getElementsByClassName("vkast3")[0].appendChild(tagasinupp);
