// ===== MAIN APPLICATION =====
class ArtEmbroideryApp {
    constructor() {
        this.isLoading = false;
        this.currentSection = 'home';
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.initScrollEffects();
        this.initAnimations();
        this.loadPortfolio();
        this.initContactForm();
    }
    
    bindEvents() {
        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        
        if (mobileToggle && mainNav) {
            mobileToggle.addEventListener('click', () => {
                mainNav.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            });
        }
        
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Check if it's an external link (not starting with #)
                if (href && !href.startsWith('#')) {
                    // Allow external links to work normally
                    return;
                }
                
                e.preventDefault();
                const targetId = href.substring(1);
                this.scrollToSection(targetId);
                this.updateActiveNavLink(link);
                
                // Close mobile menu if open
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            });
        });
        
        // CTA button
        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                this.scrollToSection('contact');
            });
        }
        
        // Portfolio filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterPortfolio(btn.dataset.filter);
                this.updateActiveFilter(btn);
            });
        });
        
        // Scroll to top functionality
        this.initScrollToTop();
        
        // Lazy loading for images
        this.initLazyLoading();
    }
    
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = section.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            this.currentSection = sectionId;
        }
    }
    
    updateActiveNavLink(activeLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
    }
    
    initScrollEffects() {
        let lastScrollTop = 0;
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Keep header always visible - no hide/show animation
            header.style.transform = 'translateY(0)';
            
            lastScrollTop = scrollTop;
            
            // Update active navigation based on scroll position
            this.updateActiveNavOnScroll();
            
            // Remove parallax effect - keep elements in place
            // this.updateParallax();
        });
    }
    
    updateActiveNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (navLink) {
                    this.updateActiveNavLink(navLink);
                }
            }
        });
    }
    
    // Removed parallax effect - elements stay in place
    
    initAnimations() {
        // Remove scroll-triggered animations - elements stay in place
        // All animations are now CSS-only and don't depend on scroll position
    }
    
    loadPortfolio() {
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (!portfolioGrid) return;
        
        // Sample portfolio data
        const portfolioData = [
            {
                id: 1,
                title: 'Корпоративни тениски',
                category: 'corporate',
                image: 'assets/images/portfolio/corporate-1.jpg',
                description: 'Фирмени тениски с логотип'
            },
            {
                id: 2,
                title: 'Медицински униформи',
                category: 'uniforms',
                image: 'assets/images/portfolio/uniforms-1.jpg',
                description: 'Професионални медицински униформи'
            },
            {
                id: 3,
                title: 'Промо чанти',
                category: 'promotional',
                image: 'assets/images/portfolio/promo-1.jpg',
                description: 'Промоционални чанти с печат'
            },
            {
                id: 4,
                title: 'Домашни перници',
                category: 'home',
                image: 'assets/images/portfolio/home-1.jpg',
                description: 'Персонализирани перници'
            },
            {
                id: 5,
                title: 'Ресторантски униформи',
                category: 'uniforms',
                image: 'assets/images/portfolio/uniforms-2.jpg',
                description: 'Униформи за ресторантски персонал'
            },
            {
                id: 6,
                title: 'Спортни екипи',
                category: 'corporate',
                image: 'assets/images/portfolio/corporate-2.jpg',
                description: 'Спортни екипи с номера'
            }
        ];
        
        this.renderPortfolio(portfolioData);
    }
    
    renderPortfolio(data) {
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (!portfolioGrid) return;
        
        portfolioGrid.innerHTML = data.map(item => `
            <div class="portfolio-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}" class="portfolio-image" loading="lazy">
                <div class="portfolio-content">
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p class="portfolio-category">${item.category}</p>
                </div>
            </div>
        `).join('');
        
        // Add click handlers for portfolio items
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                this.openPortfolioModal(item);
            });
        });
    }
    
    filterPortfolio(filter) {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    
    updateActiveFilter(activeBtn) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }
    
    openPortfolioModal(item) {
        const title = item.querySelector('.portfolio-title').textContent;
        const image = item.querySelector('.portfolio-image').src;
        const category = item.dataset.category;
        
        const modal = this.createModal('portfolio', `
            <div class="modal-header">
                <h2 class="modal-title">${title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <img src="${image}" alt="${title}" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
                <p>Категория: ${category}</p>
                <p>Това е примерен проект от нашето портфолио. Можем да създадем подобен дизайн за вашия проект.</p>
            </div>
        `);
        
        document.body.appendChild(modal);
        this.showModal(modal);
    }
    
    createModal(type, content) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                ${content}
            </div>
        `;
        
        // Close modal handlers
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.hideModal(modal));
        }
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideModal(modal);
            }
        });
        
        return modal;
    }
    
    showModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    hideModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => modal.remove(), 300);
    }
    
    initContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactForm(contactForm);
        });
    }
    
    async handleContactForm(form) {
        if (this.isLoading) return;
        
        this.isLoading = true;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.innerHTML = '<div class="loading-spinner"></div> Изпращане...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission
            await this.simulateFormSubmission(form);
            
            // Show success message
            this.showToast('success', 'Съобщението е изпратено успешно!');
            form.reset();
            
        } catch (error) {
            // Show error message
            this.showToast('error', 'Възникна грешка при изпращане. Моля, опитайте отново.');
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            this.isLoading = false;
        }
    }
    
    async simulateFormSubmission(form) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate random success/failure
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('Simulated error'));
                }
            }, 2000);
        });
    }
    
    showToast(type, message) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-header">
                <h4 class="toast-title">${type === 'success' ? 'Успех' : 'Грешка'}</h4>
                <button class="toast-close">&times;</button>
            </div>
            <p class="toast-message">${message}</p>
        `;
        
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => toast.classList.add('show'), 100);
        
        // Auto hide
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 5000);
        
        // Close button
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        });
    }
    
    initScrollToTop() {
        // Create scroll to top button
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: var(--shadow-medium);
        `;
        
        document.body.appendChild(scrollBtn);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        });
        
        // Scroll to top functionality
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    initLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.artEmbroideryApp = new ArtEmbroideryApp();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden
        console.log('Page hidden');
    } else {
        // Page is visible
        console.log('Page visible');
    }
});

// Handle online/offline status
window.addEventListener('online', () => {
    console.log('Connection restored');
});

window.addEventListener('offline', () => {
    console.log('Connection lost');
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ArtEmbroideryApp;
}

