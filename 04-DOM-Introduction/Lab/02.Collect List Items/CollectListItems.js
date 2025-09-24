function extractText() {
    const main = Array.from(document.getElementsByTagName('li'));
    const text = main.map(el => el.textContent).join('\n');
    const textArea = document.getElementById('result');
    textArea.value = text;
}