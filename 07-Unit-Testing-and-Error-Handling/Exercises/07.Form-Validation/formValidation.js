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
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

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

        if (password !== confirmPassword) {
            confirmPasswordRef.style.border = 'solid red';
            passwordRef.style.border = 'solid red';
        }

        if (companyInfo.style.display === 'block') {
            if (companyNumber >= 1000 && companyNumber <= 9999) {
                companyNumberRef.style.border = 'none';
            } else {
                companyNumberRef.style.border = 'solid red';
            }
        }

        const inputs = Array.from(document.querySelectorAll('input'));
        const filtered = inputs.filter(input => input.style.border === 'solid red');
        if (filtered.length === 0 ) {
            validDiv.style.display = 'block';
        }
    })

    function validateInput(input, regex, ref) {
        return !regex.test(input) ? ref.style.border = 'solid red' : ref.style.border = 'none';
    }
}
