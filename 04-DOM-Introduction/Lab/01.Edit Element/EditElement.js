function editElement(htmlRef, match, replacer) {
    let content = htmlRef.textContent;
    let replaced = content.replaceAll(match, replacer);
    htmlRef.textContent = replaced;
}