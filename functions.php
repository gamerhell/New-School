<?php
/**
 * Vedic Wisdom School Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function vedic_wisdom_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo');
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'vedic-wisdom'),
        'footer-quick' => __('Footer Quick Links', 'vedic-wisdom'),
        'footer-academics' => __('Footer Academics', 'vedic-wisdom'),
    ));
    
    // Add image sizes
    add_image_size('vedic-hero', 800, 600, true);
    add_image_size('vedic-card', 400, 300, true);
    add_image_size('vedic-faculty', 300, 300, true);
}
add_action('after_setup_theme', 'vedic_wisdom_setup');

/**
 * Enqueue Scripts and Styles
 */
function vedic_wisdom_scripts() {
    // Enqueue styles
    wp_enqueue_style('vedic-wisdom-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('vedic-wisdom-icons', get_template_directory_uri() . '/assets/css/icons.css', array(), '1.0.0');
    
    // Enqueue scripts
    wp_enqueue_script('vedic-wisdom-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('vedic-wisdom-main', 'vedic_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('vedic_nonce'),
    ));
    
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'vedic_wisdom_scripts');

/**
 * Register Widget Areas
 */
function vedic_wisdom_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar', 'vedic-wisdom'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'vedic-wisdom'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'vedic-wisdom'),
        'id'            => 'footer-widgets',
        'description'   => __('Add widgets to the footer area.', 'vedic-wisdom'),
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'vedic_wisdom_widgets_init');

/**
 * Custom Post Types
 */
function vedic_wisdom_custom_post_types() {
    // Faculty Post Type
    register_post_type('faculty', array(
        'labels' => array(
            'name' => __('Faculty', 'vedic-wisdom'),
            'singular_name' => __('Faculty Member', 'vedic-wisdom'),
            'add_new' => __('Add New Faculty', 'vedic-wisdom'),
            'add_new_item' => __('Add New Faculty Member', 'vedic-wisdom'),
            'edit_item' => __('Edit Faculty Member', 'vedic-wisdom'),
            'new_item' => __('New Faculty Member', 'vedic-wisdom'),
            'view_item' => __('View Faculty Member', 'vedic-wisdom'),
            'search_items' => __('Search Faculty', 'vedic-wisdom'),
            'not_found' => __('No faculty found', 'vedic-wisdom'),
            'not_found_in_trash' => __('No faculty found in trash', 'vedic-wisdom'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-groups',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'faculty'),
    ));
    
    // Events Post Type
    register_post_type('events', array(
        'labels' => array(
            'name' => __('Events', 'vedic-wisdom'),
            'singular_name' => __('Event', 'vedic-wisdom'),
            'add_new' => __('Add New Event', 'vedic-wisdom'),
            'add_new_item' => __('Add New Event', 'vedic-wisdom'),
            'edit_item' => __('Edit Event', 'vedic-wisdom'),
            'new_item' => __('New Event', 'vedic-wisdom'),
            'view_item' => __('View Event', 'vedic-wisdom'),
            'search_items' => __('Search Events', 'vedic-wisdom'),
            'not_found' => __('No events found', 'vedic-wisdom'),
            'not_found_in_trash' => __('No events found in trash', 'vedic-wisdom'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-calendar-alt',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'events'),
    ));
    
    // Testimonials Post Type
    register_post_type('testimonials', array(
        'labels' => array(
            'name' => __('Testimonials', 'vedic-wisdom'),
            'singular_name' => __('Testimonial', 'vedic-wisdom'),
            'add_new' => __('Add New Testimonial', 'vedic-wisdom'),
            'add_new_item' => __('Add New Testimonial', 'vedic-wisdom'),
            'edit_item' => __('Edit Testimonial', 'vedic-wisdom'),
            'new_item' => __('New Testimonial', 'vedic-wisdom'),
            'view_item' => __('View Testimonial', 'vedic-wisdom'),
            'search_items' => __('Search Testimonials', 'vedic-wisdom'),
            'not_found' => __('No testimonials found', 'vedic-wisdom'),
            'not_found_in_trash' => __('No testimonials found in trash', 'vedic-wisdom'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-format-quote',
        'supports' => array('title', 'editor', 'thumbnail'),
        'rewrite' => array('slug' => 'testimonials'),
    ));
}
add_action('init', 'vedic_wisdom_custom_post_types');

/**
 * Custom Meta Boxes
 */
function vedic_wisdom_add_meta_boxes() {
    // Faculty meta box
    add_meta_box(
        'faculty_details',
        __('Faculty Details', 'vedic-wisdom'),
        'vedic_wisdom_faculty_meta_box',
        'faculty',
        'normal',
        'high'
    );
    
    // Event meta box
    add_meta_box(
        'event_details',
        __('Event Details', 'vedic-wisdom'),
        'vedic_wisdom_event_meta_box',
        'events',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'vedic_wisdom_add_meta_boxes');

/**
 * Faculty Meta Box Callback
 */
function vedic_wisdom_faculty_meta_box($post) {
    wp_nonce_field('vedic_wisdom_faculty_meta', 'vedic_wisdom_faculty_nonce');
    
    $position = get_post_meta($post->ID, '_faculty_position', true);
    $qualification = get_post_meta($post->ID, '_faculty_qualification', true);
    $experience = get_post_meta($post->ID, '_faculty_experience', true);
    $specialization = get_post_meta($post->ID, '_faculty_specialization', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="faculty_position"><?php _e('Position', 'vedic-wisdom'); ?></label></th>
            <td><input type="text" id="faculty_position" name="faculty_position" value="<?php echo esc_attr($position); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="faculty_qualification"><?php _e('Qualification', 'vedic-wisdom'); ?></label></th>
            <td><input type="text" id="faculty_qualification" name="faculty_qualification" value="<?php echo esc_attr($qualification); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="faculty_experience"><?php _e('Experience', 'vedic-wisdom'); ?></label></th>
            <td><input type="text" id="faculty_experience" name="faculty_experience" value="<?php echo esc_attr($experience); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="faculty_specialization"><?php _e('Specialization', 'vedic-wisdom'); ?></label></th>
            <td><textarea id="faculty_specialization" name="faculty_specialization" rows="3" class="large-text"><?php echo esc_textarea($specialization); ?></textarea></td>
        </tr>
    </table>
    <?php
}

/**
 * Event Meta Box Callback
 */
function vedic_wisdom_event_meta_box($post) {
    wp_nonce_field('vedic_wisdom_event_meta', 'vedic_wisdom_event_nonce');
    
    $date = get_post_meta($post->ID, '_event_date', true);
    $time = get_post_meta($post->ID, '_event_time', true);
    $location = get_post_meta($post->ID, '_event_location', true);
    $category = get_post_meta($post->ID, '_event_category', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="event_date"><?php _e('Event Date', 'vedic-wisdom'); ?></label></th>
            <td><input type="date" id="event_date" name="event_date" value="<?php echo esc_attr($date); ?>" /></td>
        </tr>
        <tr>
            <th><label for="event_time"><?php _e('Event Time', 'vedic-wisdom'); ?></label></th>
            <td><input type="time" id="event_time" name="event_time" value="<?php echo esc_attr($time); ?>" /></td>
        </tr>
        <tr>
            <th><label for="event_location"><?php _e('Location', 'vedic-wisdom'); ?></label></th>
            <td><input type="text" id="event_location" name="event_location" value="<?php echo esc_attr($location); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="event_category"><?php _e('Category', 'vedic-wisdom'); ?></label></th>
            <td>
                <select id="event_category" name="event_category">
                    <option value="cultural" <?php selected($category, 'cultural'); ?>><?php _e('Cultural', 'vedic-wisdom'); ?></option>
                    <option value="academic" <?php selected($category, 'academic'); ?>><?php _e('Academic', 'vedic-wisdom'); ?></option>
                    <option value="sports" <?php selected($category, 'sports'); ?>><?php _e('Sports', 'vedic-wisdom'); ?></option>
                    <option value="wellness" <?php selected($category, 'wellness'); ?>><?php _e('Wellness', 'vedic-wisdom'); ?></option>
                </select>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Save Meta Box Data
 */
function vedic_wisdom_save_meta_boxes($post_id) {
    // Faculty meta
    if (isset($_POST['vedic_wisdom_faculty_nonce']) && wp_verify_nonce($_POST['vedic_wisdom_faculty_nonce'], 'vedic_wisdom_faculty_meta')) {
        if (isset($_POST['faculty_position'])) {
            update_post_meta($post_id, '_faculty_position', sanitize_text_field($_POST['faculty_position']));
        }
        if (isset($_POST['faculty_qualification'])) {
            update_post_meta($post_id, '_faculty_qualification', sanitize_text_field($_POST['faculty_qualification']));
        }
        if (isset($_POST['faculty_experience'])) {
            update_post_meta($post_id, '_faculty_experience', sanitize_text_field($_POST['faculty_experience']));
        }
        if (isset($_POST['faculty_specialization'])) {
            update_post_meta($post_id, '_faculty_specialization', sanitize_textarea_field($_POST['faculty_specialization']));
        }
    }
    
    // Event meta
    if (isset($_POST['vedic_wisdom_event_nonce']) && wp_verify_nonce($_POST['vedic_wisdom_event_nonce'], 'vedic_wisdom_event_meta')) {
        if (isset($_POST['event_date'])) {
            update_post_meta($post_id, '_event_date', sanitize_text_field($_POST['event_date']));
        }
        if (isset($_POST['event_time'])) {
            update_post_meta($post_id, '_event_time', sanitize_text_field($_POST['event_time']));
        }
        if (isset($_POST['event_location'])) {
            update_post_meta($post_id, '_event_location', sanitize_text_field($_POST['event_location']));
        }
        if (isset($_POST['event_category'])) {
            update_post_meta($post_id, '_event_category', sanitize_text_field($_POST['event_category']));
        }
    }
}
add_action('save_post', 'vedic_wisdom_save_meta_boxes');

/**
 * Customizer Settings
 */
function vedic_wisdom_customize_register($wp_customize) {
    // School Information Section
    $wp_customize->add_section('vedic_school_info', array(
        'title' => __('School Information', 'vedic-wisdom'),
        'priority' => 30,
    ));
    
    // Phone Number
    $wp_customize->add_setting('vedic_phone', array(
        'default' => '+91 98765 43210',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('vedic_phone', array(
        'label' => __('Phone Number', 'vedic-wisdom'),
        'section' => 'vedic_school_info',
        'type' => 'text',
    ));
    
    // Email Address
    $wp_customize->add_setting('vedic_email', array(
        'default' => 'info@vedicschool.edu',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('vedic_email', array(
        'label' => __('Email Address', 'vedic-wisdom'),
        'section' => 'vedic_school_info',
        'type' => 'email',
    ));
    
    // Address
    $wp_customize->add_setting('vedic_address', array(
        'default' => '123 Vedic Wisdom Lane<br>Knowledge Park, New Delhi',
        'sanitize_callback' => 'wp_kses_post',
    ));
    $wp_customize->add_control('vedic_address', array(
        'label' => __('School Address', 'vedic-wisdom'),
        'section' => 'vedic_school_info',
        'type' => 'textarea',
    ));
    
    // Sanskrit Tagline
    $wp_customize->add_setting('vedic_sanskrit_tagline', array(
        'default' => 'विद्या ददाति विनयम्',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('vedic_sanskrit_tagline', array(
        'label' => __('Sanskrit Tagline', 'vedic-wisdom'),
        'section' => 'vedic_school_info',
        'type' => 'text',
    ));
    
    // Social Media Section
    $wp_customize->add_section('vedic_social_media', array(
        'title' => __('Social Media', 'vedic-wisdom'),
        'priority' => 35,
    ));
    
    // Facebook
    $wp_customize->add_setting('vedic_facebook', array(
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('vedic_facebook', array(
        'label' => __('Facebook URL', 'vedic-wisdom'),
        'section' => 'vedic_social_media',
        'type' => 'url',
    ));
    
    // Twitter
    $wp_customize->add_setting('vedic_twitter', array(
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('vedic_twitter', array(
        'label' => __('Twitter URL', 'vedic-wisdom'),
        'section' => 'vedic_social_media',
        'type' => 'url',
    ));
    
    // Instagram
    $wp_customize->add_setting('vedic_instagram', array(
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('vedic_instagram', array(
        'label' => __('Instagram URL', 'vedic-wisdom'),
        'section' => 'vedic_social_media',
        'type' => 'url',
    ));
    
    // YouTube
    $wp_customize->add_setting('vedic_youtube', array(
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('vedic_youtube', array(
        'label' => __('YouTube URL', 'vedic-wisdom'),
        'section' => 'vedic_social_media',
        'type' => 'url',
    ));
}
add_action('customize_register', 'vedic_wisdom_customize_register');

/**
 * Default Menu Fallback
 */
function vedic_wisdom_default_menu() {
    echo '<ul class="main-menu">';
    echo '<li><a href="' . home_url('/') . '">' . __('Home', 'vedic-wisdom') . '</a></li>';
    echo '<li><a href="' . home_url('/about') . '">' . __('About', 'vedic-wisdom') . '</a></li>';
    echo '<li><a href="' . home_url('/academics') . '">' . __('Academics', 'vedic-wisdom') . '</a></li>';
    echo '<li><a href="' . home_url('/admissions') . '">' . __('Admissions', 'vedic-wisdom') . '</a></li>';
    echo '<li><a href="' . home_url('/faculty') . '">' . __('Faculty', 'vedic-wisdom') . '</a></li>';
    echo '<li><a href="' . home_url('/events') . '">' . __('Events', 'vedic-wisdom') . '</a></li>';
    echo '<li><a href="' . home_url('/contact') . '">' . __('Contact', 'vedic-wisdom') . '</a></li>';
    echo '</ul>';
}

/**
 * Excerpt Length
 */
function vedic_wisdom_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'vedic_wisdom_excerpt_length');

/**
 * Excerpt More
 */
function vedic_wisdom_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'vedic_wisdom_excerpt_more');

/**
 * Body Classes
 */
function vedic_wisdom_body_classes($classes) {
    if (!is_sidebar_active('sidebar-1')) {
        $classes[] = 'no-sidebar';
    }
    
    if (is_front_page()) {
        $classes[] = 'front-page';
    }
    
    return $classes;
}
add_filter('body_class', 'vedic_wisdom_body_classes');

/**
 * Contact Form Shortcode
 */
function vedic_wisdom_contact_form_shortcode($atts) {
    $atts = shortcode_atts(array(
        'title' => __('Contact Us', 'vedic-wisdom'),
    ), $atts);
    
    ob_start();
    ?>
    <div class="contact-form-wrapper">
        <h3><?php echo esc_html($atts['title']); ?></h3>
        <form class="vedic-contact-form" method="post" action="">
            <?php wp_nonce_field('vedic_contact_form', 'vedic_contact_nonce'); ?>
            
            <div class="form-row">
                <div class="form-group">
                    <label for="contact_name"><?php _e('Name *', 'vedic-wisdom'); ?></label>
                    <input type="text" id="contact_name" name="contact_name" required>
                </div>
                <div class="form-group">
                    <label for="contact_email"><?php _e('Email *', 'vedic-wisdom'); ?></label>
                    <input type="email" id="contact_email" name="contact_email" required>
                </div>
            </div>
            
            <div class="form-group">
                <label for="contact_subject"><?php _e('Subject *', 'vedic-wisdom'); ?></label>
                <select id="contact_subject" name="contact_subject" required>
                    <option value=""><?php _e('Select a subject', 'vedic-wisdom'); ?></option>
                    <option value="admissions"><?php _e('Admissions Inquiry', 'vedic-wisdom'); ?></option>
                    <option value="academics"><?php _e('Academic Information', 'vedic-wisdom'); ?></option>
                    <option value="facilities"><?php _e('Campus Facilities', 'vedic-wisdom'); ?></option>
                    <option value="fees"><?php _e('Fee Structure', 'vedic-wisdom'); ?></option>
                    <option value="other"><?php _e('Other', 'vedic-wisdom'); ?></option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="contact_message"><?php _e('Message *', 'vedic-wisdom'); ?></label>
                <textarea id="contact_message" name="contact_message" rows="5" required></textarea>
            </div>
            
            <div class="form-group">
                <button type="submit" name="submit_contact" class="btn btn-primary">
                    <?php _e('Send Message', 'vedic-wisdom'); ?>
                </button>
            </div>
        </form>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('vedic_contact_form', 'vedic_wisdom_contact_form_shortcode');

/**
 * Process Contact Form
 */
function vedic_wisdom_process_contact_form() {
    if (isset($_POST['submit_contact']) && wp_verify_nonce($_POST['vedic_contact_nonce'], 'vedic_contact_form')) {
        $name = sanitize_text_field($_POST['contact_name']);
        $email = sanitize_email($_POST['contact_email']);
        $subject = sanitize_text_field($_POST['contact_subject']);
        $message = sanitize_textarea_field($_POST['contact_message']);
        
        $to = get_option('admin_email');
        $email_subject = sprintf(__('Contact Form: %s', 'vedic-wisdom'), $subject);
        $email_message = sprintf(
            __("Name: %s\nEmail: %s\nSubject: %s\n\nMessage:\n%s", 'vedic-wisdom'),
            $name,
            $email,
            $subject,
            $message
        );
        
        $headers = array(
            'Content-Type: text/plain; charset=UTF-8',
            'From: ' . $name . ' <' . $email . '>',
            'Reply-To: ' . $email,
        );
        
        if (wp_mail($to, $email_subject, $email_message, $headers)) {
            wp_redirect(add_query_arg('contact', 'success', wp_get_referer()));
            exit;
        } else {
            wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
            exit;
        }
    }
}
add_action('init', 'vedic_wisdom_process_contact_form');