export default (id, caption, count, isChecked = false) => `<input
    type="radio"
    id="${id}"
    class="filter__input visually-hidden"
    name="filter"
    ${isChecked ? `checked` : ``}
    ${count ? `` : `disabled`}
  />
  <label for="${id}" class="filter__label"
    >${caption} <span class="filter__overdue-count">${count}</span></label
  >`;
