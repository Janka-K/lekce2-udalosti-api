// tady je místo pro náš program

let nadpis = document.querySelector("h1");
nadpis.classList.add(".zluty"); //pridani tridy
nadpis.classList.remove("zluty"); //odebrani tridy

let ctverecek = document.querySelector("div.zluty");
ctverecek.classList.add("ctverecek");

let pocitadlo = 0;

function priNajetiNaCtverec() {
  console.log("test" + pocitadlo);
  pocitadlo++; //zvednuti hodnoty v promenne o 1
}

function zmenStyl() {
  nadpis.classList.toggle("zeleny"); // priklad na toggle, pri kliku se nadpis obarvi zelene, pokud jiz zeleny je, pak se zelena ztrati
}

function priNajetiNaText() {
  let text = document.querySelector("p");
  text.style.fontWeight = "bold";
}

function priOdjetiZTextu() {
  let text = document.querySelector("p");
  text.style.fontWeight = "normal";
}

function startAudio() {
  // vyvolani audia na strance
  let audioFile = document.getElementById("#zvukovaStopa");
  console.log("Zapinam hudbu");
  audioFile.play();
}

function obarviCervene() {
  let text = document.querySelector("p");
  text.classList.toggle("cervena");
}

let counter = 16; //zde by slo jeste zlepsit nacitani font-size z elementu

function zvetseniOPixel() {
  let text = document.querySelector("p");
  text.style.fontSize = counter++ + "px";
}
