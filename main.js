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

// 1 ) D.U. Zvetsovani textu o pixel pri kazdem kliku

let findFontSize = window.getComputedStyle(document.getElementById("#odstavec")).fontSize;
let replacePx = Number(findFontSize.replace("px", ""));

function zvetseniOPixel() {
    let text = document.getElementById("#odstavec");
    text.style.fontSize = replacePx++ + "px";
}

// 2) D.U. Vypnuti hudby pri kliku, hudba pri spusteni pote hraje od stejneho mista,kde puvodne skoncila

function stopAudio() {
    let audioFile = document.getElementById("#zvukovaStopa");
    audioFile.pause();
}

// 3) D.U. Vraceni hudby pri kliku, hudba pri kliku zacne hrat od zacatku

function reloadAudio() {
    let audioFile = document.getElementById("#zvukovaStopa");
    audioFile.load();
    audioFile.play();
}

//4) Funkce obsluhujici nastavovani hlasitosti zvuku - mutovany zvuk (tichy), normalni sila zvuku, zvuk nahlas.

// *** @param {float} a

function volumeAudio(a) {
    let audioFile = document.getElementById("#zvukovaStopa");
    audioFile.play();
    audioFile.volume = a;
}
