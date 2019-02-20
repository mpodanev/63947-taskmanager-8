const mainFilter = document.querySelector(`.main__filter`);
const filterTemplate = document.querySelector(`#element-template`).content.querySelector(`.filters`);
const filters = [
  {
    id: `filter__all`,
    checked: true,
    title: `ALL`,
    count: 15
  },
  {
    id: `filter__overdue`,
    checked: false,
    title: `OVERDUE`,
    count: 0
  },
  {
    id: `filter__today`,
    checked: false,
    title: `TODAY`,
    count: 0
  },
  {
    id: `filter__favorites`,
    checked: false,
    title: `FAVORITES`,
    count: 7
  },
  {
    id: `filter__repeating`,
    checked: false,
    title: `Repeating`,
    count: 2
  },
  {
    id: `filter__tags`,
    checked: false,
    title: `Tags`,
    count: 6
  },
  {
    id: `filter__archive`,
    checked: false,
    title: `ARCHIVE`,
    count: 115
  },
]
// mainFilter.appendChild(filterTemplate);
const addFilter = (id, title, count, isChecked = false) => {
  const input = document.createElement(`input`);
  input.type = `radio`;
  input.id = id;
  input.classList.add(`filter__input`);
  input.classList.add(`visually-hidden`);
  input.checked = isChecked;
  input.disabled = count ? false : true;
  mainFilter.appendChild(input);

  const label = document.createElement(`label`);
  label.for = id;
  label.className = `filter__label`;
  label.innerHTML = `${title} <span class="filter__overdue-count">${count}</span>`;
  mainFilter.appendChild(label);
}

for (let i = 0; i < filters.length; i++) {
  const item = filters[i];
  addFilter(item.id, item.title, item.count, item.checked);
}

const board = document.querySelector(`.board__tasks`);
const taskTemplate = document.querySelector(`#element-template`).content.querySelector(`.card`);

const addTask = (count) => {
  for (let i = 0; i < count; i++) {
    const taskElement = taskTemplate.cloneNode(true);
    board.appendChild(taskElement);
  }
}

addTask(7);

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

const addRandomTasks = (e) => {
  const target = e.target;
  if (target.className == `filter__label`) {
    board.innerHTML = ``;
    const countTasks = randomInteger(1, 10);
    addTask(countTasks);
  }
}

mainFilter.addEventListener(`click`, addRandomTasks);
