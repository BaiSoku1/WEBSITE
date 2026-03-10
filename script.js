// Simulasi loading saat login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const password = document.getElementById('password').value;
    const loginBtn = document.getElementById('loginBtn');
    
    // Validasi sederhana
    if (!nama || !password) {
        alert('Harap isi semua field!');
        return;
    }
    
    // Tambah class loading untuk memunculkan spinner
    loginBtn.classList.add('loading');
    
    // Simulasi proses login
    setTimeout(() => {
        loginBtn.classList.remove('loading');
        alert(`Selamat datang ${nama}! Login berhasil (simulasi)`);
        
        // Reset form (optional)
        // document.getElementById('loginForm').reset();
    }, 2000);
});

// Efek tambahan untuk social buttons
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const provider = this.classList.contains('google') ? 'Google' :
                        this.classList.contains('facebook') ? 'Facebook' : 'Spotify';
        
        // Simulasi login dengan social media
        this.style.pointerEvents = 'none';
        this.style.opacity = '0.7';
        
        setTimeout(() => {
            alert(`Login dengan ${provider} (simulasi)`);
            this.style.pointerEvents = 'auto';
            this.style.opacity = '1';
        }, 1000);
    });
});

// Efek typing placeholder (optional)
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Cegah form submit default
document.querySelector('form').addEventListener('submit', (e) => e.preventDefault());

// Tampilkan pesan selamat datang
console.log('🌸 Halaman Login Tema Pink Putih siap!');
