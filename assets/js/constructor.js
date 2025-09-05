// ===== ENHANCED DESIGN CONSTRUCTOR =====
class EnhancedDesignConstructor {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.currentTool = 'text';
        this.currentColor = '#000000';
        this.currentProduct = 'hoodie';
        this.currentSize = 'S';
        this.currentView = 'front';
        this.currentScale = 1;
        this.elements = [];
        this.selectedElement = null;
        this.isDrawing = false;
        this.startX = 0;
        this.startY = 0;
        this.history = [];
        this.historyIndex = -1;
        this.price = 25.00;
        this.basePrice = 25.00;
        
        // Product data
        this.products = {
            hoodie: { name: 'Суитшърт', price: 25, colors: ['white', 'black', 'gray', 'blue', 'red'] },
            tshirt: { name: 'Тениска', price: 20, colors: ['white', 'black', 'gray', 'blue', 'red'] },
            polo: { name: 'Поло', price: 30, colors: ['white', 'black', 'gray', 'blue', 'red'] }
        };
        
        this.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
        this.colors = {
            white: { name: 'Бял', hex: '#ffffff' },
            black: { name: 'Черен', hex: '#000000' },
            gray: { name: 'Сив', hex: '#808080' },
            blue: { name: 'Син', hex: '#0000ff' },
            red: { name: 'Червен', hex: '#ff0000' }
        };
        
        this.init();
    }
    
    init() {
        this.setupCanvas();
        this.bindEvents();
        this.loadProductTemplate();
        this.updatePrice();
        this.updateSelectedItems();
    }
    
    setupCanvas() {
        this.canvas = document.getElementById('design-canvas');
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 400;
        this.canvas.height = 500;
        
        // Set canvas background
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Add border
        this.ctx.strokeStyle = '#e0e0e0';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    bindEvents() {
        // Option buttons (products, age, color, size)
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleOptionClick(btn.dataset.option);
                this.updateActiveOption(btn);
            });
        });
        
        // Add buttons (image, metallic, monogram, etc.)
        const addButtons = document.querySelectorAll('.add-btn');
        addButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleAddClick(btn.dataset.add);
            });
        });
        
        // View thumbnails
        const viewThumbnails = document.querySelectorAll('.view-thumbnail');
        viewThumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                this.selectView(thumb.dataset.view);
                this.updateActiveView(thumb);
            });
        });
        
        // Scale slider
        const scaleSlider = document.querySelector('.scale-slider');
        if (scaleSlider) {
            scaleSlider.addEventListener('input', (e) => {
                this.updateScale(parseFloat(e.target.value));
            });
        }
        
        // Language switcher
        const langButtons = document.querySelectorAll('.language-switcher-constructor .lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchLanguage(btn.dataset.lang);
                this.updateActiveLanguage(btn);
            });
        });
        
        // Canvas events
        if (this.canvas) {
            this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
            this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
            this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e));
            this.canvas.addEventListener('click', (e) => this.handleCanvasClick(e));
        }
        
        // Order button
        const orderBtn = document.querySelector('.order-btn');
        if (orderBtn) {
            orderBtn.addEventListener('click', () => {
                this.orderDesign();
            });
        }
    }
    
    // New methods for enhanced constructor
    handleOptionClick(option) {
        switch (option) {
            case 'products':
                this.showProductModal();
                break;
            case 'age':
                this.showAgeModal();
                break;
            case 'color':
                this.showColorModal();
                break;
            case 'size':
                this.showSizeModal();
                break;
        }
    }
    
    updateActiveOption(activeBtn) {
        const optionButtons = document.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }
    
    handleAddClick(addType) {
        switch (addType) {
            case 'image':
                this.addImageElement();
                break;
            case 'metallic':
                this.addMetallicThreads();
                break;
            case 'monogram':
                this.addMonogram();
                break;
            case 'frames':
                this.addFrames();
                break;
            case 'crown':
                this.addCrownMonogram();
                break;
            case 'figures':
                this.addFigures();
                break;
            case 'text':
                this.addTextElement();
                break;
        }
    }
    
    selectView(view) {
        this.currentView = view;
        this.updateProductImage();
    }
    
    updateActiveView(activeThumb) {
        const viewThumbnails = document.querySelectorAll('.view-thumbnail');
        viewThumbnails.forEach(thumb => thumb.classList.remove('active'));
        activeThumb.classList.add('active');
    }
    
    updateScale(scale) {
        this.currentScale = scale;
        this.updateProductImage();
    }
    
    switchLanguage(lang) {
        // This would integrate with the existing language system
        console.log('Switching language to:', lang);
    }
    
    updateActiveLanguage(activeBtn) {
        const langButtons = document.querySelectorAll('.language-switcher-constructor .lang-btn');
        langButtons.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }
    
    updateSelectedItems() {
        // Update the selected items display in header
        const productItem = document.querySelector('.selected-item[data-product]');
        const colorItem = document.querySelector('.selected-item[data-color]');
        const sizeItem = document.querySelector('.selected-item[data-size]');
        
        if (productItem) {
            productItem.querySelector('.item-name').textContent = this.products[this.currentProduct].name;
        }
        
        if (colorItem) {
            colorItem.querySelector('.item-name').textContent = this.colors.white.name; // Default to white
        }
        
        if (sizeItem) {
            sizeItem.querySelector('.item-name').textContent = this.currentSize;
        }
    }
    
    updateProductImage() {
        const productImage = document.getElementById('product-image');
        if (productImage) {
            // Update image source based on product, color, and view
            const imageSrc = `assets/images/${this.currentProduct}-${this.currentView}.png`;
            productImage.src = imageSrc;
            productImage.style.transform = `scale(${this.currentScale})`;
        }
    }
    
    // Modal methods
    showProductModal() {
        // Create and show product selection modal
        this.createModal('Изберете продукт', this.createProductOptions());
    }
    
    showColorModal() {
        // Create and show color selection modal
        this.createModal('Изберете цвят', this.createColorOptions());
    }
    
    showSizeModal() {
        // Create and show size selection modal
        this.createModal('Изберете размер', this.createSizeOptions());
    }
    
    showAgeModal() {
        // Create and show age selection modal
        this.createModal('Изберете възраст', this.createAgeOptions());
    }
    
    createProductOptions() {
        return Object.entries(this.products).map(([key, product]) => 
            `<button class="modal-option" data-product="${key}">
                <span>${product.name}</span>
                <span class="price">${product.price} лв.</span>
            </button>`
        ).join('');
    }
    
    createColorOptions() {
        return Object.entries(this.colors).map(([key, color]) => 
            `<button class="modal-option color-option" data-color="${key}" style="background-color: ${color.hex};">
                <span>${color.name}</span>
            </button>`
        ).join('');
    }
    
    createSizeOptions() {
        return this.sizes.map(size => 
            `<button class="modal-option" data-size="${size}">${size}</button>`
        ).join('');
    }
    
    createAgeOptions() {
        return ['0+', '3+', '6+', '12+', '16+', '18+'].map(age => 
            `<button class="modal-option" data-age="${age}">${age}</button>`
        ).join('');
    }
    
    createModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">${title}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-options">
                        ${content}
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add event listeners
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => modal.remove());
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
        
        // Add option click handlers
        const options = modal.querySelectorAll('.modal-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                this.handleModalOption(option, title);
                modal.remove();
            });
        });
    }
    
    handleModalOption(option, modalTitle) {
        if (modalTitle.includes('продукт')) {
            this.currentProduct = option.dataset.product;
            this.basePrice = this.products[this.currentProduct].price;
        } else if (modalTitle.includes('цвят')) {
            this.currentColor = option.dataset.color;
        } else if (modalTitle.includes('размер')) {
            this.currentSize = option.dataset.size;
        } else if (modalTitle.includes('възраст')) {
            // Handle age selection
        }
        
        this.updateSelectedItems();
        this.updateProductImage();
        this.updatePrice();
    }
    
    getToolCursor(tool) {
        switch (tool) {
            case 'text': return 'text';
            case 'image': return 'crosshair';
            case 'shape': return 'crosshair';
            default: return 'default';
        }
    }
    
    loadProductTemplate() {
        if (!this.ctx) return;
        
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw product template based on current product
        this.drawProductTemplate();
        
        // Redraw all elements
        this.redrawElements();
    }
    
    drawProductTemplate() {
        this.ctx.fillStyle = '#f8f9fa';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw product outline
        this.ctx.strokeStyle = '#dee2e6';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 5]);
        
        switch (this.currentProduct) {
            case 'tshirt':
                this.drawTshirtTemplate();
                break;
            case 'polo':
                this.drawPoloTemplate();
                break;
            case 'hoodie':
                this.drawHoodieTemplate();
                break;
        }
        
        this.ctx.setLineDash([]);
        
        // Add border
        this.ctx.strokeStyle = '#e0e0e0';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    drawTshirtTemplate() {
        // Simple t-shirt outline
        this.ctx.beginPath();
        this.ctx.moveTo(50, 100);
        this.ctx.lineTo(350, 100);
        this.ctx.lineTo(350, 400);
        this.ctx.lineTo(50, 400);
        this.ctx.closePath();
        this.ctx.stroke();
        
        // Neckline
        this.ctx.beginPath();
        this.ctx.arc(200, 120, 30, 0, Math.PI, true);
        this.ctx.stroke();
    }
    
    drawPoloTemplate() {
        // Polo shirt outline
        this.ctx.beginPath();
        this.ctx.moveTo(50, 100);
        this.ctx.lineTo(350, 100);
        this.ctx.lineTo(350, 400);
        this.ctx.lineTo(50, 400);
        this.ctx.closePath();
        this.ctx.stroke();
        
        // Collar
        this.ctx.beginPath();
        this.ctx.moveTo(170, 100);
        this.ctx.lineTo(200, 120);
        this.ctx.lineTo(230, 100);
        this.ctx.stroke();
    }
    
    drawHoodieTemplate() {
        // Hoodie outline
        this.ctx.beginPath();
        this.ctx.moveTo(50, 100);
        this.ctx.lineTo(350, 100);
        this.ctx.lineTo(350, 400);
        this.ctx.lineTo(50, 400);
        this.ctx.closePath();
        this.ctx.stroke();
        
        // Hood
        this.ctx.beginPath();
        this.ctx.arc(200, 80, 40, Math.PI, 0, false);
        this.ctx.stroke();
    }
    
    handleMouseDown(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.startX = e.clientX - rect.left;
        this.startY = e.clientY - rect.top;
        this.isDrawing = true;
        
        if (this.currentTool === 'text') {
            this.addTextElement(this.startX, this.startY);
        }
    }
    
    handleMouseMove(e) {
        if (!this.isDrawing) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;
        
        if (this.currentTool === 'shape') {
            this.drawShape(this.startX, this.startY, currentX, currentY);
        }
    }
    
    handleMouseUp(e) {
        if (this.isDrawing && this.currentTool === 'shape') {
            const rect = this.canvas.getBoundingClientRect();
            const endX = e.clientX - rect.left;
            const endY = e.clientY - rect.top;
            
            this.addShapeElement(this.startX, this.startY, endX, endY);
            this.saveState();
        }
        
        this.isDrawing = false;
    }
    
    handleCanvasClick(e) {
        if (this.currentTool === 'image') {
            this.addImageElement();
        }
    }
    
    addTextElement(x = 200, y = 250) {
        const text = prompt('Въведете текст:');
        if (!text) return;
        
        const element = {
            id: Date.now(),
            type: 'text',
            x: x,
            y: y,
            text: text,
            color: this.currentColor,
            fontSize: 24,
            fontFamily: 'Arial'
        };
        
        this.elements.push(element);
        this.drawElement(element);
        this.saveState();
        this.updatePrice();
    }
    
    addMetallicThreads() {
        const element = {
            id: Date.now(),
            type: 'metallic',
            x: 200,
            y: 200,
            width: 100,
            height: 50,
            color: '#FFD700'
        };
        
        this.elements.push(element);
        this.drawElement(element);
        this.saveState();
        this.updatePrice();
    }
    
    addMonogram() {
        const text = prompt('Въведете монограм (1-3 букви):');
        if (!text) return;
        
        const element = {
            id: Date.now(),
            type: 'monogram',
            x: 200,
            y: 200,
            text: text.toUpperCase(),
            color: this.currentColor,
            fontSize: 36,
            fontFamily: 'serif'
        };
        
        this.elements.push(element);
        this.drawElement(element);
        this.saveState();
        this.updatePrice();
    }
    
    addFrames() {
        const element = {
            id: Date.now(),
            type: 'frame',
            x: 180,
            y: 180,
            width: 80,
            height: 80,
            color: this.currentColor,
            strokeWidth: 3
        };
        
        this.elements.push(element);
        this.drawElement(element);
        this.saveState();
        this.updatePrice();
    }
    
    addCrownMonogram() {
        const text = prompt('Въведете монограм:');
        if (!text) return;
        
        const element = {
            id: Date.now(),
            type: 'crown-monogram',
            x: 200,
            y: 200,
            text: text.toUpperCase(),
            color: this.currentColor,
            fontSize: 32,
            fontFamily: 'serif'
        };
        
        this.elements.push(element);
        this.drawElement(element);
        this.saveState();
        this.updatePrice();
    }
    
    addFigures() {
        const figures = ['🐻', '⭐', '❤️', '🌟', '🎈'];
        const figure = figures[Math.floor(Math.random() * figures.length)];
        
        const element = {
            id: Date.now(),
            type: 'figure',
            x: 200,
            y: 200,
            text: figure,
            fontSize: 48,
            fontFamily: 'Arial'
        };
        
        this.elements.push(element);
        this.drawElement(element);
        this.saveState();
        this.updatePrice();
    }
    
    addShapeElement(x1, y1, x2, y2) {
        const element = {
            id: Date.now(),
            type: 'shape',
            x: Math.min(x1, x2),
            y: Math.min(y1, y2),
            width: Math.abs(x2 - x1),
            height: Math.abs(y2 - y1),
            color: this.currentColor
        };
        
        this.elements.push(element);
        this.drawElement(element);
        this.updatePrice();
    }
    
    addImageElement() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const element = {
                        id: Date.now(),
                        type: 'image',
                        x: 50,
                        y: 50,
                        width: Math.min(img.width, 200),
                        height: Math.min(img.height, 200),
                        imageData: e.target.result
                    };
                    
                    this.elements.push(element);
                    this.drawElement(element);
                    this.saveState();
                    this.updatePrice();
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };
        
        input.click();
    }
    
    drawElement(element) {
        this.ctx.save();
        
        switch (element.type) {
            case 'text':
                this.drawTextElement(element);
                break;
            case 'shape':
                this.drawShapeElement(element);
                break;
            case 'image':
                this.drawImageElement(element);
                break;
            case 'metallic':
                this.drawMetallicElement(element);
                break;
            case 'monogram':
                this.drawMonogramElement(element);
                break;
            case 'frame':
                this.drawFrameElement(element);
                break;
            case 'crown-monogram':
                this.drawCrownMonogramElement(element);
                break;
            case 'figure':
                this.drawFigureElement(element);
                break;
        }
        
        this.ctx.restore();
    }
    
    drawTextElement(element) {
        this.ctx.fillStyle = element.color;
        this.ctx.font = `${element.fontSize}px ${element.fontFamily}`;
        this.ctx.fillText(element.text, element.x, element.y);
    }
    
    drawShapeElement(element) {
        this.ctx.fillStyle = element.color;
        this.ctx.fillRect(element.x, element.y, element.width, element.height);
    }
    
    drawImageElement(element) {
        const img = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, element.x, element.y, element.width, element.height);
        };
        img.src = element.imageData;
    }
    
    drawMetallicElement(element) {
        // Draw metallic thread effect
        this.ctx.fillStyle = element.color;
        this.ctx.fillRect(element.x, element.y, element.width, element.height);
        
        // Add metallic shine effect
        const gradient = this.ctx.createLinearGradient(element.x, element.y, element.x + element.width, element.y + element.height);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.3)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(element.x, element.y, element.width, element.height);
    }
    
    drawMonogramElement(element) {
        this.ctx.fillStyle = element.color;
        this.ctx.font = `bold ${element.fontSize}px ${element.fontFamily}`;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(element.text, element.x, element.y);
    }
    
    drawFrameElement(element) {
        this.ctx.strokeStyle = element.color;
        this.ctx.lineWidth = element.strokeWidth || 3;
        this.ctx.strokeRect(element.x, element.y, element.width, element.height);
    }
    
    drawCrownMonogramElement(element) {
        // Draw crown
        this.ctx.fillStyle = element.color;
        this.ctx.beginPath();
        this.ctx.moveTo(element.x - 20, element.y - 20);
        this.ctx.lineTo(element.x - 10, element.y - 30);
        this.ctx.lineTo(element.x, element.y - 20);
        this.ctx.lineTo(element.x + 10, element.y - 30);
        this.ctx.lineTo(element.x + 20, element.y - 20);
        this.ctx.closePath();
        this.ctx.fill();
        
        // Draw monogram
        this.ctx.fillStyle = element.color;
        this.ctx.font = `bold ${element.fontSize}px ${element.fontFamily}`;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(element.text, element.x, element.y + 10);
    }
    
    drawFigureElement(element) {
        this.ctx.font = `${element.fontSize}px ${element.fontFamily}`;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(element.text, element.x, element.y);
    }
    
    redrawElements() {
        this.elements.forEach(element => {
            this.drawElement(element);
        });
    }
    
    handleControlAction(action) {
        switch (action) {
            case 'undo':
                this.undo();
                break;
            case 'redo':
                this.redo();
                break;
            case 'clear':
                this.clearCanvas();
                break;
        }
    }
    
    saveState() {
        this.historyIndex++;
        this.history = this.history.slice(0, this.historyIndex);
        this.history.push(JSON.parse(JSON.stringify(this.elements)));
    }
    
    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.elements = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
            this.loadProductTemplate();
        }
    }
    
    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.elements = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
            this.loadProductTemplate();
        }
    }
    
    clearCanvas() {
        if (confirm('Сигурни ли сте, че искате да изчистите всички елементи?')) {
            this.elements = [];
            this.loadProductTemplate();
            this.saveState();
            this.updatePrice();
        }
    }
    
    updatePrice() {
        let totalPrice = this.basePrice;
        
        // Add price for each element
        this.elements.forEach(element => {
            switch (element.type) {
                case 'text':
                    totalPrice += 5.00;
                    break;
                case 'shape':
                    totalPrice += 3.00;
                    break;
                case 'image':
                    totalPrice += 10.00;
                    break;
                case 'metallic':
                    totalPrice += 15.00;
                    break;
                case 'monogram':
                    totalPrice += 8.00;
                    break;
                case 'frame':
                    totalPrice += 6.00;
                    break;
                case 'crown-monogram':
                    totalPrice += 12.00;
                    break;
                case 'figure':
                    totalPrice += 7.00;
                    break;
            }
        });
        
        this.price = totalPrice;
        
        const priceElement = document.querySelector('.price-value');
        if (priceElement) {
            priceElement.textContent = `${totalPrice.toFixed(0)} лв.`;
        }
    }
    
    orderDesign() {
        if (this.elements.length === 0) {
            alert('Моля, добавете поне един елемент преди да направите поръчка.');
            return;
        }
        
        // Create order data
        const orderData = {
            product: this.currentProduct,
            elements: this.elements,
            price: this.price,
            timestamp: new Date().toISOString()
        };
        
        // Save order to localStorage
        const orders = JSON.parse(localStorage.getItem('art-embroidery-orders') || '[]');
        orders.push(orderData);
        localStorage.setItem('art-embroidery-orders', JSON.stringify(orders));
        
        // Show success message
        this.showOrderSuccess();
        
        // Scroll to contact form
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
    
    showOrderSuccess() {
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">Поръчката е създадена!</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Вашият дизайн е запазен успешно. Моля, попълнете контактната форма за да завършим поръчката.</p>
                    <p><strong>Цена: ${this.price.toFixed(2)} лв.</strong></p>
                    <button class="btn btn-primary" onclick="this.closest('.modal').remove()">OK</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal handlers
        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => modal.remove());
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }
    
    exportDesign() {
        if (!this.canvas) return;
        
        // Create download link
        const link = document.createElement('a');
        link.download = `design-${Date.now()}.png`;
        link.href = this.canvas.toDataURL();
        link.click();
    }
    
    importDesign(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

// Initialize enhanced constructor when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.enhancedDesignConstructor = new EnhancedDesignConstructor();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedDesignConstructor;
}


