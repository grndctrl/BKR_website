<?php
/* Template Name: Newsletter */

$context = Timber::get_context();
$context['post'] = new TimberPost();
$templates = array( 'pages/page-newsletter.twig' );

Timber::render( $templates, $context);