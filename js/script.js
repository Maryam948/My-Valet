const videoUpload = document.getElementById('videoUpload');
const videoPlayer = document.getElementById('videoPlayer');
videoUpload.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const videoURL = URL.createObjectURL(file);
    videoPlayer.src = videoURL;
  }
});
 
  // لتتبع آخر عنصر تم فتحه
  let lastOpened = null;

  function showInfo(type) {
   
    const boxes = {
      available: document.getElementById('available-details'),
      occupied: document.getElementById('occupied-details'),
      route: document.getElementById('route-details')
    };

    // بيانات افتراضية - يمكنك ربطها بذكاء اصطناعي أو API لاحقًا
    const data = {
      available: 12,
      occupied: 8,
      route: "A2 → B1 → C3"
    };
 
    if (lastOpened === type) {
      boxes[type].style.display = 'none';
      lastOpened = null;
      return;
    }
 
    for (let key in boxes) {
      boxes[key].style.display = 'none';
    }
 
    if (type === 'available') {
      document.getElementById('available-count').innerText = "Available spaces: " + data.available;
    } else if (type === 'occupied') {
      document.getElementById('occupied-count').innerText = "Occupied spaces: " + data.occupied;
    } else if (type === 'route') {
      document.getElementById('route-info').innerText = "Best route: " + data.route;
    }
 
    boxes[type].style.display = 'block';
    lastOpened = type;
  }
 
