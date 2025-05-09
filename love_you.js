// autor: Marco Barría

window.addEventListener("scroll", function () {
    const scr = window.scrollY;
  
    const C = document.getElementById("contenedor");
    const A = document.getElementById("abrir");
    const E = document.getElementById("carta");
    const F = document.querySelector("#carta hgroup h2");
    const P = document.getElementById("perspectiva");
  
    // giro y abertura
    if (scr >= 100) {
      C.style.transition = "all 1s";
      C.style.transform = "rotateY(180deg)";
  
      A.style.transition = "all 1s .5s";
      A.style.transform = "rotateX(180deg)";
      A.style.zIndex = "0";
    }
    // cerrado y giro
    else {
      C.style.transition = "all 1s .5s";
      C.style.transform = "rotateY(0deg)";
  
      A.style.transition = "all 1s";
      A.style.transform = "rotateX(0deg)";
      A.style.zIndex = "10";
    }
  
    // Sobre trasladoY / carta
    if (scr >= 500) {
      E.style.transition = "all .5s 1s";
      E.style.top = "-550px";
      E.style.height = "500px";
  
      P.style.transition = "all 1s";
      P.style.transform = "translateY(450px)";
  
      F.style.transition = "all 1s";
      F.style.transform = "rotateZ(180deg)";
    }
    // Sobre position original / guardado carta
    else {
      E.style.transition = "all .5s";
      E.style.top = "3px";
      E.style.height = "200px";
  
      P.style.transform = "translateY(0px)";
      F.style.transform = "rotateZ(0deg)";
    }
  });
  