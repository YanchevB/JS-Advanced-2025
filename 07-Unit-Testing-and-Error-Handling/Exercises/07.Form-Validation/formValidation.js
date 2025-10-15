function validate() {
    const usernameRef = document.getElementById('username');
    const emailRef = document.getElementById('email');
    const passwordRef = document.getElementById('password');
    const confirmPasswordRef = document.getElementById('confirm-password');

    const isCompanyRef = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumberRef = document.getElementById('companyNumber');

    const submitBtn = document.getElementById('submit');
    const validDiv = document.getElementById('valid');

    const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
    const passwordRegex = /^\w{5,15}$/;
    const emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;

    isCompanyRef.addEventListener('change', () => {
        companyInfo.style.display = 
            companyInfo.style.display === 'none' ? 'block' : 'none';
    })

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const username = usernameRef.value;
        const email = emailRef.value;
        const password = passwordRef.value;
        const confirmPassword = confirmPasswordRef.value;
        const companyNumber = Number(companyNumberRef.value);

        validateInput(username, usernameRegex, usernameRef);
        validateInput(email, emailRegex, emailRef);
        validateInput(password, passwordRegex, passwordRef);
        validateInput(confirmPassword, passwordRegex, confirmPasswordRef);

        if (password !== confirmPassword) {
            confirmPasswordRef.style.borderColor = 'red';
            passwordRef.style.borderColor = 'red';
        }

        if (companyInfo.style.display === 'block') {
            if (companyNumber >= 1000 && companyNumber <= 9999) {
                companyNumberRef.style.borderColor = '';
            } else {
                companyNumberRef.style.borderColor = 'red';
            }
        }

        const inputs = Array.from(document.querySelectorAll('input'));
        const filtered = inputs.filter(input => input.style.borderColor === 'red');
        if (filtered.length === 0 ) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    })

    function validateInput(input, regex, ref) {
        return !regex.test(input) ? ref.style.borderColor = 'red' : ref.style.borderColor = '';
    }
}
