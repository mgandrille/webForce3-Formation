<?php

/**
 * Fonction qui empilera nos styles
 */
function wf3_enqueue_styles() {
    wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css');
}

/**
 * Déclanchement de wf3_enqueue_styles lors du hook "wp_enqueue_styles"
 */
add_action('wp_enqueue_scripts', 'wf3_enqueue_styles');

/**
 * pour mettre une image en avant dans l'éditeur
 */
add_theme_support( 'post-thumbnails' );

/**
 * Fonction qui gère la sidebar dynamiquement
 */
function tt_register_sidebars() {
    /* Register the 'primary' sidebar. */
    register_sidebar(
        array(
            'id'            => 'primary',
            'name'          => __( 'Primary Sidebar' ),
            'description'   => __( 'A short description of the sidebar.' ),
            'before_widget' => '<div class="p-3 widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<h4 class="font-italic">',
            'after_title'   => '</h4>',
        )
    );
    /* Repeat register_sidebar() code for additional sidebars. */
}
add_action( 'widgets_init', 'tt_register_sidebars' );

?>