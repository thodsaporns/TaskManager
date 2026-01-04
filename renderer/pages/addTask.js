import { addTask } from '../logic/task.js';

export function AddTask(container, navigate) {
  container.innerHTML = `
    <div class="page addTask">
      <h2>เพิ่มงาน</h2>

      <input id="taskInput" placeholder="ชื่องาน" />
      
      ,<button id="saveTask">บันทึกงาน</button>
      <button id="home">กลับ</button>
    </div>
  `;


  document.getElementById('saveTask').onclick = () => {
    const title = document.getElementById('taskInput').value.trim();
    if (!title) return;

    addTask(title);
    navigate('home');
  };

  document
    .getElementById('home')
    .onclick = () => navigate('home');
}