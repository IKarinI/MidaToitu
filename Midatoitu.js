let toiduained = [
  { id: 1, Nimetus: "avokaado" },
  { id: 2, Nimetus: "banaan" },
  { id: 3, Nimetus: "basiilik/petersell" },
  { id: 4, Nimetus: "hapukoor" },
  { id: 5, Nimetus: "jahu" },
  { id: 6, Nimetus: "juust" },
  { id: 7, Nimetus: "kana" },
  { id: 8, Nimetus: "kartul" },
  { id: 9, Nimetus: "kodujuust" },
  { id: 10, Nimetus: "kurk" },
  { id: 11, Nimetus: "küüslauk" },
  { id: 12, Nimetus: "lõhe" },
  { id: 13, Nimetus: "majonees/ketšup" },
  { id: 14, Nimetus: "muna" },
  { id: 15, Nimetus: "murulauk" },
  { id: 17, Nimetus: "piim" },
  { id: 18, Nimetus: "porgand" },
  { id: 19, Nimetus: "porru" },
  { id: 20, Nimetus: "puljong" },
  { id: 21, Nimetus: "redis" },
  { id: 22, Nimetus: "riivsai" },
  { id: 23, Nimetus: "sai" },
  { id: 24, Nimetus: "sibul" },
  { id: 25, Nimetus: "sinep" },
  { id: 27, Nimetus: "sulajuust" },
  { id: 28, Nimetus: "till" },
  { id: 29, Nimetus: "toorjuust" },
  { id: 30, Nimetus: "vahukoor" },
  { id: 31, Nimetus: "viiner" },
  { id: 32, Nimetus: "või" },
];

let toiduainedList = [];
//=========================================>  LOOB K6IK NUPUD
toiduained.forEach((toiduaine) => {
  let button = document.createElement("button");
  let nupuNimetus = document.createTextNode(toiduaine.Nimetus);
  let nupuId = toiduaine.id;
  button.appendChild(nupuNimetus);
  button.setAttribute("class", "nupud");
  button.setAttribute("id", nupuId);
  //=======================================>  NUPUVAJUTUSE EVENT
  button.addEventListener("click", function () {
    this.style.display = "none";
    let nimekirja = document.createElement("div");
    let nimenoot = document.createTextNode(this.textContent);
    nimekirja.setAttribute("class", "nimekirjaElemendid");
    nimekirja.appendChild(nimenoot);
    //=======================================>  NIMEKIRJA VAJUTUSE EVENT
    nimekirja.addEventListener("click", function () {
      this.remove();
      document.getElementById(nupuId).style.display = "inline-flex";
    });
    document.getElementsByClassName("skast")[0].appendChild(nimekirja);
  });
  document.getElementById("nupud").appendChild(button);
});

function otsinguFunktioon() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let nupudeKast = document.getElementById("nupud");
  let nupuValikud = nupudeKast.getElementsByClassName("nupud"); // HTMLcollection nuppudest
  for (let i = 0; i < nupuValikud.length; i++) {
    let txtValue = nupuValikud[i].textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      nupuValikud[i].style.display = "";
    } else {
      nupuValikud[i].style.display = "none";
    }
  }
}

document
  .getElementsByClassName("otsinupp")[0]
  .addEventListener("click", otsinguTulemus);

document
  .getElementsByClassName("k6ikRtseptid")[0]
  .addEventListener("click", retseptidTulemus);

function otsinguTulemus() {
  let valitud = document.getElementsByClassName("nimekirjaElemendid");
  let andmed = [];
  for (i = 0; i < valitud.length; i++) {
    let valitudElement = valitud[i].textContent;
    toiduained.forEach((toiduaine) => {
      if (valitudElement === toiduaine.Nimetus) {
        andmed.push(toiduaine);
      }
    });
  }
  sessionStorage.setItem("andmejarjend", JSON.stringify(andmed));
  window.location.href = "Projekt-LK2.html";
}
function retseptidTulemus() {
  let andmed = [];
  sessionStorage.setItem("andmejarjend", JSON.stringify(andmed));
  window.location.href = "Projekt-LK2.html";
}
