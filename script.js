"use strict";

function transliterate() {
    var inputText = document.getElementById('inputText').value;
    document.getElementById('outputTextRegular').textContent = inputText;
    document.getElementById('outputTextOrnamental').textContent = inputText;
}

function swapFont(fontType) {
    if (fontType === 'regular') {
        document.getElementById('outputTextRegular').style.display = 'block';
        document.getElementById('outputTextOrnamental').style.display = 'none';
    } else if (fontType === 'ornamental') {
        document.getElementById('outputTextRegular').style.display = 'none';
        document.getElementById('outputTextOrnamental').style.display = 'block';
    }
}

// Set initial state
document.getElementById('outputTextRegular').style.display = 'block';
document.getElementById('outputTextOrnamental').style.display = 'none';
