
  document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('custom_image_upload');
    const hiddenUrlField = document.getElementById('image_hosted_url');
    const buyButtons = document.querySelectorAll('form[action^="/cart/add"] button[type="submit"]');

    if (!fileInput || !hiddenUrlField || buyButtons.length === 0) return;

    fileInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (!file || !file.type.startsWith('image/')) return;

      // Disable buttons
      buyButtons.forEach(btn => {
        btn.disabled = true;
        btn.textContent = 'Uploading...';
      });

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'unsigned'); // Default preset name if unsigned
      formData.append('api_key', '911752784996313');
      formData.append('timestamp', Math.floor(Date.now() / 1000));

      fetch('https://api.cloudinary.com/v1_1/dyvap0pz4/image/upload', {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(data => {
        if (data.secure_url) {
          hiddenUrlField.value = data.secure_url;

          // Re-enable buttons
          buyButtons.forEach(btn => {
            btn.disabled = false;
            btn.textContent = 'Add to cart';
          });

          // Optional: show preview
          const preview = document.createElement('img');
          preview.src = data.secure_url;
          preview.style.maxWidth = '200px';
          preview.style.marginTop = '10px';
          fileInput.parentElement.appendChild(preview);
        } else {
          throw new Error('Upload failed.');
        }
      })
      .catch(err => {
        alert('Image upload failed. Please try again.');
        console.error(err);

        buyButtons.forEach(btn => {
          btn.disabled = false;
          btn.textContent = 'Add to cart';
        });
      });
    });
  });
