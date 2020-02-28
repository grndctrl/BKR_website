<?php
/* Template Name: Contact */

$context = Timber::get_context();
$context['post'] = new TimberPost();
$templates = array( 'pages/page-contact.twig' );

Timber::render( $templates, $context);