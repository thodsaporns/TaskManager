export function DoTask(container, navigate) {
  container.innerHTML = `
    <div class="page doTask">
      <h1>ทำงาน</h1>

      <p>(Pomodoro coming soon)</p>

      <button id="home">กลับ</button>
    </div>
  `;

  document
    .getElementById('home')
    .onclick = () => navigate('home');
}