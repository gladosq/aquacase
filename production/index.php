<?php

session_start();

require_once('utils.php');

$current_page = 'main-page';

$main_page_content = include_template('main-page-content.php', []);
$page_content = include_template('layout.php', ['content' => $main_page_content, 'current_page' => $current_page]);
print($page_content);
