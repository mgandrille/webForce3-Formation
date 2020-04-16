<?php get_header(); ?>

<?php get_template_part( 'partials/featured-post' ); ?>

<?php get_template_part( 'partials/highlight-posts' ); ?>


<main role="main" class="container">
  <div class="row">
    <div class="col-md-8 blog-main">
      <h3 class="pb-4 mb-4 font-italic border-bottom">
        From the Firehose
      </h3>

      <div class="blog-post">
        <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
        <div class="blog-post">
          <h2 class="blog-post-title">
          <a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a>
          </h2>
          <p> Catégories : <?php the_category($separator = ' - '); ?> <br>
          <!-- <?php the_shortlink('Cliquez ici pour voir la page de l’article') ?> -->
          <!-- <a href="<?php echo get_permalink($ID); ?>">This is a link</a> -->
          <p class="blog-post-meta">Le <?php echo get_the_date(); ?> par <a href="#"><?php the_author(); ?></a></p>

          <p><?php the_excerpt(); ?></<p>

          <p><?php the_tags('Tags : '); ?></p>
        </div><!-- /.blog-post -->
        <?php endwhile; ?>
        <?php endif; ?> 
      </div><!-- /.blog-post -->


      <nav class="blog-pagination">
        <a class="btn btn-outline-primary" href="#">Older</a>
        <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
      </nav>

    </div><!-- /.blog-main -->

    <?php get_sidebar(); ?>


  </div><!-- /.row -->

</main><!-- /.container -->

<?php get_footer(); ?>