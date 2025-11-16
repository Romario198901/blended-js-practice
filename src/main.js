import { onTaskDelete, onTaskFormSubmit } from './js/handlers';
import { refs } from './js/refs';
import localStorageApi from './js/local-storage-api';
import { renderTaskList } from './js/render-tasks';
import { applyInitialTheme, onThemeChanged } from './js/theme-switcher';
/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
localStorageApi.initTasks();
renderTaskList(localStorageApi.getTasks());
refs.form.addEventListener('submit', onTaskFormSubmit);
refs.taskList.addEventListener('click', onTaskDelete);
applyInitialTheme();
refs.buttonChangeTheme.addEventListener('click', onThemeChanged);
