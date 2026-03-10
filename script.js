// Fungsi untuk button
function showMessage() {
    alert('Halo! Terima kasih sudah mengklik tombol ini.');
}

// Form submission handler
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan Anda telah dikirim!');
    this.reset();
});

// Dynamic year for footer
document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.innerHTML = `&copy; ${year} Website Saya`;
    }
});
