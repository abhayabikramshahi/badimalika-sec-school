document.getElementById('login-btn').addEventListener('click', function() {
    const classSelect = document.getElementById('class-select').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
  
    // Set the path dynamically
    const jsonPath = `../Results/${classSelect}/students.json`;
  
    fetch(jsonPath)
      .then(response => response.json())
      .then(data => {
        const student = data.find(student => student.username === username && student.password === password);
        
        if (student) {
          // Redirect to result.html with query parameters for class and username
          window.location.href = `result.html?class=${classSelect}&username=${username}`;
        } else {
          alert('Invalid username or password.');
        }
      })
      .catch(error => {
        console.error('Error loading JSON file:', error);
      });
  });
  