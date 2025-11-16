const STORAGE_KEY = 'tasks';
function getTasks() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function saveTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
function initTasks() {
  const tasks = getTasks() ?? [];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
function removeTask(id) {
  const tasks = getTasks();
  const filteredTasks = tasks.filter(task => task.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredTasks));
}
const STORAGE_THEME = 'theme';
function getTheme() {
  return JSON.parse(localStorage.getItem(STORAGE_THEME));
}
function saveTheme(theme) {
    localStorage.setItem(STORAGE_THEME, JSON.stringify(theme));
}

export default { getTasks, saveTask, initTasks, removeTask, getTheme, saveTheme,};
