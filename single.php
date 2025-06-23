<?php get_header(); ?>

<main id="main" class="site-main">
    <?php while (have_posts()) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="container">
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                    <div class="entry-meta">
                        <span class="posted-on">
                            <i class="icon-calendar"></i>
                            <?php echo get_the_date(); ?>
                        </span>
                        <span class="byline">
                            <i class="icon-user"></i>
                            <?php echo get_the_author(); ?>
                        </span>
                        <?php if (has_category()) : ?>
                            <span class="cat-links">
                                <i class="icon-folder"></i>
                                <?php the_category(', '); ?>
                            </span>
                        <?php endif; ?>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="post-thumbnail">
                        <?php the_post_thumbnail('large'); ?>
                    </div>
                <?php endif; ?>

                <div class="entry-content">
                    <?php the_content(); ?>
                    
                    <?php
                    wp_link_pages(array(
                        'before' => '<div class="page-links">' . __('Pages:', 'vedic-wisdom'),
                        'after'  => '</div>',
                    ));
                    ?>
                </div>

                <?php if (has_tag()) : ?>
                    <footer class="entry-footer">
                        <div class="tags-links">
                            <i class="icon-tag"></i>
                            <?php the_tags('', ', '); ?>
                        </div>
                    </footer>
                <?php endif; ?>
            </div>
        </article>

        <nav class="post-navigation">
            <div class="container">
                <div class="nav-links">
                    <?php
                    $prev_post = get_previous_post();
                    $next_post = get_next_post();
                    ?>
                    
                    <?php if ($prev_post) : ?>
                        <div class="nav-previous">
                            <a href="<?php echo get_permalink($prev_post); ?>">
                                <span class="nav-subtitle"><?php _e('Previous Post', 'vedic-wisdom'); ?></span>
                                <span class="nav-title"><?php echo get_the_title($prev_post); ?></span>
                            </a>
                        </div>
                    <?php endif; ?>
                    
                    <?php if ($next_post) : ?>
                        <div class="nav-next">
                            <a href="<?php echo get_permalink($next_post); ?>">
                                <span class="nav-subtitle"><?php _e('Next Post', 'vedic-wisdom'); ?></span>
                                <span class="nav-title"><?php echo get_the_title($next_post); ?></span>
                            </a>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </nav>

        <?php
        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;
        ?>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>