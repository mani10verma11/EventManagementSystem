function loadEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    const tasklist = document.getElementById('tasklist');
    tasklist.innerHTML = ''; // Clear existing tasks

    events.forEach((event, index) => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';
        taskCard.innerHTML = `
            <div class="task-header">
                <h1 class="priority">Events-</h1>
                <h4 class="date"> Event Date: ${event.eventDate}</h4>
            </div>
            <div class="task-title">${event.eventName}</div>
            <p class="task-description">${event.description}</p>
            <p><strong>Customer Name:</strong> ${event.customerName}</p>
            <p><strong>Contact Number:</strong> ${event.contactNumber}</p>
            <button class="btn accept-btn" onclick="acceptTask(${index})">Accept</button>
            <button class="btn reject-btn" onclick="rejectTask(${index})">Reject</button>
            <button class="btn complete-btn" onclick="completeTask(${index})">Complete</button>
        `;
        tasklist.appendChild(taskCard);
    });
}

// Accept Task
function acceptTask(index) {
    const acceptButtons = document.querySelectorAll('.accept-btn');
    const acceptButton = acceptButtons[index];
    acceptButton.innerHTML = 'Event Accepted';
    acceptButton.style.backgroundColor = 'white';
    acceptButton.style.color = 'black';
    acceptButton.disabled = true; // Disable the button to indicate the task is accepted
}

// Reject Task
function rejectTask(index) {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.splice(index, 1); // Remove the rejected task
    localStorage.setItem('events', JSON.stringify(events));
    loadEvents(); // Refresh the task list
}

// Complete Task
function completeTask(index) {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    events.splice(index, 1); // Remove the completed task
    localStorage.setItem('events', JSON.stringify(events));
    loadEvents(); // Refresh the task list
}

// Load events on page load
window.onload = loadEvents;