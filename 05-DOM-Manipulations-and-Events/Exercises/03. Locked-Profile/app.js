function lockedProfile() {
    const btns = document.querySelectorAll('button');
    Array.from(btns).forEach(btn => btn.addEventListener('click', onClick));

    function onClick(e) {
        const btn = e.target;
        const card = btn.parentElement;
        const radioBtn = Array.from(card.querySelectorAll("input[type='radio']"))
            .filter(x => x.checked)[0];
        const profileState = radioBtn.value;
        const moreInfoDiv = card.querySelector('div');

        if (profileState === 'lock') {
            return;
        }

        if (btn.textContent === 'Show more') {
            moreInfoDiv.style.display === 'block';
            btn.textContent = 'Hide it';
            debugger;
        } else {
            moreInfoDiv.style.display === 'none';
            btn.textContent = 'Show more';
        }
    }
}