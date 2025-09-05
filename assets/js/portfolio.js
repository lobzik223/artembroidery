// ===== PORTFOLIO GALLERY =====
class PortfolioGallery {
    constructor() {
        this.currentFilter = 'all';
        this.portfolioData = [];
        this.currentImageIndex = 0;
        this.isGalleryOpen = false;
        
        this.init();
    }
    
    init() {
        this.loadPortfolioData();
        this.bindEvents();
        this.renderPortfolio();
    }
    
    loadPortfolioData() {
        // Sample portfolio data with more details
        this.portfolioData = [
            {
                id: 1,
                title: 'Корпоративни тениски - Технологична компания',
                category: 'corporate',
                image: 'assets/images/162980603087719568510947709288756380856968771.jpg',
                description: 'Фирмени тениски с логотип и мото на технологична компания. Използвани са висококачествени материали и прецизна изброиване.',
                tags: ['корпоративни', 'технологии', 'логотип'],
                date: '2024-01-15',
                client: 'TechCorp Ltd.',
                price: '45.00 лв.'
            },
            {
                id: 2,
                title: 'Медицински униформи - Болница "Света Анна"',
                category: 'uniforms',
                image: 'assets/images/163092551861268166688596060618057862619143705.png',
                description: 'Професионални медицински униформи с емблема на болницата. Специално внимание към хигиената и комфорта на персонала.',
                tags: ['медицина', 'униформи', 'здравеопазване'],
                date: '2024-01-10',
                client: 'Болница "Света Анна"',
                price: '65.00 лв.'
            },
            {
                id: 3,
                title: 'Промо чанти - Спортно събитие',
                category: 'promotional',
                image: 'assets/images/163092552117133251203370397465352555342733251.png',
                description: 'Промоционални чанти за спортно събитие с печат на спонсорите. Ярки цветове и издръжлив материал.',
                tags: ['промо', 'спорт', 'събития'],
                date: '2024-01-05',
                client: 'Sports Events Ltd.',
                price: '25.00 лв.'
            },
            {
                id: 4,
                title: 'Домашни перници - Хотел "Морски бряг"',
                category: 'home',
                image: 'assets/images/162980603087719568510947709288756380856968771.jpg',
                description: 'Персонализирани перници за хотелски стаи с логотип на хотела. Елегантен дизайн и меки материали.',
                tags: ['хотел', 'домашни', 'туризъм'],
                date: '2023-12-20',
                client: 'Хотел "Морски бряг"',
                price: '35.00 лв.'
            },
            {
                id: 5,
                title: 'Ресторантски униформи - "Морски вкусове"',
                category: 'uniforms',
                image: 'assets/images/163092551861268166688596060618057862619143705.png',
                description: 'Стилни униформи за ресторантски персонал с морска тематика. Функционални и естетически привлекателни.',
                tags: ['ресторант', 'униформи', 'морска тематика'],
                date: '2023-12-15',
                client: 'Ресторант "Морски вкусове"',
                price: '55.00 лв.'
            },
            {
                id: 6,
                title: 'Спортни екипи - Футболен клуб "Варна"',
                category: 'corporate',
                image: 'assets/images/163092552117133251203370397465352555342733251.png',
                description: 'Спортни екипи с номера и имена на играчи. Висококачествена изброиване, издръжлива при спортни натоварвания.',
                tags: ['спорт', 'футбол', 'екипи'],
                date: '2023-12-10',
                client: 'ФК "Варна"',
                price: '75.00 лв.'
            },
            {
                id: 7,
                title: 'Офисни аксесоари - IT компания',
                category: 'promotional',
                image: 'assets/images/162980603087719568510947709288756380856968771.jpg',
                description: 'Промоционални аксесоари за IT компания - мишки, клавиатури, чанти с фирмен дизайн.',
                tags: ['IT', 'аксесоари', 'офис'],
                date: '2023-12-05',
                client: 'IT Solutions Ltd.',
                price: '30.00 лв.'
            },
            {
                id: 8,
                title: 'Кухненски текстили - Ресторант "Златна рибка"',
                category: 'home',
                image: 'assets/images/163092551861268166688596060618057862619143705.png',
                description: 'Кухненски кърпи и фартуци с логотип на ресторанта. Практични и лесно почистващи се материали.',
                tags: ['кухня', 'ресторант', 'текстил'],
                date: '2023-11-28',
                client: 'Ресторант "Златна рибка"',
                price: '20.00 лв.'
            }
        ];
    }
    
    bindEvents() {
        // Filter buttons
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterPortfolio(btn.dataset.filter);
                this.updateActiveFilter(btn);
            });
        });
        
        // Portfolio item clicks
        document.addEventListener('click', (e) => {
            const portfolioItem = e.target.closest('.portfolio-item');
            if (portfolioItem) {
                const itemId = parseInt(portfolioItem.dataset.id);
                this.openPortfolioModal(itemId);
            }
        });
    }
    
    renderPortfolio() {
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (!portfolioGrid) return;
        
        const filteredData = this.getFilteredData();
        
        portfolioGrid.innerHTML = filteredData.map(item => `
            <div class="portfolio-item" data-id="${item.id}" data-category="${item.category}">
                <div class="portfolio-image-container">
                    <img src="${item.image}" alt="${item.title}" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="portfolio-overlay-content">
                            <h3 class="portfolio-title">${item.title}</h3>
                            <p class="portfolio-category">${this.getCategoryName(item.category)}</p>
                            <div class="portfolio-actions">
                                <button class="btn btn-primary btn-sm" data-action="view">
                                    <i class="fas fa-eye"></i> Виж
                                </button>
                                <button class="btn btn-secondary btn-sm" data-action="like">
                                    <i class="fas fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p class="portfolio-category">${this.getCategoryName(item.category)}</p>
                    <div class="portfolio-meta">
                        <span class="portfolio-date">
                            <i class="fas fa-calendar"></i> ${this.formatDate(item.date)}
                        </span>
                        <span class="portfolio-price">
                            <i class="fas fa-tag"></i> ${item.price}
                        </span>
                    </div>
                    <div class="portfolio-tags">
                        ${item.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');
        
        // Remove scroll animations - items stay in place
    }
    
    getFilteredData() {
        if (this.currentFilter === 'all') {
            return this.portfolioData;
        }
        return this.portfolioData.filter(item => item.category === this.currentFilter);
    }
    
    filterPortfolio(filter) {
        this.currentFilter = filter;
        this.renderPortfolio();
    }
    
    updateActiveFilter(activeBtn) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }
    
    getCategoryName(category) {
        const categoryNames = {
            'corporate': 'Корпоративни',
            'uniforms': 'Униформи',
            'promotional': 'Промо',
            'home': 'Домашни'
        };
        return categoryNames[category] || category;
    }
    
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('bg-BG', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    openPortfolioModal(itemId) {
        const item = this.portfolioData.find(i => i.id === itemId);
        if (!item) return;
        
        const modal = this.createPortfolioModal(item);
        document.body.appendChild(modal);
        this.showModal(modal);
    }
    
    createPortfolioModal(item) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content portfolio-modal">
                <div class="modal-header">
                    <h2 class="modal-title">${item.title}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="portfolio-modal-content">
                        <div class="portfolio-modal-image">
                            <img src="${item.image}" alt="${item.title}" class="modal-image">
                        </div>
                        <div class="portfolio-modal-info">
                            <div class="portfolio-details">
                                <div class="detail-item">
                                    <strong>Клиент:</strong> ${item.client}
                                </div>
                                <div class="detail-item">
                                    <strong>Дата:</strong> ${this.formatDate(item.date)}
                                </div>
                                <div class="detail-item">
                                    <strong>Категория:</strong> ${this.getCategoryName(item.category)}
                                </div>
                                <div class="detail-item">
                                    <strong>Цена:</strong> ${item.price}
                                </div>
                            </div>
                            
                            <div class="portfolio-description">
                                <h3>Описание</h3>
                                <p>${item.description}</p>
                            </div>
                            
                            <div class="portfolio-tags">
                                <h3>Тагове</h3>
                                <div class="tags-list">
                                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                            </div>
                            
                            <div class="portfolio-actions">
                                <button class="btn btn-primary" onclick="this.closest('.modal').remove()">
                                    <i class="fas fa-check"></i> Затвори
                                </button>
                                <button class="btn btn-secondary" onclick="window.artEmbroideryApp.scrollToSection('constructor')">
                                    <i class="fas fa-palette"></i> Създай подобен
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Close modal handlers
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => this.hideModal(modal));
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.hideModal(modal);
        });
        
        return modal;
    }
    
    showModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add animation
        setTimeout(() => {
            modal.querySelector('.modal-content').style.transform = 'scale(1)';
        }, 10);
    }
    
    hideModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
        }, 300);
    }
    
    openGallery(itemId) {
        const item = this.portfolioData.find(i => i.id === itemId);
        if (!item) return;
        
        this.currentImageIndex = this.portfolioData.findIndex(i => i.id === itemId);
        this.isGalleryOpen = true;
        
        const gallery = this.createGallery();
        document.body.appendChild(gallery);
        this.showModal(gallery);
    }
    
    createGallery() {
        const gallery = document.createElement('div');
        gallery.className = 'modal gallery-modal';
        gallery.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">Галерия</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="gallery-container">
                        <button class="gallery-nav gallery-prev" onclick="window.portfolioGallery.previousImage()">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="gallery-image-container">
                            <img src="${this.portfolioData[this.currentImageIndex].image}" 
                                 alt="${this.portfolioData[this.currentImageIndex].title}" 
                                 class="gallery-main-image">
                        </div>
                        <button class="gallery-nav gallery-next" onclick="window.portfolioGallery.nextImage()">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    <div class="gallery-info">
                        <h3>${this.portfolioData[this.currentImageIndex].title}</h3>
                        <p>${this.portfolioData[this.currentImageIndex].description}</p>
                    </div>
                    <div class="gallery-thumbnails">
                        ${this.portfolioData.map((item, index) => `
                            <img src="${item.image}" 
                                 alt="${item.title}" 
                                 class="gallery-thumbnail ${index === this.currentImageIndex ? 'active' : ''}"
                                 onclick="window.portfolioGallery.goToImage(${index})">
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        // Close modal handlers
        const closeBtn = gallery.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => this.hideModal(gallery));
        
        gallery.addEventListener('click', (e) => {
            if (e.target === gallery) this.hideModal(gallery);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.isGalleryOpen) {
                if (e.key === 'ArrowLeft') this.previousImage();
                if (e.key === 'ArrowRight') this.nextImage();
                if (e.key === 'Escape') this.hideModal(gallery);
            }
        });
        
        return gallery;
    }
    
    previousImage() {
        this.currentImageIndex = this.currentImageIndex > 0 
            ? this.currentImageIndex - 1 
            : this.portfolioData.length - 1;
        this.updateGalleryImage();
    }
    
    nextImage() {
        this.currentImageIndex = this.currentImageIndex < this.portfolioData.length - 1 
            ? this.currentImageIndex + 1 
            : 0;
        this.updateGalleryImage();
    }
    
    goToImage(index) {
        this.currentImageIndex = index;
        this.updateGalleryImage();
    }
    
    updateGalleryImage() {
        const mainImage = document.querySelector('.gallery-main-image');
        const thumbnails = document.querySelectorAll('.gallery-thumbnail');
        const info = document.querySelector('.gallery-info');
        
        if (mainImage) {
            mainImage.src = this.portfolioData[this.currentImageIndex].image;
            mainImage.alt = this.portfolioData[this.currentImageIndex].title;
        }
        
        if (info) {
            info.innerHTML = `
                <h3>${this.portfolioData[this.currentImageIndex].title}</h3>
                <p>${this.portfolioData[this.currentImageIndex].description}</p>
            `;
        }
        
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === this.currentImageIndex);
        });
    }
    
    searchPortfolio(query) {
        const filteredData = this.portfolioData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
        
        this.renderFilteredPortfolio(filteredData);
    }
    
    renderFilteredPortfolio(data) {
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (!portfolioGrid) return;
        
        portfolioGrid.innerHTML = data.map(item => `
            <div class="portfolio-item" data-id="${item.id}" data-category="${item.category}">
                <div class="portfolio-image-container">
                    <img src="${item.image}" alt="${item.title}" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="portfolio-overlay-content">
                            <h3 class="portfolio-title">${item.title}</h3>
                            <p class="portfolio-category">${this.getCategoryName(item.category)}</p>
                        </div>
                    </div>
                </div>
                <div class="portfolio-content">
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p class="portfolio-category">${this.getCategoryName(item.category)}</p>
                </div>
            </div>
        `).join('');
    }
}

// Initialize portfolio gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioGallery = new PortfolioGallery();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioGallery;
}
