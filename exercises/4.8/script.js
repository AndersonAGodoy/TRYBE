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

