<?php

session_start();

require_once('utils.php');

$current_page = 'blog';

$blog_content = include_template('blog-content.php', []);
$page_content = include_template('layout.php', ['content' => $blog_content, 'current_page' => $current_page]);
print($page_content);
