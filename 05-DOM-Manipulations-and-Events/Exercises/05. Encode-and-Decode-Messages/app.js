function encodeAndDecodeMessages() {
    const btns = Array.from(document.querySelectorAll('button'));
    const encodeBtn = btns[0];
    const decodeBtn = btns[1];

    const textareasRef = Array.from(document.querySelectorAll('#main textarea'));
    const encodeAreaValue = textareasRef[0];
    const decodeAreaValue = textareasRef[1];

    encodeBtn.addEventListener('click', encodeMessage);
    decodeBtn.addEventListener('click', decodeMessage);

    function encodeMessage() {
        const newMessage = [];
        for (let char of encodeAreaValue.value) {
            const currentCharCode = char.charCodeAt(0);
            char = String.fromCharCode(currentCharCode + 1);
            newMessage.push(char);
        }
        decodeAreaValue.value = newMessage.join('');
        encodeAreaValue.value = '';
    }

    function decodeMessage() {
        const decodedMessage = [];
        for (let char of decodeAreaValue.value) {
            const currentCharCode = char.charCodeAt(0);
            char = String.fromCharCode(currentCharCode - 1);
            decodedMessage.push(char);
        }
        decodeAreaValue.value = decodedMessage.join('');
    }
}