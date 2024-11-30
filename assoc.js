//Bar Chart for views over time
const viewsCnt = document.getElementById('viewsChart').getContext('2d');
const viewsChart = new Chart(viewsCnt, {
    type: 'bar',
    data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Event Views',
            data: [150, 85, 127, 45, 60],
            backgroundColor: '#800000',
            borderColor: '#600000',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {display: true}
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart: RSVP Distribution
const rsvpCnt = document.getElementById('rsvpChart').getContext('2d');
const rsvpChart = new Chart(rsvpCnt, {
    type: 'pie',
    data: {
        labels: ['Hackathon', 'Networking Night', 'AI Workshop'], // Example event names
        datasets: [{
            label: 'RSVP Distribution',
            data: [70, 50, 30], // Example data
            backgroundColor: ['#800000', '#e6b853', '#ffcc66'], // Colors for each section
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true },
        }
    }
});


// Handle "Create Post" modal display
document.getElementById('createPostButton').addEventListener('click', function () {
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('createPostModal').style.display = 'block';
});

// Handle modal close
document.getElementById('closeCreatePostModal').addEventListener('click', function () {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('createPostModal').style.display = 'none';
});

// Close modal when clicking on overlay
document.getElementById('modalOverlay').addEventListener('click', function () {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('createPostModal').style.display = 'none';
});