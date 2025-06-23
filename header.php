<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="contact-info">
                <span>
                    <i class="icon-phone"></i>
                    <?php echo get_theme_mod('vedic_phone', '+91 98765 43210'); ?>
                </span>
                <span>
                    <i class="icon-mail"></i>
                    <?php echo get_theme_mod('vedic_email', 'info@vedicschool.edu'); ?>
                </span>
            </div>
            <div class="admission-notice">
                <?php echo get_theme_mod('vedic_admission_notice', 'Admissions Open for 2025-26 | Apply Now'); ?>
            </div>
        </div>
    </div>

    <!-- Main Header -->
    <header id="masthead" class="site-header">
        <nav class="main-nav">
            <div class="container">
                <div class="nav-container">
                    <!-- Site Logo -->
                    <div class="site-branding">
                        <a href="<?php echo esc_url(home_url('/')); ?>" class="site-logo">
                            <div class="logo-icon">
                                <i class="icon-graduation-cap"></i>
                            </div>
                            <div class="logo-text">
                                <h1 class="site-title"><?php bloginfo('name'); ?></h1>
                                <p class="site-tagline"><?php echo get_theme_mod('vedic_sanskrit_tagline', 'विद्या ददाति विनयम्'); ?></p>
                            </div>
                        </a>
                    </div>

                    <!-- Main Navigation -->
                    <div class="main-navigation">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'primary',
                            'menu_id'        => 'primary-menu',
                            'menu_class'     => 'main-menu',
                            'container'      => false,
                            'fallback_cb'    => 'vedic_wisdom_default_menu',
                        ));
                        ?>
                    </div>

                    <!-- Mobile Menu Toggle -->
                    <button class="mobile-menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                        <span class="menu-toggle-icon"></span>
                        <span class="screen-reader-text"><?php _e('Menu', 'vedic-wisdom'); ?></span>
                    </button>
                </div>
            </div>
        </nav>
    </header>

    <div id="content" class="site-content">