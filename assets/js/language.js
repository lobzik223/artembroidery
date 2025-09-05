// ===== LANGUAGE SYSTEM =====
class LanguageManager {
    constructor() {
        this.currentLanguage = 'bg';
        this.translations = {
            bg: {
                // Navigation
                nav_home: 'Начало',
                nav_portfolio: 'Портфолио',
                nav_constructor: 'Конструктор',
                nav_services: 'Услуги',
                nav_contact: 'Контакти',
                
                // Logo
                logo_subtitle: 'Машинна бродерия',
                
                // CTA
                cta_order: 'Поръчай сега',
                
                // Hero
                hero_title: 'Професионална машинна бродерия',
                hero_subtitle: 'Създаваме уникални дизайни на корпоративни дрехи, униформи и аксесоари с високо качество',
                btn_constructor: 'Създай дизайн',
                btn_portfolio: 'Виж портфолио',
                
                // Services
                services_title: 'Нашите услуги',
                services_subtitle: 'Широк спектър от професионални услуги за изброиване',
                service_corporate: 'Корпоративни дрехи',
                service_corporate_desc: 'Изброиване на фирмени логотипи и текстове',
                service_uniforms: 'Униформи',
                service_uniforms_desc: 'Професионални униформи за различни отрасли',
                service_promotional: 'Промоционални изделия',
                service_promotional_desc: 'Тениски, чанти, аксесоари с вашия дизайн',
                service_home: 'Домашни текстили',
                service_home_desc: 'Перници, покривки, кърпи с персонализирани дизайни',
                
                // Portfolio
                portfolio_title: 'Нашето портфолио',
                portfolio_subtitle: 'Разгледайте нашите най-добри проекти',
                filter_all: 'Всички',
                filter_corporate: 'Корпоративни',
                filter_uniforms: 'Униформи',
                filter_promotional: 'Промо',
                filter_home: 'Домашни',
                
                // Constructor
                constructor_title: 'Конструктор на дизайни',
                constructor_subtitle: 'Създайте своя уникален дизайн онлайн',
                tool_products: 'Продукти',
                product_tshirt: 'Тениска',
                product_polo: 'Поло',
                product_hoodie: 'Суитшърт',
                tool_colors: 'Цветове',
                tool_elements: 'Елементи',
                tool_text: 'Текст',
                tool_image: 'Изображение',
                tool_shape: 'Фигура',
                price_label: 'Цена:',
                btn_order_design: 'Поръчай дизайна',
                
                // Contact
                contact_title: 'Свържете се с нас',
                contact_subtitle: 'Готови сме да реализираме вашите идеи',
                contact_address_title: 'Адрес',
                contact_phone_title: 'Телефон',
                contact_email_title: 'Email',
                form_name: 'Име',
                form_email: 'Email',
                form_phone: 'Телефон',
                form_message: 'Съобщение',
                form_submit: 'Изпрати съобщение',
                
                // Footer
                footer_description: 'Професионална машинна бродерия с високо качество и конкурентни цени.',
                footer_services: 'Услуги',
                footer_contact: 'Контакти',
                footer_social: 'Следвайте ни',
                footer_rights: 'Всички права запазени.',
                
                // Notifications
                notification: 'Уведомление',
                language_changed: 'Езикът е сменен успешно',
                
                // Print Section
                print_hero_title: 'Печат върху алуминиеви плочи',
                print_hero_subtitle: 'Професионален печат на алуминиеви плочи, табелки и фото с високо качество и дълготрайност',
                btn_view_services: 'Виж услуги',
                btn_get_quote: 'Получи оферта',
                print_services_title: 'Нашите услуги за печат',
                print_services_subtitle: 'Широк спектър от услуги за печат на различни материали',
                print_aluminum_plates: 'Алуминиеви плочи',
                print_aluminum_desc: 'Печат на алуминиеви плочи с високо качество и дълготрайност',
                print_photo: 'Фото печат',
                print_photo_desc: 'Печат на снимки с високо качество и ярки цветове',
                print_signs: 'Табелки',
                print_signs_desc: 'Изработка на табелки и знаци за различни цели',
                print_icc: 'ICC Профил',
                print_icc_desc: 'Професионална калибрация на цветове за точни резултати',
                print_features_title: 'Защо да изберете нас',
                print_features_subtitle: 'Нашите предимства и професионален подход',
                feature_quality: 'Високо качество',
                feature_quality_desc: 'Използваме най-добрите материали и технологии',
                feature_fast: 'Бърза изработка',
                feature_fast_desc: 'Кратко време за изпълнение на поръчките',
                feature_durable: 'Дълготрайност',
                feature_durable_desc: 'Печатът издържа на времето и външни влияния',
                feature_price: 'Конкурентни цени',
                feature_price_desc: 'Достапни цени за всички клиенти',
                print_contact_title: 'Свържете се с нас',
                print_contact_subtitle: 'Готови сме да реализираме вашите идеи за печат',
                print_service_type: 'Тип услуга',
                form_success: 'Съобщението е изпратено успешно!',
                form_placeholder_message: 'Опишете вашите изисквания...',
                form_validation_required: 'Моля, попълнете това поле'
            },
            
            en: {
                // Navigation
                nav_home: 'Home',
                nav_portfolio: 'Portfolio',
                nav_constructor: 'Constructor',
                nav_services: 'Services',
                nav_contact: 'Contact',
                
                // Logo
                logo_subtitle: 'Machine Embroidery',
                
                // CTA
                cta_order: 'Order Now',
                
                // Hero
                hero_title: 'Professional Machine Embroidery',
                hero_subtitle: 'We create unique designs on corporate clothing, uniforms and accessories with high quality',
                btn_constructor: 'Create Design',
                btn_portfolio: 'View Portfolio',
                
                // Services
                services_title: 'Our Services',
                services_subtitle: 'Wide range of professional embroidery services',
                service_corporate: 'Corporate Clothing',
                service_corporate_desc: 'Embroidery of company logos and texts',
                service_uniforms: 'Uniforms',
                service_uniforms_desc: 'Professional uniforms for various industries',
                service_promotional: 'Promotional Items',
                service_promotional_desc: 'T-shirts, bags, accessories with your design',
                service_home: 'Home Textiles',
                service_home_desc: 'Pillows, covers, towels with personalized designs',
                
                // Portfolio
                portfolio_title: 'Our Portfolio',
                portfolio_subtitle: 'Browse our best projects',
                filter_all: 'All',
                filter_corporate: 'Corporate',
                filter_uniforms: 'Uniforms',
                filter_promotional: 'Promo',
                filter_home: 'Home',
                
                // Constructor
                constructor_title: 'Design Constructor',
                constructor_subtitle: 'Create your unique design online',
                tool_products: 'Products',
                product_tshirt: 'T-shirt',
                product_polo: 'Polo',
                product_hoodie: 'Hoodie',
                tool_colors: 'Colors',
                tool_elements: 'Elements',
                tool_text: 'Text',
                tool_image: 'Image',
                tool_shape: 'Shape',
                price_label: 'Price:',
                btn_order_design: 'Order Design',
                
                // Contact
                contact_title: 'Contact Us',
                contact_subtitle: 'We are ready to realize your ideas',
                contact_address_title: 'Address',
                contact_phone_title: 'Phone',
                contact_email_title: 'Email',
                form_name: 'Name',
                form_email: 'Email',
                form_phone: 'Phone',
                form_message: 'Message',
                form_submit: 'Send Message',
                
                // Footer
                footer_description: 'Professional machine embroidery with high quality and competitive prices.',
                footer_services: 'Services',
                footer_contact: 'Contact',
                footer_social: 'Follow Us',
                footer_rights: 'All rights reserved.',
                
                // Notifications
                notification: 'Notification',
                language_changed: 'Language changed successfully',
                
                // Print Section
                print_hero_title: 'Printing on Aluminum Plates',
                print_hero_subtitle: 'Professional printing on aluminum plates, signs and photos with high quality and durability',
                btn_view_services: 'View Services',
                btn_get_quote: 'Get Quote',
                print_services_title: 'Our Printing Services',
                print_services_subtitle: 'Wide range of printing services on various materials',
                print_aluminum_plates: 'Aluminum Plates',
                print_aluminum_desc: 'High quality and durable printing on aluminum plates',
                print_photo: 'Photo Printing',
                print_photo_desc: 'High quality photo printing with vibrant colors',
                print_signs: 'Signs',
                print_signs_desc: 'Manufacturing of signs and plates for various purposes',
                print_icc: 'ICC Profile',
                print_icc_desc: 'Professional color calibration for accurate results',
                print_features_title: 'Why Choose Us',
                print_features_subtitle: 'Our advantages and professional approach',
                feature_quality: 'High Quality',
                feature_quality_desc: 'We use the best materials and technologies',
                feature_fast: 'Fast Production',
                feature_fast_desc: 'Short time for order fulfillment',
                feature_durable: 'Durability',
                feature_durable_desc: 'Print withstands time and external influences',
                feature_price: 'Competitive Prices',
                feature_price_desc: 'Affordable prices for all customers',
                print_contact_title: 'Contact Us',
                print_contact_subtitle: 'We are ready to realize your printing ideas',
                print_service_type: 'Service Type',
                form_success: 'Message sent successfully!',
                form_placeholder_message: 'Describe your requirements...',
                form_validation_required: 'Please fill out this field'
            },
            
            ru: {
                // Navigation
                nav_home: 'Главная',
                nav_portfolio: 'Портфолио',
                nav_constructor: 'Конструктор',
                nav_services: 'Услуги',
                nav_contact: 'Контакты',
                
                // Logo
                logo_subtitle: 'Машинная вышивка',
                
                // CTA
                cta_order: 'Заказать сейчас',
                
                // Hero
                hero_title: 'Профессиональная машинная вышивка',
                hero_subtitle: 'Создаем уникальные дизайны на корпоративной одежде, униформе и аксессуарах с высоким качеством',
                btn_constructor: 'Создать дизайн',
                btn_portfolio: 'Посмотреть портфолио',
                
                // Services
                services_title: 'Наши услуги',
                services_subtitle: 'Широкий спектр профессиональных услуг по вышивке',
                service_corporate: 'Корпоративная одежда',
                service_corporate_desc: 'Вышивка фирменных логотипов и текстов',
                service_uniforms: 'Униформа',
                service_uniforms_desc: 'Профессиональная униформа для различных отраслей',
                service_promotional: 'Промо-изделия',
                service_promotional_desc: 'Футболки, сумки, аксессуары с вашим дизайном',
                service_home: 'Домашний текстиль',
                service_home_desc: 'Подушки, покрывала, полотенца с персонализированными дизайнами',
                
                // Portfolio
                portfolio_title: 'Наше портфолио',
                portfolio_subtitle: 'Просмотрите наши лучшие проекты',
                filter_all: 'Все',
                filter_corporate: 'Корпоративные',
                filter_uniforms: 'Униформа',
                filter_promotional: 'Промо',
                filter_home: 'Домашние',
                
                // Constructor
                constructor_title: 'Конструктор дизайнов',
                constructor_subtitle: 'Создайте свой уникальный дизайн онлайн',
                tool_products: 'Продукты',
                product_tshirt: 'Футболка',
                product_polo: 'Поло',
                product_hoodie: 'Толстовка',
                tool_colors: 'Цвета',
                tool_elements: 'Элементы',
                tool_text: 'Текст',
                tool_image: 'Изображение',
                tool_shape: 'Фигура',
                price_label: 'Цена:',
                btn_order_design: 'Заказать дизайн',
                
                // Contact
                contact_title: 'Свяжитесь с нами',
                contact_subtitle: 'Мы готовы реализовать ваши идеи',
                contact_address_title: 'Адрес',
                contact_phone_title: 'Телефон',
                contact_email_title: 'Email',
                form_name: 'Имя',
                form_email: 'Email',
                form_phone: 'Телефон',
                form_message: 'Сообщение',
                form_submit: 'Отправить сообщение',
                
                // Footer
                footer_description: 'Профессиональная машинная вышивка с высоким качеством и конкурентными ценами.',
                footer_services: 'Услуги',
                footer_contact: 'Контакты',
                footer_social: 'Следите за нами',
                footer_rights: 'Все права защищены.',
                
                // Notifications
                notification: 'Уведомление',
                language_changed: 'Язык успешно изменен',
                
                // Print Section
                print_hero_title: 'Печать на алюминиевых пластинах',
                print_hero_subtitle: 'Профессиональная печать на алюминиевых пластинах, табличках и фото с высоким качеством и долговечностью',
                btn_view_services: 'Посмотреть услуги',
                btn_get_quote: 'Получить предложение',
                print_services_title: 'Наши услуги печати',
                print_services_subtitle: 'Широкий спектр услуг печати на различных материалах',
                print_aluminum_plates: 'Алюминиевые пластины',
                print_aluminum_desc: 'Печать на алюминиевых пластинах с высоким качеством и долговечностью',
                print_photo: 'Фото печать',
                print_photo_desc: 'Печать фотографий с высоким качеством и яркими цветами',
                print_signs: 'Таблички',
                print_signs_desc: 'Изготовление табличек и знаков для различных целей',
                print_icc: 'ICC Профиль',
                print_icc_desc: 'Профессиональная калибровка цветов для точных результатов',
                print_features_title: 'Почему выбирают нас',
                print_features_subtitle: 'Наши преимущества и профессиональный подход',
                feature_quality: 'Высокое качество',
                feature_quality_desc: 'Используем лучшие материалы и технологии',
                feature_fast: 'Быстрое выполнение',
                feature_fast_desc: 'Короткие сроки выполнения заказов',
                feature_durable: 'Долговечность',
                feature_durable_desc: 'Печать выдерживает время и внешние воздействия',
                feature_price: 'Конкурентные цены',
                feature_price_desc: 'Доступные цены для всех клиентов',
                print_contact_title: 'Свяжитесь с нами',
                print_contact_subtitle: 'Готовы реализовать ваши идеи печати',
                print_service_type: 'Тип услуги',
                form_success: 'Сообщение отправлено успешно!',
                form_placeholder_message: 'Опишите ваши требования...',
                form_validation_required: 'Пожалуйста, заполните это поле'
            }
        };
        
        this.init();
    }
    
    init() {
        this.loadLanguage();
        this.bindEvents();
        this.translatePage();
    }
    
    loadLanguage() {
        const savedLanguage = localStorage.getItem('art-embroidery-language');
        if (savedLanguage && this.translations[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        } else {
            // Detect browser language
            const browserLang = navigator.language.split('-')[0];
            if (this.translations[browserLang]) {
                this.currentLanguage = browserLang;
            }
        }
        
        this.updateLanguageButtons();
    }
    
    bindEvents() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            });
        });
    }
    
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('art-embroidery-language', lang);
            this.updateLanguageButtons();
            this.translatePage();
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
            
            // Show success message
            this.showToast('success', this.getTranslation('language_changed', lang));
        }
    }
    
    updateLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === this.currentLanguage) {
                btn.classList.add('active');
            }
        });
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.dataset.translate;
            const translation = this.getTranslation(key, this.currentLanguage);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translation;
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }
    
    getTranslation(key, lang = null) {
        const language = lang || this.currentLanguage;
        return this.translations[language]?.[key] || key;
    }
    
    showToast(type, message) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-header">
                <h4 class="toast-title">${this.getTranslation('notification', this.currentLanguage)}</h4>
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
        }, 3000);
        
        // Close button
        toast.querySelector('.toast-close').addEventListener('click', () => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        });
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageManager;
}

