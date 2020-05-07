<?php 
/**
 * Plugin Name: wf3_plugin
 */


add_action( 'init', 'wfproducts_initPostType' );
add_action( 'init', 'wfproducts_initTaxonomy' );
add_action( 'add_meta_boxes', 'wfproducts_initFields' );
add_action( 'save_post', 'wfproducts_saveFields' );  // sauvegarde un contenu
add_filter('manage_produits_posts_columns' , 'wfproducts_updateProductColumns');// this fills in the columns that were created with each individual post's value
add_action( 'manage_produits_posts_custom_column' , 'wfproducts_updateProductColumnsValues', 10, 2 );

function wfproducts_initPostType() {
    // Set UI labels for Custom Post Type
    $labels = array(
        'name'                => _x( 'Produits', 'Post Type General Name', 'wf-products' ),
        'singular_name'       => _x( 'Produit', 'Post Type Singular Name', 'wf-products' ),
        'menu_name'           => __( 'Produits', 'wf-products' ),
        'parent_item_colon'   => __( 'Produit parent', 'wf-products' ),
        'all_items'           => __( 'Tous les produits', 'wf-products' ),
        'view_item'           => __( 'Voir le produit', 'wf-products' ),
        'add_new_item'        => __( 'Ajouter un nouveau produit', 'wf-products' ),
        'add_new'             => __( 'Nouveau', 'wf-products' ),
        'edit_item'           => __( 'Modifier le produit', 'wf-products' ),
        'update_item'         => __( 'Mettre à jour le produit', 'wf-products' ),
        'search_items'        => __( 'Rechercher un produit', 'wf-products' ),
        'not_found'           => __( 'Non trouvé', 'wf-products' ),
        'not_found_in_trash'  => __( 'Non trouvé dans la corbeille', 'wf-products' ),
    );

    $args = array(
        'label'               => __( 'produits', 'wf-products' ),
        'description'         => __( 'Produits WF', 'wf-products' ),
        'labels'              => $labels,
        'supports'            => array('thumbnail'),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'menu_icon' => 'dashicons-store',
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
        'show_in_rest' => true,
    );

    // Registering your Custom Post Type
    register_post_type( 'produits', $args );

}

function wfproducts_initTaxonomy() {
    register_taxonomy(
        'categorie',
        'produits',
        array(
            'label' => 'Catégorie',
            'labels' => array(
            'name' => 'Catégories',
            'singular_name' => 'Catégorie',
            'all_items' => 'Toutes les catégories',
            'edit_item' => 'Éditer la catégorie',
            'view_item' => 'Voir la catégorie',
            'update_item' => 'Mettre à jour la catégorie',
            'add_new_item' => 'Ajouter une catégorie',
            'new_item_name' => 'Nouvelle catégorie',
            'search_items' => 'Rechercher parmi les catégorie',
            'popular_items' => 'Catégories les plus utilisées'
        ),
        'hierarchical' => false
        )
    );
    
    register_taxonomy_for_object_type( 'categorie', 'produits' );
}

// ajout de meta-box = propriétés

function wfproducts_initFields() {
    add_meta_box(
        'wfproduct_title',
        __( 'Titre', 'wf-products' ),
        'wfproducts_title_meta_box_callback',
        'produits'
    );

    add_meta_box(
        'wfproduct_price',
        __( 'Prix', 'wf-products' ),
        'wfproducts_price_meta_box_callback',
        'produits'
    );
    
}

function wfproducts_title_meta_box_callback( $post ) {

    // Add a nonce field so we can check for it later.
    wp_nonce_field( 'wfproduct_nonce', 'wfproduct_nonce' );

    $title = get_post_meta( $post->ID, 'wfproduct_title', true );
    echo '<input type="text" style="width:100%" name="wfproduct_title" value="' . esc_attr( $title ) . '"/>';
}

function wfproducts_price_meta_box_callback( $post ) {
    $price = get_post_meta( $post->ID, 'wfproduct_price', true );
    echo '<input type="number" style="width:100%" id="" step=".01" name="wfproduct_price" value="' . esc_attr( $price ) . '"/>';
}

function wfproducts_saveFields( $post_id ) {
    // Check if our nonce is set.
    if ( ! isset( $_POST['wfproduct_nonce'] ) ) {
        return;
    }

    // Verify that the nonce is valid.
    if ( ! wp_verify_nonce( $_POST['wfproduct_nonce'], 'wfproduct_nonce' ) ) {
        return;
    }

    // If this is an autosave, our form has not been submitted, so we don't want to do anything.
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }

    // Check the user's permissions.
    if ( isset( $_POST['post_type'] ) && 'page' == $_POST['post_type'] ) {
        if ( ! current_user_can( 'edit_page', $post_id ) ) {
            return;
        }
    }
    else {
        if ( ! current_user_can( 'edit_post', $post_id ) ) {
            return;
        }
    }

    /* OK, it's safe for us to save the data now. */

    // Make sure that it is set.
    if ( ! isset( $_POST['wfproduct_price'] ) ) {
        return;
    }

    // Sanitize user input.
    $title = sanitize_text_field( $_POST['wfproduct_title'] );
    update_post_meta( $post_id, 'wfproduct_title', $title );

    $price = sanitize_text_field( $_POST['wfproduct_price'] );
    update_post_meta( $post_id, 'wfproduct_price', $price );    
}

// ajuste l'affichage du contenu des produirs. evite des colonnes par défaut, met celles définie par nous !
function wfproducts_updateProductColumns($columns) {
    return array(
        'wfproduct_title' => __('Titre'),
        'wfproduct_price' => __('Prix'),
        'post_id' =>__( 'Identifiant technique'),
        'date' =>__( 'Date')
    );
}

function wfproducts_updateProductColumnsValues( $column, $post_id ) {
    // Fill in the columns with meta box info associated with each post
    switch ( $column ) {
        // in this example, a Product has custom fields called 'product_number' and 'product_name'
        case 'wfproduct_title'   :
        case 'wfproduct_price'     :
            echo get_post_meta( $post_id , $column , true );
            break;
        case 'post_id'     :
            echo $post_id;
            break;
    }
}

add_shortcode( 'wfproduits', 'wfproduits_shortcode' );

function wfproduits_shortcode( $atts = [], $content = null) {
    return $content;
}

$atts = [
    'ma categorie' => 'wfproduits categorie',
    'wfproduits'
];

