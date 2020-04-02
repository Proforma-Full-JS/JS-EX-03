const exo=document.forms;

exo[0].ch1.addEventListener('focus', () => {        
  exo[0].ch1.value="";
})

exo[1].ch1.addEventListener('focus', () => {
  exo[1].ch1.value="";
})

exo[1].ch1.addEventListener('blur', () => {
  if(exo[1].ch1.value === "") {
    exo[1].ch1.value=exo[1].ch1.defaultValue;
  }
})

exo[2].ch1.addEventListener('keydown', () => {
  exo[2].ch1.size++;
})

exo[3].cb1.addEventListener('click', () => {
  if(exo[3].cb1.checked) {
    exo[3].ch1.type="text";  
  } else {
    exo[3].ch1.type="password";
  }
})

document.querySelector(".enfonce").addEventListener('mousedown', () => {
  exo[4].ch1.type="text";
})

document.querySelector(".enfonce").addEventListener('mouseup', () => {
  exo[4].ch1.type = "password";
})

exo[5].ch1.addEventListener('focus', () => {
  exo[5].ch1.blur();
})

exo[6].cb1.addEventListener('click', () => {
  if(exo[6].cb1.checked) {
    exo[6].ch1.focus();
    exo[6].ch1.value = 0;
  } else {
    exo[6].ch1.blur();
    exo[6].ch1.value = null;
  }
})

exo[6].ch1.addEventListener('focus', () => {
  if(!exo[6].cb1.checked) {
    exo[6].ch1.blur();
  }
})

exo[7].b1.addEventListener('click', () => {
  for(let i=1; i <= 2; i++) {
    let value = Number(exo[7].ch1.value);
    const checkedelement = document.getElementById("rb1_"+i);
    if(checkedelement.checked) {
      exo[7].ch1.value = value + Number(checkedelement.value); 
    }
  }
})

exo[8].b1.addEventListener('click', () => {
  exo[8].ch1.defaultValue = exo[8].ch1.value;
})

exo[8].b2.addEventListener('click', () => {
  exo[8].ch1.defaultValue = "Texte initial";
  exo[8].ch1.value = "Texte initial";
})

exo[9].s1.addEventListener('change', () => {
  exo[9].ch1.value = exo[9].s1.value;
  exo[9].ch2.value = exo[9].s1.options[exo[9].s1.selectedIndex].text;
})

exo[10].s1.addEventListener('change', () => {
  const selected_options = [[],[]];
  Array.from(exo[10].s1.options).forEach(option => {
    if(option.selected) {
      selected_options[0].push(option.value);
      selected_options[1].push(option.text);
    }
  });
  exo[10].ch1.value = selected_options[0];
  exo[10].ch2.value = selected_options[1];
})

exo[11].gauche.addEventListener('click', () => {
  const tab = exo[11].c1;
  const new_tab = [];
  let c=0;
  for(i=1; i < tab.length;i++) {
    new_tab.push(tab[i].value);
  }
  new_tab.push(tab[0].value);
  tab.forEach(element => {
    element.value = new_tab[c];
    c++;
  })
})

exo[11].droite.addEventListener('click', () => {
  const tab = exo[11].c1;
  const new_tab = [];
  let c = 0;
  new_tab.push(tab[tab.length-1].value);
  for (i = 0; i < tab.length-1; i++) {
    new_tab.push(tab[i].value);
  }
  tab.forEach(element => {
    element.value = new_tab[c];
    c++;
  })
})

exo[12].droite.addEventListener('click', () => {
  Array.from(exo[12].s1.options).forEach(option => {
    if (option.selected) {
      exo[12].s2.appendChild(option);
    }
  });
})

exo[12].gauche.addEventListener('click', () => {
  Array.from(exo[12].s2.options).forEach(option => {
    if (option.selected) {
      exo[12].s1.appendChild(option);
    }
  });
})

exo[13].c02.disabled = true;
exo[13].c03.disabled = true;
exo[13].addEventListener('keyup', () => {
  if(exo[13].c01.value.length === 5) {
    exo[13].c02.disabled = false;
    exo[13].c02.focus();
    if(exo[13].c02.value.length === 5) {
      exo[13].c03.disabled = false;
      exo[13].c03.focus();
    } else {
      exo[13].c03.disabled = true;
      exo[13].c03.value = null;
    }
  } else {
    exo[13].c02.disabled = true;
    exo[13].c02.value = null;
    exo[13].c03.disabled = true;
    exo[13].c03.value = null;
  }
})

exo[14].cb1.addEventListener('click', () => {
  if (exo[14].cb1.checked) {
    exo[14].ch1.style.display = "none";
  } else {
    exo[14].ch1.style.display = "block";
  }
})

const actual_style = exo[15].ch1.style;
actual_style.width="170px";
actual_style.height="16px";
exo[15].ch1.addEventListener('focus', () => {
  actual_style.width = Number(parseInt(actual_style.width)+100)+"px";
  actual_style.height = Number(parseInt(actual_style.height)+100)+"px";
})
exo[15].ch1.addEventListener('blur', () => {
  actual_style.width = "170px";
  actual_style.height = "16px";
})

const CarresExo1 = Array.from(document.getElementsByClassName("1_exo_carre carre"));
CarresExo1.forEach((carre) => {
  carre.addEventListener("click", () => {
    CarresExo1.map((allCarre) => allCarre.classList.remove("checked"));
    carre.classList.add("checked");
  });
});

const CarresExo2 = Array.from(document.getElementsByClassName("2_exo_carre carre"));
const ClasseExo2 = document.getElementById("out").classList;
let lastClasse = "blanc";
CarresExo2.forEach((carre) => {
  carre.addEventListener("click", () => {
    CarresExo2.map((allCarre) => allCarre.classList.remove("checked"));
    carre.classList.add("checked");
    ClasseExo2.replace(lastClasse, carre.getAttribute("data-color"));
    lastClasse = carre.getAttribute("data-color");
  });
});

const ExoBonusDivGauche = document.getElementById("exo-img-div-g");
const ExoBonusImgsGauche = ExoBonusDivGauche.getElementsByTagName("img");
const ExoBonusImgDroite = document.getElementById("idroite");
const ExoBonusDivDroite = document.getElementsByClassName("droite");
let Last_Img_Clicked;
let dragged;
Array.from(ExoBonusImgsGauche).forEach((img) => {
  img.draggable = true;
  img.addEventListener('click', () => {
    Last_Img_Clicked = img;
  })
})
ExoBonusImgDroite.addEventListener('click', () => {
  ExoBonusImgDroite.src = Last_Img_Clicked.src;
  ExoBonusImgDroite.height = Last_Img_Clicked.height;
  ExoBonusImgDroite.width = Last_Img_Clicked.width;
})

document.addEventListener("drag", function(event) {
}, false);

document.addEventListener("dragstart", function(event) {
  dragged = event.target;
}, false);

document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  if(event.target.className === "droite" || event.target === ExoBonusImgDroite) {
    ExoBonusImgDroite.style.opacity = "0.5";
  }
}, false);

document.addEventListener("dragleave", function(event) {
  if(event.target.className === "droite" || event.target === ExoBonusImgDroite) {
    ExoBonusImgDroite.style.opacity = "1";
  }
}, false);

document.addEventListener("drop", function(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.preventDefault();
  if (event.target.className === "droite" || event.target === ExoBonusImgDroite) {
    ExoBonusImgDroite.src = dragged.src;
    ExoBonusImgDroite.height = dragged.height;
    ExoBonusImgDroite.width = dragged.width;
    ExoBonusImgDroite.style.opacity = "1";
  }

}, false);