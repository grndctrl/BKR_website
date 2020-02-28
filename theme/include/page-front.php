<?php
/* Template Name: Front Page */

$context = Timber::get_context();

$args = array(
  'post_type' => 'bouw',
  'posts_per_page' => 6, // Get all posts
  'orderby' => array(
      'date' => 'DESC' // Order by post date
  )
);
  
$context['bouw_posts'] = Timber::get_posts($args);
$context['post'] = new TimberPost();
$templates = array( 'pages/page-front.twig' );

Timber::render( $templates, $context);