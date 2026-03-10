// Ambil element yang diperlukan
const loginForm = document.querySelector('.form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const loginBtn = document.querySelector('.login-btn');
const rememberCheck = document.querySelector('.checkbox input');
const forgotLink = document.querySelector('.forgot');
const bioLogin = document.querySelector('.bio');
const quickSign = document.querySelector('.quick');

// Data user dummy (untuk simulasi)
const dummyUser = {
    username: 'admin',
    password: '12345'
};

// Fungsi untuk validasi login
function validateLogin(username, password) {
    if (!username || !password) {
        return {
            valid: false,
            message: 'Username dan password harus diisi!'
        };
    }

    if (username.length < 3) {
        return {
            valid: false,
            message: 'Username minimal 3 karakter'
        };
    }

    if (password.length < 4) {
        return {
            valid: false,
            message: 'Password minimal 4 karakter'
        };
    }

    // Simulasi cek login (ganti dengan logic sebenarnya nanti)
    if (username === dummyUser.username && password === dummyUser.password) {
        return {
            valid: true,
            message: 'Login berhasil!'
        };
    } else {
        return {
            valid: false,
            message: 'Username atau password salah!'
        };
    }
}

// Event listener untuk form submit
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
});

// Event listener untuk button login
loginBtn.addEventListener('click', function() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    
    // Tampilkan loading state
    const originalText = loginBtn.textContent;
    loginBtn.textContent = '...';
    loginBtn.style.opacity = '0.8';
    loginBtn.style.cursor = 'wait';
    
    // Simulasi proses login (kasih delay biar keliatan)
    setTimeout(() => {
        const result = validateLogin(username, password);
        
        // Kembalikan button ke normal
        loginBtn.textContent = originalText;
        loginBtn.style.opacity = '1';
        loginBtn.style.cursor = 'pointer';
        
        // Tampilkan pesan
        alert(result.message);
        
        // Kalau login berhasil (opsional)
        if (result.valid) {
            // Reset form
            usernameInput.value = '';
            passwordInput.value = '';
            rememberCheck.checked = false;
            
            // Redirect atau action lain
            console.log('User logged in:', username);
        }
    }, 800);
});

// Enter key untuk submit
usernameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        passwordInput.focus();
    }
});

passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        loginBtn.click();
    }
});

// Remember me functionality
rememberCheck.addEventListener('change', function() {
    if (this.checked) {
        console.log('Remember me enabled');
        // Simpan ke localStorage nanti kalau mau
    } else {
        console.log('Remember me disabled');
    }
});

// Forgot password link
forgotLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Fitur lupa password akan segera hadir!');
});

// Biometric login
bioLogin.addEventListener('click', function() {
    // Efek loading
    const originalIcon = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Memeriksa sidik jari...</span>';
    this.style.opacity = '0.8';
    this.style.cursor = 'wait';
    
    setTimeout(() => {
        this.innerHTML = originalIcon;
        this.style.opacity = '1';
        this.style.cursor = 'pointer';
        
        // Simulasi biometric success (50% chance)
        const success = Math.random() > 0.5;
        
        if (success) {
            alert('✅ Sidik jari cocok! Login berhasil');
            
            // Auto fill username (contoh)
            usernameInput.value = 'user_biometric';
        } else {
            alert('❌ Sidik jari tidak cocok, coba lagi');
        }
    }, 1500);
});

// Quick sign in
quickSign.addEventListener('click', function() {
    // Efek loading
    const originalIcon = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Quick sign in...</span>';
    this.style.opacity = '0.8';
    this.style.cursor = 'wait';
    
    setTimeout(() => {
        this.innerHTML = originalIcon;
        this.style.opacity = '1';
        this.style.cursor = 'pointer';
        
        // Auto login dengan dummy account
        usernameInput.value = 'guest_user';
        passwordInput.value = 'guest123';
        
        alert('⚡ Quick sign in berhasil! (Guest mode)');
    }, 1000);
});

// Validasi real-time
usernameInput.addEventListener('input', function() {
    const value = this.value;
    
    // Highlight merah kalau kurang dari 3 karakter
    if (value.length > 0 && value.length < 3) {
        this.style.borderColor = '#ff4444';
        this.style.backgroundColor = '#fff8f8';
    } else {
        this.style.borderColor = '#ddd';
        this.style.backgroundColor = '#fafafa';
    }
});

passwordInput.addEventListener('input', function() {
    const value = this.value;
    
    // Highlight merah kalau kurang dari 4 karakter
    if (value.length > 0 && value.length < 4) {
        this.style.borderColor = '#ff4444';
        this.style.backgroundColor = '#fff8f8';
    } else {
        this.style.borderColor = '#ddd';
        this.style.backgroundColor = '#fafafa';
    }
});

// Fungsi untuk clear form
function clearForm() {
    usernameInput.value = '';
    passwordInput.value = '';
    rememberCheck.checked = false;
    usernameInput.style.borderColor = '#ddd';
    passwordInput.style.borderColor = '#ddd';
    usernameInput.style.backgroundColor = '#fafafa';
    passwordInput.style.backgroundColor = '#fafafa';
}

// Simpan ke localStorage (opsional)
function saveToLocalStorage() {
    if (rememberCheck.checked && usernameInput.value) {
        localStorage.setItem('savedUsername', usernameInput.value);
    } else {
        localStorage.removeItem('savedUsername');
    }
}

// Load dari localStorage (opsional)
function loadFromLocalStorage() {
    const saved = localStorage.getItem('savedUsername');
    if (saved) {
        usernameInput.value = saved;
        rememberCheck.checked = true;
    }
}

// Panggil saat halaman dimuat
window.addEventListener('load', function() {
    loadFromLocalStorage();
    console.log('MASTEX.net Login Page ready');
});

// Prevent form submission
document.querySelector('form')?.addEventListener('submit', (e) => e.preventDefault());

// Export functions kalau diperlukan (untuk module)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateLogin,
        clearForm,
        saveToLocalStorage,
        loadFromLocalStorage
    };
            }        
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
