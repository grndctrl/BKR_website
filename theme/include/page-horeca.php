<?php
/* Template Name: Horeca en Kantoren */

$context = Timber::get_context();
$context['post'] = new TimberPost();
$templates = array( 'pages/page-horeca.twig' );

Timber::render( $templates, $context);