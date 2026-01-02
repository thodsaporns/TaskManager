export function Home(container, navigate) {
  container.innerHTML = `
    <div class="page home">
      <h1>Task Manager</h1>

      <button id="addTask">เพิ่มงาน</button>

      <button id="doTask">ทำงาน</button>
    </div>
  `;

  document
    .getElementById('addTask')
    .onclick = () => navigate('addTask');

  document
    .getElementById('doTask')
    .onclick = () => navigate('doTask');
}