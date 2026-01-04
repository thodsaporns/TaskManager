import { Home } from './pages/home.js';
import { AddTask } from './pages/addTask.js';
import { DoTask } from './pages/doTask.js';
import { Tasks } from './pages/tasks.js';

const routes = {
  home: Home,
  addTask: AddTask,
  doTask: DoTask,
  tasks: Tasks,
};

let currentView = 'home';

export function navigate(view) {
  currentView = view;
  render();
}

function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const Page = routes[currentView];
  if (Page) {
    Page(app, navigate);
  } else {
    app.innerHTML = '<h1>404</h1>';
  }
}

render();
