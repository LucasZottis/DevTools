﻿function copyClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("form-control");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}