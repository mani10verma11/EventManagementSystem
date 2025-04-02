document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const selectedRole = document.querySelector('.role-select').value;

    if (selectedRole === 'customer') {
        window.location.href = 'event-form.html'; // Redirect to Event Form
    } else if (selectedRole === 'serviceProvider') {
        window.location.href = 'dashboard.html'; // Redirect to Dashboard
    }
});