function solve() {
    document.querySelector('form').addEventListener('submit', onSubmit);
    const taskRef = document.getElementById('task');
    const descriptionRef = document.getElementById('description');
    const dateRef = document.getElementById('date');
    const [formSelectionRef, openSectionRef, inProgressSectionRef, completeSectionRef] = document.querySelectorAll('section');
    const openRef = openSectionRef.children[1];
    const inProgressRef = inProgressSectionRef.children[1];
    const completeRef = completeSectionRef.children[1];

    function onSubmit (e) {
        e.preventDefault();
        const task = taskRef.value;
        const description = descriptionRef.value;
        const date = dateRef.value;
        taskRef.value = '';
        descriptionRef.value = '';
        dateRef.value = '';

        if (!task || !description || !date) {
            return;
        }

        const article = createArticle(task, description, date);
        openRef.appendChild(article);
    }

    function createArticle(task, description, date){
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = task;
        const pDescription = document.createElement('p');
        pDescription.textContent = 'Description: ' + description;
        const pDate = document.createElement('p');
        pDate.textContent = 'Due Date: ' + date;

        const container = document.createElement('div');
        container.classList.add('flex');

        const startBtn = createBtn('green', 'Start', onStart);
        const delBtn = createBtn('red', 'Delete', onDelete);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(container);

        container.appendChild(startBtn);
        container.appendChild(delBtn);

        return article;
    }

    function createBtn(classList, text, handler) {
        const btn = document.createElement('button');
        btn.classList.add(classList);
        btn.textContent = text;
        btn.addEventListener('click', handler);
        return btn;
    }

    function onStart(e) {
        const container = e.target.parentElement;
        const article = container.parentElement;
        container.innerHTML = '';
        container.appendChild(createBtn('red', 'Delete', onDelete));
        container.appendChild(createBtn('orange', 'Finish', onFinish));

        inProgressRef.appendChild(article);
    }

    function onDelete(e) {
        const container = e.target.parentElement;
        const article = container.parentElement;
        article.remove();
    }

    function onFinish(e) {
        const container = e.target.parentElement;
        const article = container.parentElement;
        container.remove();
        completeRef.appendChild(article);
    }
}