function searchStudent() {
    const classSelect = document.getElementById('classSelect').value;
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultContainer = document.getElementById('result');

    resultContainer.innerHTML = '';

    if (!classSelect) {
        resultContainer.innerHTML = '<p class="no-result">Please select a class.</p>';
        return;
    }


    if (!searchInput) {
        resultContainer.innerHTML = '<p class="no-result">Please enter a roll number or name.</p>';
        return;
    }

    // Path to the JSON file for the selected class
    const jsonPath = `../Results/${classSelect}/students.json`;
    console.log('Fetching JSON from:', jsonPath); 

    fetch(jsonPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Find student by roll number or name
            const student = data.find(student =>
                student.roll_no.toString() === searchInput ||
                student.name.toLowerCase().includes(searchInput)
            );

            if (student) {
                // Display student information
                const studentInfo = `
                    <p><strong>Name:</strong> ${student.name}</p>
                    <p><strong>Roll No:</strong> ${student.roll_no}</p>
                    <p><strong>Class:</strong> ${student.class}</p>
                    <p><strong>Section:</strong> ${student.section}</p>
                    <p><strong>GPA:</strong> ${student.GPA}</p>
                    <p><strong>Grades:</strong></p>
                    <ul>
                        <li><strong>Math:</strong> ${student.grades.Math}</li>
                        <li><strong>Science:</strong> ${student.grades.Science}</li>
                        <li><strong>English:</strong> ${student.grades.English}</li>
                        <li><strong>Social Studies:</strong> ${student.grades['Social Studies']}</li>
                        <li><strong>Nepali:</strong> ${student.grades.Nepali}</li>
                    </ul>
                `;
                resultContainer.innerHTML = studentInfo;
            } else {
                resultContainer.innerHTML = '<p class="no-result">No student found with this roll number or name.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching JSON file:', error);
            resultContainer.innerHTML = '<p class="no-result">Error loading student data. Please try again later.</p>';
        });
}
