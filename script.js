// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to create and add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => li.remove();

  // Append the delete button to the task list item
  li.appendChild(deleteButton);

  // Toggle task completion when clicked
  li.onclick = () => li.classList.toggle('completed');

  // Append the new task to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

// Event listener for Add Task button
addTaskButton.addEventListener('click', addTask);

// Allow pressing Enter key to add task
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
