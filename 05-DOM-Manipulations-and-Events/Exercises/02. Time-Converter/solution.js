function attachEventsListeners() {
    const btns = document.querySelectorAll('input[type="button"]');
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');
    for (let btn of btns) {
        btn.addEventListener('click', onClick);
    }

    function onClick(e) {
        const target = e.target;
        
        if (target === document.getElementById('daysBtn')) {
            const days = Number(daysInput.value);
            hoursInput.value = days * 24;
            minutesInput.value = days * 1440;
            secondsInput.value = days * 86400;
        } else if (target === document.getElementById('hoursBtn')) {
            const hours = Number(hoursInput.value);
            daysInput.value = hours / 24;
            minutesInput.value = hours * 60;
            secondsInput.value = hours * 3600;
        } else if (target === document.getElementById('minutesBtn')) {
            const minutes = Number(minutesInput.value);
            daysInput.value = minutes / 1440;
            hoursInput.value = minutes / 60;
            secondsInput.value = minutes * 60;
        } else if (target === document.getElementById('secondsBtn')) {
            const seconds = Number(secondsInput.value);
            daysInput.value = seconds / 86400;
            hoursInput.value = seconds / 3600;
            minutesInput.value = seconds / 60;
        }
    }
}