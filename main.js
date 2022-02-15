// tady je místo pro náš program

let nadpis = document.querySelector('h1');
nadpis.classList.add('.zluty'); //pridani tridy
nadpis.classList.remove('zluty'); //odebrani tridy

let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');

let pocitadlo = 0;




function priNajetiNaCtverec(){
    console.log("test" + pocitadlo);
    pocitadlo ++; //zvednuti hodnoty v promenne o 1
}

function zmenStyl(){
    nadpis.classList.toggle('zeleny'); // priklad na toggle, pri kliku se nadpis obarvi zelene, pokud jiz zeleny je, pak se zelena ztrati
}