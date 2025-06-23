<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <h1>
                    <span class="highlight"><?php _e('Vedic Wisdom', 'vedic-wisdom'); ?></span><br>
                    <?php _e('School', 'vedic-wisdom'); ?>
                </h1>
                <div class="sanskrit-text">
                    <?php echo get_theme_mod('vedic_sanskrit_tagline', 'विद्या ददाति विनयम्'); ?>
                </div>
                <p class="translation">
                    <?php _e('Knowledge bestows humility', 'vedic-wisdom'); ?>
                </p>
                
                <p class="hero-description">
                    <?php _e('Nurturing young minds with ancient wisdom and modern education. Where traditional values meet contemporary learning for holistic development.', 'vedic-wisdom'); ?>
                </p>
                
                <div class="hero-buttons">
                    <a href="#admissions" class="btn btn-primary">
                        <?php _e('Apply for Admission', 'vedic-wisdom'); ?>
                    </a>
                    <a href="#about" class="btn btn-outline">
                        <?php _e('Learn More', 'vedic-wisdom'); ?>
                    </a>
                </div>

                <div class="hero-stats">
                    <div class="stat-item">
                        <div class="stat-icon">
                            <i class="icon-award"></i>
                        </div>
                        <div class="stat-number">25+</div>
                        <div class="stat-label"><?php _e('Years Excellence', 'vedic-wisdom'); ?></div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">
                            <i class="icon-users"></i>
                        </div>
                        <div class="stat-number">2000+</div>
                        <div class="stat-label"><?php _e('Happy Students', 'vedic-wisdom'); ?></div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">
                            <i class="icon-book-open"></i>
                        </div>
                        <div class="stat-number">100%</div>
                        <div class="stat-label"><?php _e('Success Rate', 'vedic-wisdom'); ?></div>
                    </div>
                </div>
            </div>

            <div class="hero-image">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hero-students.jpg" alt="<?php _e('Students learning', 'vedic-wisdom'); ?>">
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title"><?php _e('About Our School', 'vedic-wisdom'); ?></h2>
            <p class="section-description">
                <?php _e('Rooted in ancient wisdom, reaching for modern excellence', 'vedic-wisdom'); ?>
            </p>
        </div>

        <div class="grid grid-2" style="margin-bottom: 5rem;">
            <div>
                <h3><?php _e('Our Philosophy', 'vedic-wisdom'); ?></h3>
                <p>
                    <?php _e('At Vedic Wisdom School, we believe that true education encompasses not just academic excellence but the holistic development of mind, body, and spirit. Our curriculum seamlessly integrates time-tested Vedic principles with contemporary educational methodologies.', 'vedic-wisdom'); ?>
                </p>
                <p>
                    <?php _e('We nurture students to become compassionate leaders, critical thinkers, and responsible global citizens who honor their cultural heritage while embracing innovation and progress.', 'vedic-wisdom'); ?>
                </p>
                
                <div class="quote-box">
                    <blockquote>
                        "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः"
                    </blockquote>
                    <p><?php _e('The teacher is Brahma, Vishnu, and Shiva - the creator, sustainer, and transformer of knowledge', 'vedic-wisdom'); ?></p>
                </div>
            </div>
            
            <div>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/traditional-learning.jpg" alt="<?php _e('Traditional learning', 'vedic-wisdom'); ?>" style="border-radius: 1rem;">
            </div>
        </div>

        <div class="grid grid-4">
            <?php
            $values = array(
                array(
                    'icon' => 'heart',
                    'title' => __('Compassion', 'vedic-wisdom'),
                    'sanskrit' => 'करुणा',
                    'description' => __('Fostering empathy and kindness in every interaction', 'vedic-wisdom')
                ),
                array(
                    'icon' => 'target',
                    'title' => __('Discipline', 'vedic-wisdom'),
                    'sanskrit' => 'अनुशासन',
                    'description' => __('Building character through structured learning', 'vedic-wisdom')
                ),
                array(
                    'icon' => 'eye',
                    'title' => __('Wisdom', 'vedic-wisdom'),
                    'sanskrit' => 'ज्ञान',
                    'description' => __('Seeking knowledge beyond textbooks', 'vedic-wisdom')
                ),
                array(
                    'icon' => 'lightbulb',
                    'title' => __('Innovation', 'vedic-wisdom'),
                    'sanskrit' => 'नवाचार',
                    'description' => __('Blending tradition with modern thinking', 'vedic-wisdom')
                )
            );
            
            foreach ($values as $value) : ?>
                <div class="card text-center">
                    <div class="card-icon">
                        <i class="icon-<?php echo $value['icon']; ?>"></i>
                    </div>
                    <h4><?php echo $value['title']; ?></h4>
                    <p class="sanskrit-text"><?php echo $value['sanskrit']; ?></p>
                    <p class="card-description"><?php echo $value['description']; ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Academics Section -->
<section id="academics" class="section" style="background: #f9fafb;">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title"><?php _e('Academic Excellence', 'vedic-wisdom'); ?></h2>
            <p class="section-description">
                <?php _e('Comprehensive curriculum blending traditional wisdom with modern education', 'vedic-wisdom'); ?>
            </p>
        </div>

        <div class="grid grid-3">
            <?php
            $programs = array(
                array(
                    'icon' => 'book-open',
                    'title' => __('Sanskrit & Literature', 'vedic-wisdom'),
                    'description' => __('Deep study of ancient texts, poetry, and classical literature', 'vedic-wisdom'),
                    'subjects' => array('Sanskrit Grammar', 'Vedic Literature', 'Classical Poetry', 'Philosophy')
                ),
                array(
                    'icon' => 'calculator',
                    'title' => __('Mathematics & Sciences', 'vedic-wisdom'),
                    'description' => __('Modern STEM education with logical reasoning emphasis', 'vedic-wisdom'),
                    'subjects' => array('Advanced Mathematics', 'Physics', 'Chemistry', 'Biology')
                ),
                array(
                    'icon' => 'globe',
                    'title' => __('Social Sciences', 'vedic-wisdom'),
                    'description' => __('Understanding society through historical and cultural lens', 'vedic-wisdom'),
                    'subjects' => array('Indian History', 'Geography', 'Civics', 'Economics')
                ),
                array(
                    'icon' => 'palette',
                    'title' => __('Arts & Crafts', 'vedic-wisdom'),
                    'description' => __('Creative expression through traditional and modern arts', 'vedic-wisdom'),
                    'subjects' => array('Classical Dance', 'Painting', 'Sculpture', 'Handicrafts')
                ),
                array(
                    'icon' => 'music',
                    'title' => __('Music & Performance', 'vedic-wisdom'),
                    'description' => __('Classical and contemporary music education', 'vedic-wisdom'),
                    'subjects' => array('Vocal Music', 'Instrumental', 'Drama', 'Public Speaking')
                ),
                array(
                    'icon' => 'dumbbell',
                    'title' => __('Physical Education', 'vedic-wisdom'),
                    'description' => __('Holistic physical development and sports', 'vedic-wisdom'),
                    'subjects' => array('Yoga', 'Traditional Games', 'Modern Sports', 'Martial Arts')
                )
            );
            
            foreach ($programs as $program) : ?>
                <div class="card">
                    <div class="card-icon">
                        <i class="icon-<?php echo $program['icon']; ?>"></i>
                    </div>
                    <h3 class="card-title"><?php echo $program['title']; ?></h3>
                    <p class="card-description"><?php echo $program['description']; ?></p>
                    <ul class="subject-list">
                        <?php foreach ($program['subjects'] as $subject) : ?>
                            <li><?php echo $subject; ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Faculty Section -->
<section id="faculty" class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title"><?php _e('Our Distinguished Faculty', 'vedic-wisdom'); ?></h2>
            <p class="section-description">
                <?php _e('Experienced educators dedicated to nurturing young minds with wisdom and care', 'vedic-wisdom'); ?>
            </p>
        </div>

        <div class="grid grid-3">
            <?php
            $faculty_query = new WP_Query(array(
                'post_type' => 'faculty',
                'posts_per_page' => 6,
                'post_status' => 'publish'
            ));
            
            if ($faculty_query->have_posts()) :
                while ($faculty_query->have_posts()) : $faculty_query->the_post();
                    $position = get_post_meta(get_the_ID(), '_faculty_position', true);
                    $qualification = get_post_meta(get_the_ID(), '_faculty_qualification', true);
                    $experience = get_post_meta(get_the_ID(), '_faculty_experience', true);
                    ?>
                    <div class="card faculty-card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="faculty-image">
                                <?php the_post_thumbnail('vedic-faculty'); ?>
                            </div>
                        <?php endif; ?>
                        <div class="faculty-info">
                            <h3><?php the_title(); ?></h3>
                            <?php if ($position) : ?>
                                <p class="faculty-position"><?php echo esc_html($position); ?></p>
                            <?php endif; ?>
                            <?php if ($qualification) : ?>
                                <p class="faculty-qualification"><?php echo esc_html($qualification); ?></p>
                            <?php endif; ?>
                            <?php if ($experience) : ?>
                                <p class="faculty-experience"><?php echo esc_html($experience); ?> <?php _e('Experience', 'vedic-wisdom'); ?></p>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php
                endwhile;
                wp_reset_postdata();
            endif;
            ?>
        </div>
    </div>
</section>

<!-- Events Section -->
<section id="events" class="section" style="background: #f9fafb;">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title"><?php _e('Upcoming Events', 'vedic-wisdom'); ?></h2>
            <p class="section-description">
                <?php _e('Celebrating learning, culture, and community through engaging activities', 'vedic-wisdom'); ?>
            </p>
        </div>

        <div class="grid grid-2">
            <?php
            $events_query = new WP_Query(array(
                'post_type' => 'events',
                'posts_per_page' => 4,
                'post_status' => 'publish',
                'meta_key' => '_event_date',
                'orderby' => 'meta_value',
                'order' => 'ASC'
            ));
            
            if ($events_query->have_posts()) :
                while ($events_query->have_posts()) : $events_query->the_post();
                    $event_date = get_post_meta(get_the_ID(), '_event_date', true);
                    $event_time = get_post_meta(get_the_ID(), '_event_time', true);
                    $event_location = get_post_meta(get_the_ID(), '_event_location', true);
                    $event_category = get_post_meta(get_the_ID(), '_event_category', true);
                    ?>
                    <div class="card event-card">
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="event-image">
                                <?php the_post_thumbnail('vedic-card'); ?>
                                <?php if ($event_category) : ?>
                                    <span class="event-category"><?php echo ucfirst($event_category); ?></span>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                        <div class="event-info">
                            <h3><?php the_title(); ?></h3>
                            <div class="event-meta">
                                <?php if ($event_date) : ?>
                                    <span class="event-date">
                                        <i class="icon-calendar"></i>
                                        <?php echo date('F j, Y', strtotime($event_date)); ?>
                                    </span>
                                <?php endif; ?>
                                <?php if ($event_time) : ?>
                                    <span class="event-time">
                                        <i class="icon-clock"></i>
                                        <?php echo date('g:i A', strtotime($event_time)); ?>
                                    </span>
                                <?php endif; ?>
                                <?php if ($event_location) : ?>
                                    <span class="event-location">
                                        <i class="icon-map-pin"></i>
                                        <?php echo esc_html($event_location); ?>
                                    </span>
                                <?php endif; ?>
                            </div>
                            <div class="event-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                        </div>
                    </div>
                    <?php
                endwhile;
                wp_reset_postdata();
            endif;
            ?>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title"><?php _e('Contact Us', 'vedic-wisdom'); ?></h2>
            <p class="section-description">
                <?php _e('We\'re here to help you with any questions about admissions, academics, or school life', 'vedic-wisdom'); ?>
            </p>
        </div>

        <div class="grid grid-2">
            <div class="contact-info">
                <h3><?php _e('Get in Touch', 'vedic-wisdom'); ?></h3>
                
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="icon-map-pin"></i>
                    </div>
                    <div class="contact-details">
                        <h4><?php _e('Address', 'vedic-wisdom'); ?></h4>
                        <p><?php echo get_theme_mod('vedic_address', '123 Vedic Wisdom Lane<br>Knowledge Park, New Delhi'); ?></p>
                    </div>
                </div>
                
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="icon-phone"></i>
                    </div>
                    <div class="contact-details">
                        <h4><?php _e('Phone', 'vedic-wisdom'); ?></h4>
                        <p><?php echo get_theme_mod('vedic_phone', '+91 98765 43210'); ?></p>
                    </div>
                </div>
                
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="icon-mail"></i>
                    </div>
                    <div class="contact-details">
                        <h4><?php _e('Email', 'vedic-wisdom'); ?></h4>
                        <p><?php echo get_theme_mod('vedic_email', 'info@vedicschool.edu'); ?></p>
                    </div>
                </div>
            </div>
            
            <div class="contact-form">
                <?php echo do_shortcode('[vedic_contact_form title="Send us a Message"]'); ?>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>