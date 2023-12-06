document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Assuming login is successful, for simplicity
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);

    // Redirect to the dashboard
    window.location.href = 'dashboard.html';
});
