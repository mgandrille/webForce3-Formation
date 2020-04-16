<?php get_header(); ?>

<main role="main" class="container">
  <div class="row">
  <div class="blog-post">
        <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
        <div class="blog-post">
          <h2 class="blog-post-title"><?php the_title(); ?></h2>
          <p> Catégories : <?php the_category($separator = ' - '); ?> <br>
          <p class="blog-post-meta">Le <?php echo get_the_date(); ?> par <a href="#"><?php the_author(); ?></a></p>

          <p><?php the_content(); ?></<p>

          <p><?php the_tags('Tags : '); ?></p>
        </div><!-- /.blog-post -->

        <div class="row">
            <div class="col-6"> <?php previous_post_link(); ?> </div>
            <div class="col-6 text-right"> <?php next_post_link(); ?> </div>        
        </div>


        <?php endwhile; ?>
        <?php endif; ?> 
      </div><!-- /.blog-post -->
      
      
      </div><!-- /.row -->

</main><!-- /.container -->

<?php get_footer(); ?>