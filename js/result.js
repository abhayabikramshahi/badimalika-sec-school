// Function to get query parameters from URL
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const paramPairs = queryString.split('&');
  
    paramPairs.forEach(pair => {
      const [key, value] = pair.split('=');
      params[key] = decodeURIComponent(value);
    });
  
    return params;
  }
  
  const params = getQueryParams();
  const classSelect = params.class;
  const username = params.username;
  
  if (!classSelect || !username) {
    alert('Invalid access. Please log in first.');
    window.location.href = 'login.html';
  }
  
  const jsonPath = `../Results/${classSelect}/students.json`;
  
  fetch(jsonPath)
    .then(response => response.json())
    .then(data => {
      const student = data.find(student => student.username === username);
      
      if (student) {
        document.getElementById('result').style.display = 'block';
        document.getElementById('student-name').innerText = student.name;
  
        const resultTable = document.getElementById('result-table');
  
        for (const [subject, marks] of Object.entries(student.results)) {
          const row = document.createElement('tr');
          row.innerHTML = `<td>${subject}</td><td>${marks}</td>`;
          resultTable.appendChild(row);
        }
      } else {
        alert('Student not found.');
        window.location.href = 'login.html';
      }
    })
    .catch(error => {
      console.error('Error loading JSON file:', error);
    });
  