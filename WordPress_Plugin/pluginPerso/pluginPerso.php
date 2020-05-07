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
        'plugingPerso admin',
        'Mon Plugin',
        'manage_options',
        plugin_dir_path(__FILE__) . 'admin/pluginAdmin.php',
        null,
        'dashicons-admin-tools',
        20
    );
}

add_action( 'admin_menu', 'pluginPerso_addmenu');