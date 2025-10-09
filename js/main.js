// Main JavaScript for Sonrisa Co-living

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('show');
            });
        });
    }
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections (optional - already have CSS animation)
    document.querySelectorAll('section').forEach(section => {
        // observer.observe(section);
    });
    
    // Form Validation for Booking
    const bookingForm = document.querySelector('#booking form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const checkinDate = document.querySelector('input[type="date"]:first-of-type').value;
            const checkoutDate = document.querySelector('input[type="date"]:last-of-type').value;
            const roomType = document.querySelector('select').value;
            
            if (!checkinDate || !checkoutDate) {
                alert('Please select check-in and check-out dates');
                return;
            }
            
            if (new Date(checkinDate) >= new Date(checkoutDate)) {
                alert('Check-out date must be after check-in date');
                return;
            }
            
            // Here you would integrate with a booking system
            // For now, we'll show a simple alert
            alert(`Checking availability for ${roomType} from ${checkinDate} to ${checkoutDate}...`);
            
            // In production, redirect to booking platform or show calendar
            // window.location.href = '/booking-system?checkin=' + checkinDate + '&checkout=' + checkoutDate;
        });
    }
    
    // Add decorative stars to headings (playful touch)
    const addDecorativeStars = () => {
        const headings = document.querySelectorAll('h2');
        headings.forEach((heading, index) => {
            if (index % 2 === 0) {
                const star = document.createElement('span');
                star.className = 'decorative-stars';
                star.textContent = '✦';
                star.style.marginLeft = '1rem';
                star.style.fontSize = '1rem';
                star.style.opacity = '0.3';
                // heading.appendChild(star);
            }
        });
    };
    
    // Optional: Add stars to some headings
    // addDecorativeStars();
    
    // Booking Button Click Handler
    const bookingButtons = document.querySelectorAll('a[href="#booking"], button');
    bookingButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track analytics (Google Analytics, etc.)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Booking',
                    'event_label': 'Booking Button Click'
                });
            }
        });
    });
    
    // Set minimum date for check-in to today
    const today = new Date().toISOString().split('T')[0];
    const checkinInput = document.querySelector('input[type="date"]:first-of-type');
    const checkoutInput = document.querySelector('input[type="date"]:last-of-type');
    
    if (checkinInput) {
        checkinInput.setAttribute('min', today);
        
        checkinInput.addEventListener('change', function() {
            const selectedDate = new Date(this.value);
            const nextDay = new Date(selectedDate);
            nextDay.setDate(nextDay.getDate() + 1);
            const minCheckout = nextDay.toISOString().split('T')[0];
            
            if (checkoutInput) {
                checkoutInput.setAttribute('min', minCheckout);
            }
        });
    }
    
    // Add loading state to booking button
    const bookingSubmitButton = document.querySelector('#booking button');
    if (bookingSubmitButton) {
        bookingSubmitButton.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Checking...';
            this.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    }
});

// Lazy Load Images (optional enhancement)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    // Uncomment to enable lazy loading
    // document.querySelectorAll('img[data-src]').forEach(img => {
    //     imageObserver.observe(img);
    // });
}

// Console message for developers
console.log('%cSonrisa Co-living 🌊', 'font-size: 20px; color: #4A9B9F; font-weight: bold;');
console.log('%cBuilt with love in Madeira', 'font-size: 12px; color: #7FA99B;');
