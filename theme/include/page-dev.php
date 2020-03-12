<?php
/* Template Name: DEV */

$context = Timber::get_context();
$context['post'] = new TimberPost();
$templates = array( 'pages/page-dev.twig' );

Timber::render( $templates, $context);
