function validate() {
    const validationRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
    const inputRef = document.getElementById('email');

    inputRef.addEventListener('change', (e) => {
        const input = inputRef.value;
        const target = e.target;
        
        !validationRegex.test(input) ? target.classList.add('error') : target.classList.remove('error');
    })
}