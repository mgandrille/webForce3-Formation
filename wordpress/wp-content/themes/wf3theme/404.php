<?php get_header(); ?>

<main role="main" class="container">
    <div class="row">
        <div class="col-12 justify-content-center">
            <h1>Page 404</h1>
        </div>
        <div class="col-12">
            <p>Vous allez être redirigés...</p>
        </div>
    </div>
</main>

<?php get_footer(); ?>

<script>
    setTimeout(() => {
        window.location.href = "http://localhost/wordpress";
    }, 3000);
</script>