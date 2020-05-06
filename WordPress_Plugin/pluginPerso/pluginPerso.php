<?php 
/**
 * Plugin Name: pluginPerso
 */

function activatedHook(){
    error_log('Le plugingPerso est Activé, Houra !') ;
}

function desactivatedHook(){
    error_log('Le plugingPerso est Désactivé, oh Zut !') ;

}

function uninstalHook(){
    error_log('Le pluginPerso est Désinstallé, Dommage !') ;

}

register_activation_hook(__FILE__, 'activatedHook');
register_deactivation_hook(__FILE__, 'desactivatedHook');
register_uninstall_hook(__FILE__, 'uninstalHook');
