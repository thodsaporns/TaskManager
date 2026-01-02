export function AddTask(container, navigate) {
  container.innerHTML = `
    <div class="page addTask">
      <h1>เพิ่มงาน</h1>

      <p>อยากนอน</p>

      <button id="home">กลับ</button>
    </div>
  `;

  document
    .getElementById('home')
    .onclick = () => navigate('home');
}