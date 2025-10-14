function notify(message) {
  const notificationRef = document.getElementById('notification');
  notificationRef.textContent = message;
  notificationRef.style.display = 'block';

  notificationRef.addEventListener('click', (e) => {
    e.target.style.display = 'none';
  })
}