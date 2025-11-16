import localStorageApi from "./local-storage-api";
import { refs } from "./refs";
export function applyInitialTheme() {
  const theme = localStorageApi.initTheme();
  refs.body.classList.add(theme);
}
export function onThemeChanged() {
       const isDark = refs.body.classList.contains('theme-dark');
  const newTheme = isDark ? 'theme-light' : 'theme-dark';
  refs.body.classList.remove('theme-dark');
  refs.body.classList.add(newTheme);
  
  localStorageApi.saveTheme(newTheme);
}