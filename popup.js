// Đặt ngày đếm ngược là 31/12/2024
const targetDate = new Date('2024-12-31T00:00:00');

function updateClock() {
    const now = new Date();

    // Hiển thị đồng hồ hiện tại
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
        // Nếu đã đến ngày kỷ niệm
        document.getElementById('countdown').textContent = "Today is our 5th wedding anniversary!";
        document.getElementById('message').textContent = "Happy 5th anniversary!";
    }
}

// Cập nhật đồng hồ và đếm ngược mỗi giây
setInterval(updateClock, 1000);
