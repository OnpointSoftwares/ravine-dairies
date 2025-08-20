// JavaScript for Ravine Dairies Cooperative Website

document.addEventListener('DOMContentLoaded', function() {
    // Load additional content
    loadAdditionalContent();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize navbar scroll effect
    initNavbarScrollEffect();
    
    // Initialize carousel auto-play
    initCarouselAutoPlay();
    
    // Initialize form handling
    initFormHandling();
});

// Load additional content from external file
async function loadAdditionalContent() {
    try {
        const response = await fetch('additional-content.html');
        const content = await response.text();
        document.getElementById('additional-content').innerHTML = content;
        
        // Re-initialize Bootstrap components after content is loaded
        setTimeout(() => {
            initBootstrapComponents();
        }, 100);
    } catch (error) {
        console.log('Additional content file not found, using inline content');
        // Fallback: create content programmatically
        createInlineContent();
    }
}

// Create content programmatically if external file is not available
function createInlineContent() {
    const additionalContent = document.getElementById('additional-content');
    
    // Create farmers section
    const farmersSection = createFarmersSection();
    additionalContent.appendChild(farmersSection);
    
    // Create timeline section
    const timelineSection = createTimelineSection();
    additionalContent.appendChild(timelineSection);
    
    // Create sustainability section
    const sustainabilitySection = createSustainabilitySection();
    additionalContent.appendChild(sustainabilitySection);
    
    // Create testimonials section
    const testimonialsSection = createTestimonialsSection();
    additionalContent.appendChild(testimonialsSection);
    
    // Create news section
    const newsSection = createNewsSection();
    additionalContent.appendChild(newsSection);
    
    // Create shop section
    const shopSection = createShopSection();
    additionalContent.appendChild(shopSection);
    
    // Create careers section
    const careersSection = createCareersSection();
    additionalContent.appendChild(careersSection);
    
    // Create contact section
    const contactSection = createContactSection();
    additionalContent.appendChild(contactSection);
    
    // Create footer
    const footer = createFooter();
    additionalContent.appendChild(footer);
    
    // Initialize Bootstrap components
    initBootstrapComponents();
}

// Initialize Bootstrap components
function initBootstrapComponents() {
    // Initialize carousel
    const carouselElement = document.getElementById('farmersCarousel');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 5000,
            wrap: true
        });
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in class to elements and observe them
    const animateElements = document.querySelectorAll('.card, .timeline-item, h2, .sustainability-icon');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Navbar scroll effect
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.style.backgroundColor = 'white';
            navbar.style.backdropFilter = 'none';
        }
    });
}

// Carousel auto-play
function initCarouselAutoPlay() {
    setTimeout(() => {
        const carousel = document.getElementById('farmersCarousel');
        if (carousel) {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.cycle();
            }
        }
    }, 1000);
}

// Form handling
function initFormHandling() {
    // Newsletter subscription
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            }
        });
    }
}

// Create sections programmatically (fallback functions)
function createFarmersSection() {
    const section = document.createElement('section');
    section.id = 'farmers';
    section.className = 'py-5 bg-cream';
    section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold text-success">Meet Our Farmers</h2>
                <p class="lead">The heart and soul of our cooperative</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" class="card-img-top" alt="Farmer">
                        <div class="card-body text-center">
                            <h5 class="fw-bold">John Kamau</h5>
                            <p class="text-muted">Third-generation dairy farmer</p>
                            <p>15+ years with our cooperative, maintaining the highest standards of animal welfare.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" class="card-img-top" alt="Farmer">
                        <div class="card-body text-center">
                            <h5 class="fw-bold">Mary Wanjiku</h5>
                            <p class="text-muted">Organic farming pioneer</p>
                            <p>Leading our organic certification program and sustainable farming initiatives.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" class="card-img-top" alt="Farmer">
                        <div class="card-body text-center">
                            <h5 class="fw-bold">David Mwangi</h5>
                            <p class="text-muted">Innovation advocate</p>
                            <p>Implementing cutting-edge technology and renewable energy solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return section;
}

function createTimelineSection() {
    const section = document.createElement('section');
    section.className = 'py-5';
    section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold text-success">Our Journey</h2>
                <p class="lead">Milestones in our cooperative's history</p>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-icon bg-success">
                                <i class="bi bi-flag-fill text-white"></i>
                            </div>
                            <div class="timeline-content">
                                <h5 class="fw-bold">1985 - Foundation</h5>
                                <p>Ravine Dairies Cooperative was founded by 12 local farmers committed to fair trade and quality.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon bg-primary">
                                <i class="bi bi-award-fill text-white"></i>
                            </div>
                            <div class="timeline-content">
                                <h5 class="fw-bold">1995 - Organic Certification</h5>
                                <p>Became the first dairy cooperative in the region to achieve organic certification.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon bg-success">
                                <i class="bi bi-globe text-white"></i>
                            </div>
                            <div class="timeline-content">
                                <h5 class="fw-bold">2010 - Sustainability Initiative</h5>
                                <p>Launched comprehensive sustainability program including renewable energy and carbon neutrality goals.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-icon bg-primary">
                                <i class="bi bi-cart-fill text-white"></i>
                            </div>
                            <div class="timeline-content">
                                <h5 class="fw-bold">2020 - Digital Transformation</h5>
                                <p>Launched online platform and direct-to-consumer delivery service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return section;
}

function createSustainabilitySection() {
    const section = document.createElement('section');
    section.id = 'sustainability';
    section.className = 'py-5 bg-cream';
    section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold text-success">Our Commitment to Sustainability</h2>
                <p class="lead">Caring for our planet, animals, and community</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="text-center">
                        <div class="sustainability-icon mb-3">
                            <i class="bi bi-leaf-fill text-success"></i>
                        </div>
                        <h4 class="fw-bold">Eco-Friendly Practices</h4>
                        <p>100% renewable energy, zero-waste packaging, and carbon-neutral operations by 2025.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center">
                        <div class="sustainability-icon mb-3">
                            <i class="bi bi-heart-fill text-success"></i>
                        </div>
                        <h4 class="fw-bold">Animal Welfare</h4>
                        <p>Pasture-raised cattle with the highest standards of care and humane treatment.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center">
                        <div class="sustainability-icon mb-3">
                            <i class="bi bi-people-fill text-success"></i>
                        </div>
                        <h4 class="fw-bold">Community Support</h4>
                        <p>Supporting local farmers, creating jobs, and investing in rural community development.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    return section;
}

function createTestimonialsSection() {
    const section = document.createElement('section');
    section.className = 'py-5';
    section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold text-success">What Our Customers Say</h2>
                <p class="lead">Real stories from our community</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card testimonial-card h-100 shadow-sm">
                        <div class="card-body text-center">
                            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                                 class="rounded-circle mb-3" width="80" height="80" alt="Customer">
                            <h5 class="fw-bold">Sarah Johnson</h5>
                            <div class="text-warning mb-2">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p>"The freshest milk I've ever tasted! Knowing it comes directly from local farmers makes it even better."</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card testimonial-card h-100 shadow-sm">
                        <div class="card-body text-center">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                                 class="rounded-circle mb-3" width="80" height="80" alt="Customer">
                            <h5 class="fw-bold">Michael Chen</h5>
                            <div class="text-warning mb-2">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p>"Their artisan cheeses are incredible. You can taste the quality and care in every bite."</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card testimonial-card h-100 shadow-sm">
                        <div class="card-body text-center">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                                 class="rounded-circle mb-3" width="80" height="80" alt="Customer">
                            <h5 class="fw-bold">Emma Wilson</h5>
                            <div class="text-warning mb-2">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                            <p>"Love supporting a cooperative that truly cares about sustainability and farmer welfare."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return section;
}

function createNewsSection() {
    const section = document.createElement('section');
    section.id = 'news';
    section.className = 'py-5 bg-cream';
    section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold text-success">Latest News & Updates</h2>
                <p class="lead">Stay informed about our cooperative</p>
            </div>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card news-card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                             class="card-img-top" alt="News">
                        <div class="card-body">
                            <small class="text-muted">August 15, 2024</small>
                            <h5 class="card-title fw-bold">New Organic Certification Achieved</h5>
                            <p class="card-text">We're proud to announce that 15 more farms in our cooperative have achieved organic certification...</p>
                            <a href="#" class="btn btn-outline-success">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card news-card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                             class="card-img-top" alt="News">
                        <div class="card-body">
                            <small class="text-muted">August 10, 2024</small>
                            <h5 class="card-title fw-bold">Solar Panel Installation Complete</h5>
                            <p class="card-text">Our processing facility is now 100% powered by renewable energy thanks to our new solar installation...</p>
                            <a href="#" class="btn btn-outline-success">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card news-card h-100 shadow-sm">
                        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                             class="card-img-top" alt="News">
                        <div class="card-body">
                            <small class="text-muted">August 5, 2024</small>
                            <h5 class="card-title fw-bold">Community Farm Day Success</h5>
                            <p class="card-text">Over 500 families visited our farms during the annual Community Farm Day event...</p>
                            <a href="#" class="btn btn-outline-success">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return section;
}

function createShopSection() {
    const section = document.createElement('section');
    section.id = 'shop';
    section.className = 'py-5';
    section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold text-success">Shop Online</h2>
                <p class="lead">Fresh dairy products delivered to your door</p>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h3 class="fw-bold mb-4">Convenient Online Ordering</h3>
                    <ul class="list-unstyled">
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Same-day delivery available</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Subscription options for regular deliveries</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Temperature-controlled transport</li>
                        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>100% satisfaction guarantee</li>
                    </ul>
                    <a href="#" class="btn btn-success btn-lg">Start Shopping</a>
                </div>
                <div class="col-lg-6">
                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                         class="img-fluid rounded shadow" alt="Online shopping">
                </div>
            </div>
        </div>
    `;
    return section;
}

function createCareersSection() {
    const section = document.createElement('section');
    section.id = 'careers';
    section.className = 'py-5 bg-cream';
    section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold text-success">Join Our Team</h2>
                <p class="lead">Build a career with purpose</p>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <p class="lead mb-4">
                        We're always looking for passionate individuals who share our commitment to quality, 
                        sustainability, and community support.
                    </p>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="card career-card h-100">
                                <div class="card-body text-center">
                                    <i class="bi bi-truck text-success mb-3" style="font-size: 2rem;"></i>
                                    <h5 class="fw-bold">Delivery Driver</h5>
                                    <p>Join our delivery team and help bring fresh products to our customers.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card career-card h-100">
                                <div class="card-body text-center">
                                    <i class="bi bi-gear text-success mb-3" style="font-size: 2rem;"></i>
                                    <h5 class="fw-bold">Production Specialist</h5>
                                    <p>Work in our state-of-the-art processing facility ensuring quality standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#contact" class="btn btn-success btn-lg mt-4">View All Openings</a>
                </div>
            </div>
        </div>
    `;
    return section;
}

function createContactSection() {
    const section = document.createElement('section');
    section.id = 'contact';
    section.className = 'py-5';
    section.innerHTML = `
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-5 fw-bold text-success">Get In Touch</h2>
                <p class="lead">We'd love to hear from you</p>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="row g-4">
                        <div class="col-md-4 text-center">
                            <i class="bi bi-geo-alt-fill text-success mb-3" style="font-size: 2rem;"></i>
                            <h5 class="fw-bold">Visit Us</h5>
                            <p>123 Dairy Farm Road<br>Ravine Valley, RV 12345</p>
                        </div>
                        <div class="col-md-4 text-center">
                            <i class="bi bi-telephone-fill text-success mb-3" style="font-size: 2rem;"></i>
                            <h5 class="fw-bold">Call Us</h5>
                            <p>+1 (555) 123-MILK<br>Mon-Fri 8AM-6PM</p>
                        </div>
                        <div class="col-md-4 text-center">
                            <i class="bi bi-envelope-fill text-success mb-3" style="font-size: 2rem;"></i>
                            <h5 class="fw-bold">Email Us</h5>
                            <p>info@ravinedairies.com<br>support@ravinedairies.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    return section;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'bg-dark text-white py-5';
    footer.innerHTML = `
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4">
                    <h5 class="fw-bold mb-3">
                        <i class="bi bi-droplet-fill me-2"></i>Ravine Dairies
                    </h5>
                    <p>Farmer-owned cooperative dedicated to delivering the freshest, highest-quality dairy products while supporting sustainable agriculture and local communities.</p>
                    <div class="social-links">
                        <a href="#" class="text-white me-3"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="text-white me-3"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="text-white me-3"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="text-white me-3"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div class="col-lg-2">
                    <h6 class="fw-bold mb-3">Quick Links</h6>
                    <ul class="list-unstyled">
                        <li><a href="#about" class="text-white-50">About Us</a></li>
                        <li><a href="#products" class="text-white-50">Products</a></li>
                        <li><a href="#farmers" class="text-white-50">Our Farmers</a></li>
                        <li><a href="#sustainability" class="text-white-50">Sustainability</a></li>
                    </ul>
                </div>
                <div class="col-lg-2">
                    <h6 class="fw-bold mb-3">Products</h6>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-white-50">Fresh Milk</a></li>
                        <li><a href="#" class="text-white-50">Artisan Cheese</a></li>
                        <li><a href="#" class="text-white-50">Greek Yogurt</a></li>
                        <li><a href="#" class="text-white-50">Farm Butter</a></li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <h6 class="fw-bold mb-3">Newsletter</h6>
                    <p>Stay updated with our latest news and offers</p>
                    <form class="d-flex">
                        <input type="email" class="form-control me-2" placeholder="Your email" required>
                        <button class="btn btn-success" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <hr class="my-4">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <p class="mb-0">&copy; 2024 Ravine Dairies Cooperative. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <a href="#" class="text-white-50 me-3">Privacy Policy</a>
                    <a href="#" class="text-white-50">Terms of Service</a>
                </div>
            </div>
        </div>
    `;
    return footer;
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
