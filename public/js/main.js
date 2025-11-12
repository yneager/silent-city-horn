// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Horn Sound Simulator
function playHornSound(type) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'aggressive') {
        // Aggressive horn: 440 Hz, loud
        oscillator.frequency.value = 440;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
        document.getElementById('hornNote').innerHTML = '🔊 Aggressive horn (110dB) - Loud and jarring!';
        document.getElementById('hornNote').style.color = '#E63946';
    } else if (type === 'polite') {
        // Polite chime: 523 Hz (C5), soft
        oscillator.frequency.value = 523;
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
        document.getElementById('hornNote').innerHTML = '✅ Polite chime (60dB) - Soft and pleasant!';
        document.getElementById('hornNote').style.color = '#28A745';
    }
}

// Noise Impact Calculator
function calculateNoise() {
    const dailyHonks = parseFloat(document.getElementById('dailyHonks').value) || 0;
    const driverCount = parseFloat(document.getElementById('driverCount').value) || 0;
    
    if (dailyHonks <= 0 || driverCount <= 0) {
        document.getElementById('calculatorResult').innerHTML = 
            '<p style="color: #E63946;">Please enter valid numbers.</p>';
        return;
    }
    
    const annualHonks = dailyHonks * 365 * driverCount;
    const noiseReductionPercent = 50; // SC-Horn reduces noise by ~50%
    const honksEliminated = annualHonks * (noiseReductionPercent / 100);
    const decibelsReduced = 30; // Average reduction from 100dB to 70dB
    
    const result = `
        <p><strong>Annual Honking Impact:</strong> ${annualHonks.toLocaleString()} total honks</p>
        <p><strong>With SC-Horn:</strong> ${honksEliminated.toLocaleString()} honks eliminated (${noiseReductionPercent}%)</p>
        <p><strong>Noise Reduction:</strong> ~${decibelsReduced}dB average decrease</p>
        <p><strong>Health Benefit:</strong> Significant reduction in stress-related health issues</p>
    `;
    
    document.getElementById('calculatorResult').innerHTML = result;
}

// Newsletter Subscription
function subscribeNewsletter() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    const messageElement = document.getElementById('newsletterMessage');
    
    if (!email) {
        messageElement.innerHTML = 'Please enter an email address.';
        messageElement.style.color = '#E63946';
        return;
    }
    
    if (!isValidEmail(email)) {
        messageElement.innerHTML = 'Please enter a valid email address.';
        messageElement.style.color = '#E63946';
        return;
    }
    
    // Simulate subscription
    messageElement.innerHTML = '✅ Thank you for subscribing! Check your email for updates.';
    messageElement.style.color = '#28A745';
    emailInput.value = '';
    
    // Reset message after 5 seconds
    setTimeout(() => {
        messageElement.innerHTML = '';
    }, 5000);
}

// Contact Form Submission
function submitContactForm(event) {
    event.preventDefault();
    const form = event.target;
    const messageElement = document.getElementById('contactMessage');
    
    // Get form data
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const role = form.querySelector('select').value;
    const message = form.querySelector('textarea').value;
    
    if (!name || !email || !role || !message) {
        messageElement.innerHTML = 'Please fill in all fields.';
        messageElement.style.color = '#E63946';
        return;
    }
    
    // Simulate form submission
    messageElement.innerHTML = '✅ Message sent successfully! We will contact you soon.';
    messageElement.style.color = '#28A745';
    form.reset();
    
    // Reset message after 5 seconds
    setTimeout(() => {
        messageElement.innerHTML = '';
    }, 5000);
}

// City Form Submission
function submitCityForm(event) {
    event.preventDefault();
    const form = event.target;
    const messageElement = document.getElementById('cityMessage');
    
    messageElement.innerHTML = '✅ Demo request received! Our team will contact you within 24 hours.';
    messageElement.style.color = '#28A745';
    form.reset();
    
    setTimeout(() => {
        messageElement.innerHTML = '';
    }, 5000);
}

// Fleet Form Submission
function submitFleetForm(event) {
    event.preventDefault();
    const form = event.target;
    const messageElement = document.getElementById('fleetMessage');
    
    messageElement.innerHTML = '✅ Quote request received! We will prepare a customized proposal for your fleet.';
    messageElement.style.color = '#28A745';
    form.reset();
    
    setTimeout(() => {
        messageElement.innerHTML = '';
    }, 5000);
}

// Driver Form Submission
function submitDriverForm(event) {
    event.preventDefault();
    const form = event.target;
    const messageElement = document.getElementById('driverMessage');
    
    messageElement.innerHTML = '✅ Interest registered! We will notify you when SC-Horn becomes available in your region.';
    messageElement.style.color = '#28A745';
    form.reset();
    
    setTimeout(() => {
        messageElement.innerHTML = '';
    }, 5000);
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Load project data from API
async function loadProjectData() {
    try {
        const response = await fetch('/api/project-data');
        const data = await response.json();
        console.log('Project Data Loaded:', data);
    } catch (error) {
        console.error('Error loading project data:', error);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProjectData();
    
    // Add scroll animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.stat-card, .feature-card, .cause-item, .business-card, .tool-card, .testimonial-card, .innovation-item').forEach(el => {
        observer.observe(el);
    });
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Track page analytics
function trackPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href
        });
    }
}

// Call on page load
window.addEventListener('load', trackPageView);

// Prevent form submission on Enter in calculator inputs
document.addEventListener('DOMContentLoaded', function() {
    const calculatorInputs = document.querySelectorAll('.calculator input');
    calculatorInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                calculateNoise();
            }
        });
    });
});
