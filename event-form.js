document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const eventData = {
        eventName: this.elements['eventName'].value, // Use the name attribute for inputs
        customerName: this.elements['customerName'].value, // Ensure these keys match later references
        eventDate: this.elements['eventDate'].value,
        contactNumber: this.elements['contactNumber'].value,
        category: this.elements['category'].value,
        description: this.elements['description'].value,
    };

    // Get existing events from local storage or create a new array
    const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
    existingEvents.push(eventData); // Push the new event data into the array
    localStorage.setItem('events', JSON.stringify(existingEvents)); // Save the updated array to local storage

    // Show an alert to confirm the event was created
    alert('Event created successfully!');

    // Reset the form
    this.reset();
});