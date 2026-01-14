/* ==========================================
   WELBRIDGE - MAIN JAVASCRIPT
   Version: 6.0 - Mobile Menu Standardization
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {

    // ==========================================
    // COOKIE BANNER - RGPD
    // ==========================================
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');

    if (cookieBanner) {
        const cookieConsent = localStorage.getItem('cookieConsent');
        
        if (!cookieConsent) {
            setTimeout(() => {
                cookieBanner.classList.add('active');
            }, 2000);
        }
        
        if (acceptCookies) {
            acceptCookies.addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'accepted');
                cookieBanner.classList.remove('active');
            });
        }
        
        if (declineCookies) {
            declineCookies.addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'declined');
                cookieBanner.classList.remove('active');
            });
        }
    }

    // ==========================================
    // HEADER SCROLL EFFECT
    // ==========================================
    const header = document.getElementById('header');
    
    function handleHeaderScroll() {
        if (header && window.scrollY > 50) {
            header.classList.add('scrolled');
        } else if (header) {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();

    // ==========================================
    // MOBILE MENU (STANDARDIZED)
    // ==========================================
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    // FIX #5: Dedicated setAria function for accessibility
    const setAria = () => {
        if (!mobileToggle || !mobileMenu) return;
        const isOpen = mobileMenu.classList.contains('active');
        mobileMenu.setAttribute('aria-hidden', String(!isOpen));
        mobileToggle.setAttribute('aria-expanded', String(isOpen));
    };

    // FIX #1: Dedicated closeMobileMenu function
    const closeMobileMenu = () => {
        if (!mobileMenu || !mobileToggle) return;
        mobileMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        // FIX #2: Set overflow on both documentElement AND body
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        setAria();
    };

    // Open Mobile Menu function
    const openMobileMenu = () => {
        if (!mobileMenu || !mobileToggle) return;
        mobileMenu.classList.add('active');
        mobileToggle.classList.add('active');
        // FIX #2: Set overflow on both documentElement AND body
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
        setAria();
    };

    // Mobile Toggle Click Handler
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            if (mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Close menu when clicking links inside mobile menu
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // FIX #4: Close button click handler
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    // ==========================================
    // MOBILE DROPDOWN TOGGLE (STANDARDIZED)
    // ==========================================
    document.querySelectorAll('.mobile-dropdown-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const dropdown = button.parentElement;
            const isActive = dropdown.classList.toggle('active');
            // FIX #3: Update aria-expanded on dropdown toggle
            button.setAttribute('aria-expanded', String(isActive));
        });
    });

    // ==========================================
    // LANGUAGE SWITCHER WITH TRANSLATIONS
    // ==========================================
    const translations = {
        en: {
            // Header
            'nav-home': 'Home',
            'nav-services': 'Services',
            'nav-visas': 'Visas',
            'nav-pricing': 'Pricing',
            'nav-about': 'About Us',
            'nav-contact': 'Contact',
            'btn-consultation': 'Free Consultation',
            
            // Hero
            'hero-badge': 'Trusted by 4,740+ clients worldwide',
            'hero-title': 'Your Trusted Partner for <span class="text-premium">Relocating to Portugal</span>',
            'hero-description': 'From visa applications to citizenship — we transform bureaucratic complexity into seamless transitions. Your new chapter in Portugal starts here.',
            'hero-btn-services': 'Explore Services',
            'hero-btn-learn': 'Learn More',
            'stat-clients': 'Clients Served',
            'stat-success': 'Success Rate',
            'stat-countries': 'Countries',
            
            // Features
            'feature-1-title': 'Global Network',
            'feature-1-text': 'Serving clients from 30+ countries with local expertise and international standards.',
            'feature-2-title': 'Legal Compliance',
            'feature-2-text': 'All services fully compliant with Portuguese law. No shortcuts, no risks.',
            'feature-3-title': 'Proven Results',
            'feature-3-text': '97.5% success rate with transparent processes and money-back guarantee.',
            'feature-4-title': 'Dedicated Support',
            'feature-4-text': 'Personal case manager for every client. We\'re with you every step.',
            
            // Services
            'services-label': 'Our Services',
            'services-title': 'Everything You Need for Portugal',
            'services-subtitle': 'Comprehensive relocation services designed to make your move smooth, legal, and stress-free.',
            'services-btn-all': 'View All Services & Pricing',
            
            // Real Estate
            'realestate-label': 'Real Estate Advisory',
            'realestate-title': 'Find Your Perfect Home in Portugal',
            'realestate-intro': 'Whether you\'re looking for a cozy apartment in Lisbon, a beachfront villa in the Algarve, or an investment property in Porto — our real estate experts guide you through every step of the Portuguese property market.',
            'realestate-btn-explore': 'Explore Properties',
            'realestate-btn-schedule': 'Schedule Consultation',
            're-stat-properties': 'Properties Sold',
            're-stat-regions': 'Regions Covered',
            're-stat-response': 'Average Response',
            're-stat-rating': 'Client Rating',
            
            // Testimonials
            'testimonials-label': 'Client Reviews',
            'testimonials-title': 'What Our Clients Say',
            'testimonials-subtitle': 'Real experiences from people who trusted WelBridge for their Portugal journey.',
            
            // About
            'about-label': 'About WelBridge',
            'about-title': 'Built for Expats',
            'about-tagline': 'Your bridge to a new life in Portugal.',
            'about-text-1': 'We understand the dreams and challenges of relocating to a new country. Portugal offers an extraordinary quality of life, rich culture, and welcoming communities — but navigating the bureaucracy can be overwhelming.',
            'about-text-2': 'That\'s why WelBridge exists. We\'ve helped over 4,740 clients from 30+ countries turn their Portuguese dreams into reality. Our expert team handles the complexity, so you can focus on what truly matters: embracing your new life in one of Europe\'s most beautiful destinations.',
            
            // CTA
            'cta-title': 'Let\'s Build Your Portuguese Future Together',
            'cta-subtitle': 'Schedule a free consultation with our relocation experts. We\'ll discuss your goals, answer your questions, and create a personalized plan tailored to your needs.',
            'cta-feature-1': 'Free initial consultation',
            'cta-feature-2': 'Response within 24 hours',
            'cta-feature-3': 'No obligation, no pressure',
            'form-title': 'Schedule a Consultation',
            'form-name': 'Your Name',
            'form-email': 'Email Address',
            'form-phone': 'Phone Number (Optional)',
            'form-service': 'Service Interested In',
            'form-message': 'Your Message',
            'form-consent': 'I agree to the <a href="privacy.html">Privacy Policy</a> and consent to the processing of my personal data.',
            'form-submit': 'Send Message',
            
            // FAQ
            'faq-label': 'FAQ',
            'faq-title': 'Frequently Asked Questions',
            'faq-subtitle': 'Everything you need to know about our services and the relocation process.',
            'faq-contact': 'Still have questions?',
            'faq-contact-text': 'Our team is ready to help with your specific situation.',
            'faq-btn': 'Contact Support',
            
            // Footer
            'footer-description': 'Your trusted partner for relocating to Portugal. Expert guidance through every step of your journey.',
            'footer-services': 'Services',
            'footer-company': 'Company',
            'footer-support': 'Support',
            'footer-copyright': '© 2024 WelBridge. All rights reserved.',
            
            // Cookie Banner
            'cookie-text': 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies and our <a href="privacy.html">Privacy Policy</a>.',
            'cookie-accept': 'Accept',
            'cookie-decline': 'Decline'
        },
        pt: {
            // Header
            'nav-home': 'Início',
            'nav-services': 'Serviços',
            'nav-visas': 'Vistos',
            'nav-pricing': 'Preços',
            'nav-about': 'Sobre Nós',
            'nav-contact': 'Contacto',
            'btn-consultation': 'Consulta Gratuita',
            
            // Hero
            'hero-badge': 'Confiado por mais de 4.740 clientes em todo o mundo',
            'hero-title': 'O Seu Parceiro de Confiança para <span class="text-premium">Mudar para Portugal</span>',
            'hero-description': 'De pedidos de visto a cidadania — transformamos a complexidade burocrática em transições perfeitas. O seu novo capítulo em Portugal começa aqui.',
            'hero-btn-services': 'Explorar Serviços',
            'hero-btn-learn': 'Saber Mais',
            'stat-clients': 'Clientes Servidos',
            'stat-success': 'Taxa de Sucesso',
            'stat-countries': 'Países',
            
            // Features
            'feature-1-title': 'Rede Global',
            'feature-1-text': 'Servindo clientes de mais de 30 países com expertise local e padrões internacionais.',
            'feature-2-title': 'Conformidade Legal',
            'feature-2-text': 'Todos os serviços em total conformidade com a lei portuguesa. Sem atalhos, sem riscos.',
            'feature-3-title': 'Resultados Comprovados',
            'feature-3-text': '97,5% de taxa de sucesso com processos transparentes e garantia de devolução.',
            'feature-4-title': 'Suporte Dedicado',
            'feature-4-text': 'Gestor de caso pessoal para cada cliente. Estamos consigo em cada passo.',
            
            // Services
            'services-label': 'Nossos Serviços',
            'services-title': 'Tudo o Que Precisa para Portugal',
            'services-subtitle': 'Serviços de relocação abrangentes projetados para tornar a sua mudança suave, legal e sem stress.',
            'services-btn-all': 'Ver Todos os Serviços e Preços',
            
            // Real Estate
            'realestate-label': 'Consultoria Imobiliária',
            'realestate-title': 'Encontre a Sua Casa Perfeita em Portugal',
            'realestate-intro': 'Quer esteja à procura de um apartamento acolhedor em Lisboa, uma villa à beira-mar no Algarve, ou um imóvel de investimento no Porto — os nossos especialistas imobiliários guiam-no em cada passo do mercado imobiliário português.',
            'realestate-btn-explore': 'Explorar Imóveis',
            'realestate-btn-schedule': 'Agendar Consulta',
            're-stat-properties': 'Imóveis Vendidos',
            're-stat-regions': 'Regiões Cobertas',
            're-stat-response': 'Resposta Média',
            're-stat-rating': 'Avaliação',
            
            // Testimonials
            'testimonials-label': 'Avaliações de Clientes',
            'testimonials-title': 'O Que Dizem os Nossos Clientes',
            'testimonials-subtitle': 'Experiências reais de pessoas que confiaram na WelBridge para a sua jornada em Portugal.',
            
            // About
            'about-label': 'Sobre a WelBridge',
            'about-title': 'Construída para Expatriados',
            'about-tagline': 'A sua ponte para uma nova vida em Portugal.',
            'about-text-1': 'Compreendemos os sonhos e desafios de mudar para um novo país. Portugal oferece uma qualidade de vida extraordinária, cultura rica e comunidades acolhedoras — mas navegar a burocracia pode ser avassalador.',
            'about-text-2': 'É por isso que a WelBridge existe. Ajudámos mais de 4.740 clientes de mais de 30 países a transformar os seus sonhos portugueses em realidade. A nossa equipa especializada lida com a complexidade, para que possa focar no que realmente importa: abraçar a sua nova vida num dos destinos mais bonitos da Europa.',
            
            // CTA
            'cta-title': 'Vamos Construir o Seu Futuro Português Juntos',
            'cta-subtitle': 'Agende uma consulta gratuita com os nossos especialistas em relocação. Discutiremos os seus objetivos, responderemos às suas perguntas e criaremos um plano personalizado às suas necessidades.',
            'cta-feature-1': 'Consulta inicial gratuita',
            'cta-feature-2': 'Resposta em 24 horas',
            'cta-feature-3': 'Sem obrigação, sem pressão',
            'form-title': 'Agendar uma Consulta',
            'form-name': 'O Seu Nome',
            'form-email': 'Endereço de Email',
            'form-phone': 'Número de Telefone (Opcional)',
            'form-service': 'Serviço de Interesse',
            'form-message': 'A Sua Mensagem',
            'form-consent': 'Concordo com a <a href="privacy.html">Política de Privacidade</a> e consinto o tratamento dos meus dados pessoais.',
            'form-submit': 'Enviar Mensagem',
            
            // FAQ
            'faq-label': 'FAQ',
            'faq-title': 'Perguntas Frequentes',
            'faq-subtitle': 'Tudo o que precisa saber sobre os nossos serviços e o processo de relocação.',
            'faq-contact': 'Ainda tem perguntas?',
            'faq-contact-text': 'A nossa equipa está pronta para ajudar com a sua situação específica.',
            'faq-btn': 'Contactar Suporte',
            
            // Footer
            'footer-description': 'O seu parceiro de confiança para mudar para Portugal. Orientação especializada em cada passo da sua jornada.',
            'footer-services': 'Serviços',
            'footer-company': 'Empresa',
            'footer-support': 'Suporte',
            'footer-copyright': '© 2024 WelBridge. Todos os direitos reservados.',
            
            // Cookie Banner
            'cookie-text': 'Utilizamos cookies para melhorar a sua experiência. Ao continuar a visitar este site, concorda com a nossa utilização de cookies e a nossa <a href="privacy.html">Política de Privacidade</a>.',
            'cookie-accept': 'Aceitar',
            'cookie-decline': 'Recusar'
        }
    };

    let currentLang = localStorage.getItem('language') || 'en';
    
    const langButtons = document.querySelectorAll('.lang-btn');
    
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update active button
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.dataset.translate;
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.dataset.translatePlaceholder;
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    }
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            setLanguage(lang);
        });
    });
    
    // Initialize language
    if (currentLang !== 'en') {
        setLanguage(currentLang);
    }

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#' || href.length <= 1) return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
            }
        });
    });

    // Fix: links index.html#contact / index.html#about
    document.querySelectorAll('a[href="index.html#contact"], a[href="index.html#about"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const path = window.location.pathname;
            if (path.endsWith('index.html') || path === '/' || path.endsWith('/')) {
                e.preventDefault();
                const id = this.getAttribute('href').split('#')[1];
                const target = document.getElementById(id);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // FAQ ACCORDION
    // ==========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // ==========================================
    // TESTIMONIALS CAROUSEL
    // ==========================================
    const track = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');

    if (track && prevBtn && nextBtn && dotsContainer) {
        const slides = track.querySelectorAll('.testimonial-slide');
        const totalSlides = slides.length;
        let currentIndex = 0;
        let slidesPerView = 1;
        let autoplayInterval;

        function updateSlidesPerView() {
            if (window.innerWidth >= 1024) {
                slidesPerView = 3;
            } else if (window.innerWidth >= 768) {
                slidesPerView = 2;
            } else {
                slidesPerView = 1;
            }
        }

        function createDots() {
            dotsContainer.innerHTML = '';
            const numDots = Math.ceil(totalSlides / slidesPerView);
            
            for (let i = 0; i < numDots; i++) {
                const dot = document.createElement('button');
                dot.classList.add('carousel-dot');
                dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
                
                if (i === 0) {
                    dot.classList.add('active');
                }
                
                dot.addEventListener('click', () => {
                    goToSlide(i * slidesPerView);
                    resetAutoplay();
                });
                
                dotsContainer.appendChild(dot);
            }
        }

        function updateCarousel() {
            const slideWidth = 100 / slidesPerView;
            track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
            
            const dots = dotsContainer.querySelectorAll('.carousel-dot');
            const activeDotIndex = Math.floor(currentIndex / slidesPerView);
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === activeDotIndex);
            });

            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
            
            const maxIndex = totalSlides - slidesPerView;
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
            nextBtn.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';
        }

        function goToSlide(index) {
            const maxIndex = Math.max(0, totalSlides - slidesPerView);
            currentIndex = Math.min(Math.max(0, index), maxIndex);
            updateCarousel();
        }

        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        }

        function nextSlide() {
            const maxIndex = totalSlides - slidesPerView;
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        }

        function startAutoplay() {
            autoplayInterval = setInterval(() => {
                const maxIndex = totalSlides - slidesPerView;
                if (currentIndex >= maxIndex) {
                    currentIndex = 0;
                } else {
                    currentIndex++;
                }
                updateCarousel();
            }, 5000);
        }

        function stopAutoplay() {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
            }
        }

        function resetAutoplay() {
            stopAutoplay();
            startAutoplay();
        }

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });

        const carouselWrapper = track.parentElement;
        carouselWrapper.addEventListener('mouseenter', stopAutoplay);
        carouselWrapper.addEventListener('mouseleave', startAutoplay);

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoplay();
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoplay();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
        }

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                updateSlidesPerView();
                createDots();
                currentIndex = 0;
                updateCarousel();
            }, 250);
        });

        // Keyboard navigation for carousel
        document.addEventListener('keydown', (e) => {
            const carouselRect = track.getBoundingClientRect();
            const isInViewport = carouselRect.top < window.innerHeight && carouselRect.bottom > 0;
            
            if (isInViewport) {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                    resetAutoplay();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                    resetAutoplay();
                }
            }
        });

        // Initialize carousel
        updateSlidesPerView();
        createDots();
        updateCarousel();
        startAutoplay();
    }

    // ==========================================
    // CONTACT FORM WITH VALIDATION
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            const consentCheckbox = document.getElementById('consent');
            
            // Clear previous errors
            this.querySelectorAll('.form-error').forEach(el => el.remove());
            this.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            
            let isValid = true;
            
            // Name validation
            if (!data.name || data.name.trim().length < 2) {
                isValid = false;
                showError('name', 'Please enter your full name');
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!data.email || !emailRegex.test(data.email)) {
                isValid = false;
                showError('email', 'Please enter a valid email address');
            }
            
            // Service validation
            if (!data.service) {
                isValid = false;
                showError('service', 'Please select a service');
            }
            
            // Consent validation
            if (consentCheckbox && !consentCheckbox.checked) {
                isValid = false;
                showError('consent', 'Please accept the Privacy Policy');
            }
            
            function showError(fieldName, message) {
                const field = document.getElementById(fieldName);
                if (field) {
                    field.classList.add('error');
                    const errorEl = document.createElement('span');
                    errorEl.className = 'form-error';
                    errorEl.textContent = message;
                    errorEl.style.cssText = 'color: #e53e3e; font-size: 0.75rem; margin-top: 0.25rem; display: block;';
                    field.parentNode.appendChild(errorEl);
                }
            }
            
            if (!isValid) {
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                console.log('Form submitted:', data);
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'form-success';
                successMessage.style.cssText = 'background: #48bb78; color: white; padding: 1rem; border-radius: 8px; text-align: center; margin-bottom: 1rem;';
                successMessage.innerHTML = '<strong>Thank you!</strong><br>We\'ll be in touch within 24 hours.';
                
                this.insertBefore(successMessage, this.firstChild);
                
                // Reset form
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
                
            }, 1500);
        });
        
        // Real-time validation feedback
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                this.classList.remove('error');
                const errorEl = this.parentNode.querySelector('.form-error');
                if (errorEl) errorEl.remove();
            });
        });
    }

    // ==========================================
    // SCROLL ANIMATIONS
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const animatedElements = document.querySelectorAll(
        '.feature-card, .service-card, .about-feature, .testimonial-card, .faq-item, .re-feature, .re-stat-card'
    );
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, index * 50);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(el => {
            el.classList.add('animate-ready');
            observer.observe(el);
        });
    } else {
        animatedElements.forEach(el => {
            el.classList.add('animate-in');
        });
    }

    // ==========================================
    // ACTIVE NAV LINK ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNav() {
        if (!header) return;
        const scrollPosition = window.scrollY + header.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href');
                    if (href === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // ==========================================
    // GLOBE PARALLAX EFFECT
    // ==========================================
    const globeSphere = document.querySelector('.globe-sphere');
    
    if (globeSphere && window.innerWidth > 768) {
        let rafId = null;
        
        document.addEventListener('mousemove', (e) => {
            if (rafId) {
                cancelAnimationFrame(rafId);
            }
            
            rafId = requestAnimationFrame(() => {
                const mouseX = (e.clientX / window.innerWidth - 0.5) * 12;
                const mouseY = (e.clientY / window.innerHeight - 0.5) * 12;
                
                globeSphere.style.transform = `perspective(1000px) rotateY(${mouseX}deg) rotateX(${-mouseY}deg)`;
            });
        });
        
        document.addEventListener('mouseleave', () => {
            globeSphere.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        });
    }

    // ==========================================
    // REAL ESTATE PARALLAX BACKGROUND
    // ==========================================
    const realEstateSection = document.querySelector('.real-estate');
    const realEstateBg = document.querySelector('.real-estate-bg img');
    
    if (realEstateSection && realEstateBg && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const sectionRect = realEstateSection.getBoundingClientRect();
            const isInView = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
            
            if (isInView) {
                const scrollProgress = (window.innerHeight - sectionRect.top) / (window.innerHeight + sectionRect.height);
                const parallaxOffset = (scrollProgress - 0.5) * 50;
                realEstateBg.style.transform = `translateY(${parallaxOffset}px) scale(1.1)`;
            }
        });
    }

    // ==========================================
    // COUNTER ANIMATION FOR STATS
    // ==========================================
    function animateCounter(element, target, suffix = '') {
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(start + (target - start) * easeOutQuart);
            
            element.textContent = current.toLocaleString() + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }

    // Animate stats when they come into view
    const statElements = document.querySelectorAll('.stat-value, .re-stat-number');
    
    if ('IntersectionObserver' in window && statElements.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const text = el.textContent;
                    
                    // Parse the number and suffix
                    const match = text.match(/^([\d,\.]+)(.*)$/);
                    if (match) {
                        const num = parseFloat(match[1].replace(/,/g, ''));
                        const suffix = match[2];
                        
                        if (!isNaN(num)) {
                            animateCounter(el, num, suffix);
                        }
                    }
                    
                    statsObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        
        statElements.forEach(el => {
            statsObserver.observe(el);
        });
    }

    // ==========================================
    // PRELOAD & PAGE READY
    // ==========================================
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Remove any loading states
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 500);
        }
    });

    // ==========================================
    // LAZY LOAD IMAGES
    // ==========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        img.classList.add('loaded');
                    }
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px'
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ==========================================
    // ESC KEY TO CLOSE MOBILE MENU (STANDARDIZED)
    // FIX #6: Uses closeMobileMenu function
    // ==========================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // ==========================================
    // PREVENT SCROLL WHEN MODAL/MENU OPEN
    // ==========================================
    function preventScroll(e) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            e.preventDefault();
        }
    }

    // ==========================================
    // CONSOLE WELCOME MESSAGE
    // ==========================================
    console.log('%c WelBridge ', 'background: #1D3557; color: #DAA520; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Your Trusted Partner for Relocating to Portugal ', 'color: #656565; font-size: 12px;');
    console.log('%c https://welbridge.com ', 'color: #1D3557; font-size: 12px;');

});