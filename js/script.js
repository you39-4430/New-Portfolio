function radioDeselection() {
    for (const element of document.getElementsByName('radio')) {
        element.checked = false;
    }
}