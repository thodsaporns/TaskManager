export function Home(container, navigate) {
  container.innerHTML = `
    <div class="page home">
      <h1>Task Manager</h1>

      <button class="addTask-btn" id="addTask">เพิ่มงาน</button>
      <button class="pic-btn"></button>
      <button id="doTask">ทำงาน</button>
      <button id="viewTasks">ดูงานทั้งหมด</button>
    </div>
  `;

  document.getElementById('addTask').onclick = () => navigate('addTask');
  document.getElementById('doTask').onclick = () => navigate('doTask');
  document.getElementById('viewTasks').onclick = () => navigate('tasks');
}