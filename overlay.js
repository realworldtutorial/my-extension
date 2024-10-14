// Tạo phần tử overlay
const overlay = document.createElement('div');
overlay.id = 'countdownOverlay';
overlay.innerHTML = `
  <h1>Current Time</h1>
  <div id="clock"></div>
  <h2>Countdown</h2>
  <div id="countdown"></div>
  <p id="message"></p>
`;
document.body.appendChild(overlay);

// Ngày kỷ niệm
const targetDate = new Date('2024-12-31T00:00:00');

function updateClock() {
    const now = new Date();

    // Hiển thị thời gian hiện tại
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;

    // Tính thời gian còn lại
    const timeDiff = targetDate - now;

    if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Cập nhật đếm ngược
        document.getElementById('countdown').textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Thông điệp kỷ niệm
        document.getElementById('message').textContent = `Only ${days} days left until our 5th wedding anniversary.`;
    } else {
        // Đã đến ngày kỷ niệm
        document.getElementById('countdown').textContent = "Today is our 5th wedding anniversary!";
        document.getElementById('message').textContent = "Happy 5th anniversary!";
    }
}

// Cập nhật mỗi giây
setInterval(updateClock, 1000);
