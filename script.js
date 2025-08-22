function showMessage() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'message-popup';
    popup.innerHTML = `
        <h3>🎉 Hello there!</h3>
        <p>Thanks for clicking the button! This is a simple interactive demo.</p>
        <button onclick="closeMessage()" style="
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 25px;
            cursor: pointer;
            margin-top: 15px;
            transition: all 0.3s ease;
        ">Close</button>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    
    // Show with animation
    setTimeout(() => {
        overlay.classList.add('show');
        popup.classList.add('show');
    }, 10);
    
    // Close on overlay click
    overlay.addEventListener('click', closeMessage);
}

function closeMessage() {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.message-popup');
    
    if (overlay && popup) {
        overlay.classList.remove('show');
        popup.classList.remove('show');
        
        setTimeout(() => {
            overlay.remove();
            popup.remove();
        }, 300);
    }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Animate feature cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initially hide feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
});