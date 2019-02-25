import makeFilter from './make-filter';
import makeTask from './make-task';


const mainFilter = document.querySelector(`.main__filter`);
const board = document.querySelector(`.board__tasks`);
const initialNumberOfTasks = 7;
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
];

for (let i = 0; i < filters.length; i++) {
  const item = filters[i];
  const filter = makeFilter(item.id, item.title, item.count, item.checked);
  mainFilter.insertAdjacentHTML(`beforeend`, filter);
}

const addTask = (count) => {
  for (let i = 0; i < count; i++) {
    const task = makeTask();
    board.insertAdjacentHTML(`beforeend`, task);
  }
};

addTask(initialNumberOfTasks);

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
};

const addRandomTasks = (e) => {
  const target = e.target;
  if (target.className === `filter__label`) {
    board.innerHTML = ``;
    const countTasks = randomInteger(1, 10);
    addTask(countTasks);
  }
};

mainFilter.addEventListener(`click`, addRandomTasks);
