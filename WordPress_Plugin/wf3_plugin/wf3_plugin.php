<?php 
/**
 * Plugin Name: wf3_plugin
 */

function wf3_plugin_custom_post_type() {
    register_post_type( 
        'produits', 
        array(
            'labels' => array (
                'name'                => __('Produits', 'wf3_plugin'),
                'singular_name'       => __('Produit', 'wf3_plugin'),
                'menu_name'           => __('Produits', 'wf3_plugin'),
                'parent_item_colon'   => __( 'Produit parent', 'wf3_plugin' ),
                'all_items'           => __( 'Tous les produits', 'wf3_plugin' ),
                'view_item'           => __( 'Voir le produit', 'wf3_plugin' ),
                'add_new_item'        => __( 'Ajouter un nouveau produit', 'wf3_plugin' ),
                'add_new'             => __( 'Nouveau', 'wf3_plugin' ),
                'edit_item'           => __( 'Modifier le produit', 'wf3_plugin' ),
                'update_item'         => __( 'Mettre à jour le produit', 'wf3_plugin' ),
                'search_items'        => __( 'Rechercher un produit', 'wf3_plugin' ),
                'not_found'           => __( 'Non trouvé', 'wf3_plugin' ),
                'not_found_in_trash'  => __( 'Non trouvé dans la corbeille', 'wf3_plugin' ),
            ),
            'label'               => __( 'produits', 'wf3_plugin' ),
            'description'         => __( 'Produits WF', 'wf3_plugin' ),
            'supports'            => array('thumbnail'),
            'hierarchical'        => false,
            'show_ui'             => true,
            'show_in_menu'        => true,
            'show_in_nav_menus'   => true,
            'show_in_admin_bar'   => true,
            'menu_position'       => 5,
            'menu_icon'           => 'dashicons-store',
            'can_export'          => true,
            'has_archive'         => true,
            'exclude_from_search' => false,
            'publicly_queryable'  => true,
            'capability_type'     => 'post',
            'show_in_rest' => true,        
        )
    );
}


add_action( 'init', 'wf3_plugin_custom_post_type' );


