<?php
/* Template Name: Volg de Bouw */

$context = Timber::get_context();
$context['post'] = new TimberPost();
$templates = array( 'pages/page-bouw.twig' );

Timber::render( $templates, $context);

?>