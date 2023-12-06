// Add your JavaScript code here

// Mock user data for demonstration purposes
const userData = {
    totalUsers: 1024,
    maleUsers: 768,
    femaleUsers: 256,
    fullTime: 205,
    partTime: 317,
    dailyWage: 502,
};
// console.log('check script');
// localStorage.getItem('username')

// Display user information on the dashboard
document.addEventListener('DOMContentLoaded', function () {
    console.log("dashboard");
    const nameElement = document.getElementById('name');
    const logoutElement = document.getElementById('logout');

    // Retrieve username from local storage
    let storedUsername = localStorage.getItem('username');
    // let storedUsername = 'Rupam';

    // Redirect to login if username is not found
    if (!storedUsername) {
        window.location.href = 'login.html';
    }
    // console.log(nameElement);
    // console.log(storedUsername);

    // Display username
    nameElement.innerText = storedUsername;

    // Logout functionality
    logoutElement.addEventListener('click', function () {
        // Remove username from local storage
        localStorage.removeItem('username');

        // Redirect to login
        window.location.href = 'login.html';
    });

    
    // Display pi charts and numbers based on user data using Chart.js

    // Access the canvas elements
    const genderChartCanvas = document.getElementById('genderChart').getContext('2d');
    const employmentChartCanvas = document.getElementById('employmentChart').getContext('2d');

    // Data for pie charts
    const genderData = [userData.maleUsers, userData.femaleUsers];
    const employmentData = [userData.fullTime, userData.partTime, userData.dailyWage];

    
    // Create pie charts using Chart.js
    const genderChart = new Chart(genderChartCanvas, {
        type: 'pie',
        data: {
            labels: ['Male Users', 'Female Users'],
            datasets: [{
                data: genderData,
                backgroundColor: ['#3498db', '#e74c3c'],
            }],
        },
    });

    const employmentChart = new Chart(employmentChartCanvas, {
        type: 'pie',
        data: {
            labels: ['Full Time', 'Part Time', 'Daily Wage'],
            datasets: [{
                data: employmentData,
                backgroundColor: ['#2ecc71', '#f39c12', '#9b59b6'],
            }],
        },
    });

    // Display numbers
    document.getElementById('totalUsers').textContent = userData.totalUsers;
    document.getElementById('maleUsers').textContent = userData.maleUsers;
    document.getElementById('femaleUsers').textContent = userData.femaleUsers;

    document.getElementById('totalUsersEmployment').textContent = userData.totalUsers;
    document.getElementById('fullTime').textContent = userData.fullTime;
    document.getElementById('partTime').textContent = userData.partTime;
    document.getElementById('dailyWage').textContent = userData.dailyWage;
    
});


