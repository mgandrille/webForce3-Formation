<?php

function pluginPerso_settings_init() {
    register_setting( 'pluginPerso', 'pluginPerso_options' );
    
    add_settings_section( 
        'pluginPerso_section', 
        'Setting Mon Plugin', 
        'plugginPerso_section_cb', 
        __FILE__ 
    );

    add_settings_field( 
        'nom_qui_va_bien', 
        'Nom qui va bien', 
        'plugginPerso_section_cb', 
        __FILE__ 
        // 'pluginPerso_section', 
        // $args:array 
    );
}

function plugginPerso_section_cb() {
    echo 'Zut, flute et crotte de bique !';
    get_option();
}

// add_action( 'admin_init', 'pluginPerso_settings_init' );

?>

<div class="wrap">
    <h1>Page d'administration de mon plugin</h1>
    <h2>pluginPerso</h2>

    <form action="option.php" method="post">
        <?php 
        settings_fields( __FILE__ );
        do_settings_sections( __FILE__ );
        submit_button( 'Save Settings' );    
        ?>
    </form>
</div>