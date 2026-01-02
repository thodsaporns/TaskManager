import { Home } from './views/home.js';
import { AddTask } from './views/addTask.js';
import { DoTask } from './views/doTask.js';

let currentView = 'home';

function navigate(view) {
  currentView = view;
  render();
}

function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  switch (currentView) {
    case 'home':
      Home(app, navigate);
      break;
    case 'addTask':
      AddTask(app, navigate);
      break;
    case 'doTask':
      DoTask(app, navigate);
      break;
  }
}

render();