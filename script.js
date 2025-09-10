// Tab navigation
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const tab = this.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(sec => {
      sec.classList.remove('active');
    });
    document.getElementById(tab).classList.add('active');
  });
});

// Profile image upload and preview
const uploadInput = document.getElementById('profile-upload');
if (uploadInput) {
  uploadInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(ev) {
        document.getElementById('profile-img').src = ev.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
}
