window.addEventListener("load", solve);

function solve() {
  const activityRef = document.getElementById('type');
  const intensityRef = document.getElementById('intensity');
  const caloriesRef = document.getElementById('calories');
  const durationRef = document.getElementById('duration');
  const dateRef = document.getElementById('date');
  const addBtn = document.getElementById('add-activity');
  const ulPreview = document.getElementById('preview-activity');
  const tbody = document.getElementById('activities-table');

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const activity = activityRef.value;
    const intensity = intensityRef.value;
    const calories = caloriesRef.value;
    const duration = durationRef.value;
    const date = dateRef.value;

    activityRef.value = '';
    intensityRef.value = '';
    caloriesRef.value = '';
    durationRef.value = '';
    dateRef.value = '';

    if (!activity || !intensity || !calories || !duration || !date) {
      return;
    }

    const li = createLi(activity, intensity, duration, date, calories);

    ulPreview.appendChild(li);

    addBtn.disabled = true;
  })

  function createLi(activity, intensity, duration, date, calories) {
    const li = document.createElement('li');
    const article = document.createElement('article');

    const pActivity = document.createElement('p');
    pActivity.textContent = `Activity: ${activity}`;
    const pIntensity = document.createElement('p');
    pIntensity.textContent = `Intensity: ${intensity}`;
    const pDuration = document.createElement('p');
    pDuration.textContent = `Duration: ${duration}`;
    const pDate = document.createElement('p');
    pDate.textContent = `Date: ${date}`;
    const pCalories = document.createElement('p');
    pCalories.textContent = `Calories: ${calories}`;

    const container = document.createElement('div');
    container.classList.add('btn-container');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', onEdit);

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.classList.add('next-btn');
    nextBtn.addEventListener('click', onNext);

    article.appendChild(pActivity);
    article.appendChild(pIntensity);
    article.appendChild(pDuration);
    article.appendChild(pDate);
    article.appendChild(pCalories);

    container.appendChild(editBtn);
    container.appendChild(nextBtn);

    li.appendChild(article);
    li.appendChild(container);
    return li;
  }

  function onEdit(e) {
    const li = e.target.parentElement.parentElement;
    const article = li.children[0];
  
    const [activityP, intensityP, durationP, dateP, caloriesP] = article.children
    activityRef.value = activityP.textContent.split(' ')[1]
    intensityRef.value = intensityP.textContent.split(' ')[1]
    durationRef.value = durationP.textContent.split(' ')[1]
    dateRef.value = dateP.textContent.split(' ')[1];
    caloriesRef.value = caloriesP.textContent.split(' ')[1]

    li.remove();
    addBtn.disabled = false;
  }

  function onNext(e) {
    addBtn.disabled = false;
    const li = e.target.parentElement.parentElement;
    const article = li.children[0];
    const [activityTd, intensityTd, durationTd, dateTd, caloriesTd] = article.children

    li.remove();

    const tr = document.createElement('tr');
    const tdType = document.createElement('td');
    tdType.textContent = activityTd.textContent.split(' ')[1];
    tdType.classList.add('type-cell')

    const tdDuration = document.createElement('td');
    tdDuration.textContent = durationTd.textContent.split(' ')[1];
    tdDuration.classList.add('duration-cell');

    const tdCalories = document.createElement('td');
    tdCalories.textContent = caloriesTd.textContent.split(' ')[1];
    tdCalories.classList.add('calories-cell');

    const tdDate = document.createElement('td');
    tdDate.textContent = dateTd.textContent.split(' ')[1];
    tdDate.classList.add('date-cell');

    const tdIntensity = document.createElement('td');
    tdIntensity.textContent = intensityTd.textContent.split(' ')[1];
    tdIntensity.classList.add('intensity-cell')

    const tdBtn = document.createElement('td');
    tdBtn.classList.add('btn-cell');

    const delBtn = document.createElement('button');
    delBtn.classList.add('delete-btn');
    delBtn.textContent = 'Delete'
    delBtn.addEventListener('click', onDel);

    tr.appendChild(tdType);
    tr.appendChild(tdDuration);
    tr.appendChild(tdCalories);
    tr.appendChild(tdDate);
    tr.appendChild(tdIntensity);

    tdBtn.appendChild(delBtn)
    tr.appendChild(tdBtn);

    tbody.appendChild(tr);

    return tr;
  }

  function onDel(e) {
    const tr = e.target.parentElement.parentElement;
    tr.remove()
  }
}
