import { getTasks } from '../logic/task.js';

export function Tasks(container, navigate) {
    
  const tasks = getTasks();
  container.innerHTML = `
    <div class="page tasks">
      <h1>งานทั้งหมด</h1>
        <ul>
            ${
                tasks.length === 0 
                ? '<li>ยังไม่มีงาน</li>'
                : tasks.map(t => `<li>${t.title}</li>`).join('')
            }
      </ul>
      <button id="home">กลับ</button>
    </div>
  `;

  document
    .getElementById('home')
    .onclick = () => navigate('home');
}