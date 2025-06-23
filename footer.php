</div><!-- #content -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-content">
                <!-- School Info -->
                <div class="footer-section">
                    <div class="footer-logo">
                        <div class="logo-icon">
                            <i class="icon-graduation-cap"></i>
                        </div>
                        <div class="logo-text">
                            <h3><?php bloginfo('name'); ?></h3>
                            <p><?php echo get_theme_mod('vedic_sanskrit_tagline', 'विद्या ददाति विनयम्'); ?></p>
                        </div>
                    </div>
                    <p><?php echo get_theme_mod('vedic_footer_description', 'Nurturing young minds with ancient wisdom and modern education for holistic development and character building.'); ?></p>
                    
                    <!-- Social Media Links -->
                    <div class="social-links">
                        <?php if (get_theme_mod('vedic_facebook')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('vedic_facebook')); ?>" target="_blank">
                                <i class="icon-facebook"></i>
                            </a>
                        <?php endif; ?>
                        <?php if (get_theme_mod('vedic_twitter')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('vedic_twitter')); ?>" target="_blank">
                                <i class="icon-twitter"></i>
                            </a>
                        <?php endif; ?>
                        <?php if (get_theme_mod('vedic_instagram')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('vedic_instagram')); ?>" target="_blank">
                                <i class="icon-instagram"></i>
                            </a>
                        <?php endif; ?>
                        <?php if (get_theme_mod('vedic_youtube')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('vedic_youtube')); ?>" target="_blank">
                                <i class="icon-youtube"></i>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-section">
                    <h4><?php _e('Quick Links', 'vedic-wisdom'); ?></h4>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer-quick',
                        'menu_class'     => 'footer-menu',
                        'container'      => false,
                        'fallback_cb'    => false,
                    ));
                    ?>
                </div>

                <!-- Academics -->
                <div class="footer-section">
                    <h4><?php _e('Academics', 'vedic-wisdom'); ?></h4>
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'footer-academics',
                        'menu_class'     => 'footer-menu',
                        'container'      => false,
                        'fallback_cb'    => false,
                    ));
                    ?>
                </div>

                <!-- Contact Info -->
                <div class="footer-section">
                    <h4><?php _e('Contact Info', 'vedic-wisdom'); ?></h4>
                    <div class="contact-details">
                        <p>
                            <i class="icon-map-pin"></i>
                            <?php echo get_theme_mod('vedic_address', '123 Vedic Wisdom Lane<br>Knowledge Park, New Delhi'); ?>
                        </p>
                        <p>
                            <i class="icon-phone"></i>
                            <?php echo get_theme_mod('vedic_phone', '+91 98765 43210'); ?>
                        </p>
                        <p>
                            <i class="icon-mail"></i>
                            <?php echo get_theme_mod('vedic_email', 'info@vedicschool.edu'); ?>
                        </p>
                        <p>
                            <i class="icon-clock"></i>
                            <?php echo get_theme_mod('vedic_hours', 'Mon-Fri: 8:00 AM - 5:00 PM<br>Sat: 9:00 AM - 2:00 PM'); ?>
                        </p>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="copyright">
                    <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php _e('All rights reserved. | Nurturing minds, building character.', 'vedic-wisdom'); ?></p>
                    <div class="made-with-love">
                        <span><?php _e('Made with', 'vedic-wisdom'); ?></span>
                        <i class="icon-heart"></i>
                        <span><?php _e('for future leaders', 'vedic-wisdom'); ?></span>
                    </div>
                </div>
                
                <div class="sanskrit-quote">
                    <p class="sanskrit"><?php echo get_theme_mod('vedic_footer_sanskrit', 'सा विद्या या विमुक्तये'); ?></p>
                    <p class="translation"><?php echo get_theme_mod('vedic_footer_translation', 'True education is that which liberates'); ?></p>
                </div>
            </div>
        </div>
    </footer>
</div><!-- #page -->

<?php wp_footer(); ?>

<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    
    if (mobileToggle && mainMenu) {
        mobileToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            mainMenu.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
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
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.site-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
</script>

</body>
</html>