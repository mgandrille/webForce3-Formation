<?php 
/**
 * Plugin Name: pluginPerso
 */

function activatedHook(){
    error_log('Le plugingPerso est Activé, Houra !') ;
}
register_activation_hook(__FILE__, 'activatedHook');

function desactivatedHook(){
    error_log('Le plugingPerso est Désactivé, oh Zut !') ;
}
register_deactivation_hook(__FILE__, 'desactivatedHook');

function uninstalHook(){
    error_log('Le pluginPerso est Désinstallé, Dommage !') ;
}
register_uninstall_hook(__FILE__, 'uninstalHook');


// Création de la page d'administration dans le menu

function pluginPerso_addmenu() {
    error_log("ajout du menu...");
    add_menu_page(
        'plugingPerso admin',  // titre de la page (ne s'affiche pas forcément)
        'Mon Plugin',  // nom dans menu (label)
        'manage_options',  // s'affiche que pour le rôle désigné ici (associé aux utilisateurs)
        plugin_dir_path(__FILE__) . 'admin/pluginAdmin.php',  // chemin vers la page appelée
        null,  // option
        'dashicons-plamtree', //icone
        20  // potitionnement dans le menu
    );
}

add_action( 'admin_menu', 'pluginPerso_addmenu');