window.addEventListener("load", () => {
  const scroll = new LoconativeScroll({
    el: document.querySelector("main"),
    smooth: true,
    scrollFromAnywhere: true,
    multiplier: 1,
    reloadOnContextChange: true,
    touchMultiplier: 3,
    smoothMobile: 0,
      smartphone: {
          smooth: !0,
          breakpoint: 766
      },
      tablet: {
          smooth: !0,
          breakpoint: 1010
      },
    lerp: 0.03
  });
  scroll.on("call", callValue => {
    if (callValue === "home") {
      console.log(callValue);
    }; 
    if (callValue === "about") {
      console.log(callValue);
    };
    if (callValue === "works") {
      console.log(callValue);
    };
    if (callValue === "contact") {
      console.log(callValue);
    };
  });
});
const toggleMenu = () => document.body.classList.toggle("menuRounded__menu_open");

function downloadFile(url, fileName){
    fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', fileName);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        // aElement.setAttribute('href', href);
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
};
  
document.querySelector('#downloadCVButton').onclick =function () {
    downloadFile('files/CV.pdf', 'CV-AngelRapeta.pdf');
}

document.querySelector('#HomeMenu').onclick =function () {
  document.body.classList.toggle("menuRounded__menu_open");
}

document.querySelector('#AboutMenu').onclick =function () {
  document.body.classList.toggle("menuRounded__menu_open");
}

document.querySelector('#WorksMenu').onclick =function () {
  document.body.classList.toggle("menuRounded__menu_open");
}

document.querySelector('#ContactMenu').onclick =function () {
  document.body.classList.toggle("menuRounded__menu_open");
}

window.addEventListener('resize', function () { 
  "use strict";
  window.location.reload(); 
});