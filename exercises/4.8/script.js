let backgroundColorChange;
let textColorChange;
let defaultBgColor = localStorage.getItem('backgroundColor');
let defaultTxtColor = localStorage.getItem('pColor');
let textSizeInput = document.querySelector('.textSize');
let textSize = document.querySelector('p');
let lineHeightInput = document.querySelector('.lineHeight');
let fontFamilyChangeInput = document.querySelector('.fontFamilyChange');

textSizeInput.addEventListener('change', changeTextSize);
lineHeightInput.addEventListener('change', changelineHeight);
fontFamilyChangeInput.addEventListener('change', changeFontFamily);

window.addEventListener('load', startup);
window.addEventListener('load', startup2);
window.addEventListener('load', changeIt());

function changeFontFamily() {
  let newFont = fontFamilyChangeInput.value;
  localStorage.setItem('fontFamilyFont', newFont);
  changeIt();
}

function changeTextSize() {
  let textSizeValue = textSizeInput.value;
  localStorage.setItem('fontType', textSizeValue);
  changeIt();
}

function changelineHeight() {
  let lineHeight2 = lineHeightInput.value;
  localStorage.setItem('lineHeight', lineHeight2);
  changeIt();
} 

function startup() {
  backgroundColorChange = document.querySelector('.backgroundColor');
  backgroundColorChange.value = defaultBgColor;
  backgroundColorChange.addEventListener('input', updateFirst, false);
  backgroundColorChange.addEventListener('change', updateAll, false);
  backgroundColorChange.select();
}

function startup2() {
  textColorChange = document.querySelector('.textColor');
  textColorChange.value = defaultTxtColor;
  textColorChange.addEventListener('input', updateFirst2, false);
  textColorChange.addEventListener('change', updateAll2, false);
  textColorChange.select();
}


function updateFirst(event) {
  let body = document.querySelector('body');

  if (body) {
    body.style.backgroundColor = event.target.value;
  }
}

function updateFirst2(event) {
  let p = document.querySelector('p');

  if (p) {
    p.style.color = event.target.value;
  }
}

function updateAll(event) {
  
  document.querySelectorAll('body').forEach(function (body) {
    body.style.backgroundColor = event.target.value;
  });
  localStorage.setItem('backgroundColor', event.target.value);
}

function updateAll2(event) {
  document.querySelectorAll('p').forEach(function (p) {
    p.style.color = event.target.value;
  });
  localStorage.setItem('pColor', event.target.value);
  
}
