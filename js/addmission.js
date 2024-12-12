function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const className = document.getElementById('class').value;

    // Create an object for the form data
    const studentData = { name, age, gender, className };

    // Get existing students from localStorage or initialize as an empty array
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Push new student data to the array
    students.push(studentData);

    // Save updated data back to localStorage
    localStorage.setItem('students', JSON.stringify(students));

    // Show success popup
    const popup = document.getElementById('successPopup');
    popup.style.display = 'flex';

    // Hide popup after 3 seconds
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);

    // Clear the form fields
    document.getElementById('admissionForm').reset();
}