// Loading screen handler
document.addEventListener('DOMContentLoader', function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').style.display = 'none';
    }, 2500);
});

// Copy to clipboard function
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    
    navigator.clipboard.writeText(text).then(function() {
        showToast('Copied to clipboard!');
        
        // Add animation effect
        element.parentElement.style.transform = 'scale(0.98)';
        setTimeout(() => {
            element.parentElement.style.transform = 'scale(1)';
        }, 200);
    }).catch(function(err) {
        showToast('Failed to copy!', 'error');
    });
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    
    if (type === 'error') {
        toast.style.background = '#ef4444';
    } else {
        toast.style.background = '#10b981';
    }
    
    toast.classList.add('show');
    
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}

// Theme toggle
document.querySelector('.theme-toggle').addEventListener('click', function() {
    const root = document.documentElement;
    const icon = this.querySelector('.theme-icon');
    
    if (icon.textContent === '🌙') {
        // Light theme
        root.style.setProperty('--bg-dark', '#f8fafc');
        root.style.setProperty('--bg-card', '#ffffff');
        root.style.setProperty('--text-primary', '#0f172a');
        root.style.setProperty('--text-secondary', '#475569');
        root.style.setProperty('--border-color', '#e2e8f0');
        icon.textContent = '☀️';
    } else {
        // Dark theme
        root.style.setProperty('--bg-dark', '#0f172a');
        root.style.setProperty('--bg-card', '#1e293b');
        root.style.setProperty('--text-primary', '#f8fafc');
        root.style.setProperty('--text-secondary', '#94a3b8');
        root.style.setProperty('--border-color', '#334155');
        icon.textContent = '🌙';
    }
    
    // Add animation
    this.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        this.style.transform = 'rotate(0deg)';
    }, 300);
});

// Smooth scroll for navigation
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.sidebar-link').forEach(l => {
            l.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Add page transition effect
        document.querySelector('.main').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.main').style.opacity = '1';
        }, 300);
        
        // Simulate page change
        const sectionTitle = this.textContent;
        showToast(`Loading ${sectionTitle}...`, 'success');
    });
});

// Add scroll animation for sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.doc-section');
    
    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.8) {
            section.style.setProperty('--i', index);
            section.classList.add('fade-in');
        }
    });
});

// Interactive method cards
document.querySelectorAll('.method-card').forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Simulate typing effect for code examples
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
window.addEventListener('load', function() {
    const codeElements = document.querySelectorAll('.code-block code');
    
    codeElements.forEach((element) => {
        const originalText = element.innerText;
        typeWriter(element, originalText, 20);
    });
});

// Interactive component previews
document.querySelectorAll('.component-preview').forEach(preview => {
    preview.addEventListener('click', function() {
        const badge = this.querySelector('.preview-badge').textContent;
        showToast(`Previewing ${badge} component!`);
        
        // Add shake animation
        this.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Parallax effect for background
document.addEventListener('mousemove', function(e) {
    const bg = document.querySelector('.animated-bg');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    bg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});

// Initialize all animations
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animations to sections with delay
    document.querySelectorAll('.doc-section').forEach((section, index) => {
        section.style.setProperty('--i', index);
        section.classList.add('fade-in');
    });
    
    // Add hover effects to sidebar
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search (simulated)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        showToast('Search feature coming soon!', 'success');
    }
    
    // Escape key to close something
    if (e.key === 'Escape') {
        showToast('Escape pressed', 'error');
    }
});

// Add pulse animation to active nav link
setInterval(() => {
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
        activeLink.style.transform = 'scale(1.05)';
        setTimeout(() => {
            activeLink.style.transform = 'scale(1)';
        }, 200);
    }
}, 3000);
