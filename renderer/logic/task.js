let tasks = [];

export function addTask(title) {
  tasks.push({
    id: Date.now(),
    title,
    done: false,
  });
}

export function getTasks() {
  return tasks;
}