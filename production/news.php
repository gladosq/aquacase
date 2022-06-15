<?php

session_start();

require_once('utils.php');

$current_page = 'news';

$news_content = include_template('news-content.php', []);
$page_content = include_template('layout.php', ['content' => $news_content, 'current_page' => $current_page]);
print($page_content);
