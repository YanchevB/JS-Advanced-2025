function toggle() {
    const btnRef = document.getElementsByClassName('button');
    const moreTextRef = document.getElementById('extra');
    
    if (btnRef[0].textContent === 'Less') {
        btnRef[0].textContent = 'More';
        moreTextRef.style.display = 'none';
    } else {
        moreTextRef.style.display = 'block';
        btnRef[0].textContent = 'Less';
    }
}