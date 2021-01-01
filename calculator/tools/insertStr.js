"use strict";


function insertStr(text, str, insertionIndex,isIndexSpace) {

  let newText = "";
  let d = isIndexSpace ?  insertionIndex + 1 : insertionIndex;

  for (let i = 0; i < insertionIndex; i++) {
    newText += text[i];
  }
  for (let j = 0; j < str.length; j++) {
    newText += str[j];
  }
  for (let i = d; i < text.length; i++) {
    newText += text[i];
  }
  return newText;
}

