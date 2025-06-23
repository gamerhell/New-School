/**
 * Vedic Wisdom School Theme JavaScript
 */

(function($) {
    'use strict';

    // Document ready
    $(document).ready(function() {
        initMobileMenu();
        initSmoothScrolling();
        initHeaderScroll();
        initContactForm();
        initAnimations();
    });

    /**
     * Initialize Mobile Menu
     */
    function initMobileMenu() {
        $('.mobile-menu-toggle').on('click', function() {
            var $this = $(this);
            var $menu = $('.main-menu');
            var expanded = $this.attr('aria-expanded') === 'true';
            
            $this.attr('aria-expanded', !expanded);
            $menu.toggleClass('active');
            $('body').toggleClass('menu-open');
        });

        // Close menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.main-navigation, .mobile-menu-toggle').length) {
                $('.main-menu').removeClass('active');
                $('.mobile-menu-toggle').attr('aria-expanded', 'false');
                $('body').removeClass('menu-open');
            }
        });

        // Close menu on window resize
        $(window).on('resize', function() {
            if ($(window).width() > 1024) {
                $('.main-menu').removeClass('active');
                $('.mobile-menu-toggle').attr('aria-expanded', 'false');
                $('body').removeClass('menu-open');
            }
        });
    }

    /**
     * Initialize Smooth Scrolling
     */
    function initSmoothScrolling() {
        $('a[href^="#"]').on('click', function(e) {
            var target = $(this.getAttribute('href'));
            
            if (target.length) {
                e.preventDefault();
                
                var offset = $('.site-header').outerHeight() || 0;
                var targetOffset = target.offset().top - offset;
                
                $('html, body').animate({
                    scrollTop: targetOffset
                }, 800, 'swing');
                
                // Close mobile menu if open
                $('.main-menu').removeClass('active');
                $('.mobile-menu-toggle').attr('aria-expanded', 'false');
                $('body').removeClass('menu-open');
            }
        });
    }

    /**
     * Initialize Header Scroll Effect
     */
    function initHeaderScroll() {
        var $header = $('.site-header');
        var scrollThreshold = 50;
        
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > scrollThreshold) {
                $header.addClass('scrolled');
            } else {
                $header.removeClass('scrolled');
            }
        });
    }

    /**
     * Initialize Contact Form
     */
    function initContactForm() {
        $('.vedic-contact-form').on('submit', function(e) {
            var $form = $(this);
            var $submitBtn = $form.find('button[type="submit"]');
            var originalText = $submitBtn.text();
            
            // Basic validation
            var isValid = true;
            $form.find('[required]').each(function() {
                if (!$(this).val().trim()) {
                    isValid = false;
                    $(this).addClass('error');
                } else {
                    $(this).removeClass('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Show loading state
            $submitBtn.text('Sending...').prop('disabled', true);
            
            // Reset button after delay (form will redirect on success)
            setTimeout(function() {
                $submitBtn.text(originalText).prop('disabled', false);
            }, 3000);
        });
        
        // Show success/error messages
        var urlParams = new URLSearchParams(window.location.search);
        var contactStatus = urlParams.get('contact');
        
        if (contactStatus === 'success') {
            showNotification('Thank you! Your message has been sent successfully.', 'success');
        } else if (contactStatus === 'error') {
            showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
        }
    }

    /**
     * Initialize Animations
     */
    function initAnimations() {
        // Fade in elements on scroll
        var $animatedElements = $('.card, .hero-stats .stat-item, .section-header');
        
        function checkAnimation() {
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();
            
            $animatedElements.each(function() {
                var $element = $(this);
                var elementTop = $element.offset().top;
                
                if (elementTop < scrollTop + windowHeight - 100 && !$element.hasClass('animated')) {
                    $element.addClass('animated fadeInUp');
                }
            });
        }
        
        $(window).on('scroll', checkAnimation);
        checkAnimation(); // Check on load
        
        // Counter animation for stats
        $('.stat-number').each(function() {
            var $this = $(this);
            var countTo = parseInt($this.text().replace(/[^\d]/g, ''));
            var suffix = $this.text().replace(/[\d]/g, '');
            
            if (countTo > 0) {
                $({ countNum: 0 }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum) + suffix);
                    },
                    complete: function() {
                        $this.text(countTo + suffix);
                    }
                });
            }
        });
    }

    /**
     * Show Notification
     */
    function showNotification(message, type) {
        var $notification = $('<div class="notification notification-' + type + '">' + message + '</div>');
        
        $('body').append($notification);
        
        setTimeout(function() {
            $notification.addClass('show');
        }, 100);
        
        setTimeout(function() {
            $notification.removeClass('show');
            setTimeout(function() {
                $notification.remove();
            }, 300);
        }, 5000);
    }

    /**
     * Lazy Loading for Images
     */
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            var imageObserver = new IntersectionObserver(function(entries, observer) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        var img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(function(img) {
                imageObserver.observe(img);
            });
        }
    }

    // Initialize lazy loading
    initLazyLoading();

})(jQuery);

// Vanilla JavaScript for non-jQuery functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Remove loading class when page is fully loaded
    window.addEventListener('load', function() {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu on escape
            var mobileToggle = document.querySelector('.mobile-menu-toggle');
            var mainMenu = document.querySelector('.main-menu');
            
            if (mainMenu && mainMenu.classList.contains('active')) {
                mainMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            }
        }
    });
    
    // Focus management for accessibility
    var focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            var focusableContent = document.querySelectorAll(focusableElements);
            var firstFocusableElement = focusableContent[0];
            var lastFocusableElement = focusableContent[focusableContent.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
});