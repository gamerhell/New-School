<?php get_header(); ?>

<main id="main" class="site-main">
    <?php if (have_posts()) : ?>
        <div class="container">
            <div class="posts-grid">
                <?php while (have_posts()) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('post-card'); ?>>
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('medium_large'); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="post-content">
                            <header class="post-header">
                                <h2 class="post-title">
                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                </h2>
                                <div class="post-meta">
                                    <span class="post-date"><?php echo get_the_date(); ?></span>
                                    <span class="post-author"><?php echo get_the_author(); ?></span>
                                </div>
                            </header>
                            
                            <div class="post-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <footer class="post-footer">
                                <a href="<?php the_permalink(); ?>" class="read-more btn btn-outline">
                                    <?php _e('Read More', 'vedic-wisdom'); ?>
                                </a>
                            </footer>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
            
            <div class="pagination">
                <?php
                the_posts_pagination(array(
                    'prev_text' => __('Previous', 'vedic-wisdom'),
                    'next_text' => __('Next', 'vedic-wisdom'),
                ));
                ?>
            </div>
        </div>
    <?php else : ?>
        <div class="container">
            <div class="no-posts">
                <h2><?php _e('Nothing Found', 'vedic-wisdom'); ?></h2>
                <p><?php _e('It seems we can\'t find what you\'re looking for. Perhaps searching can help.', 'vedic-wisdom'); ?></p>
                <?php get_search_form(); ?>
            </div>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>