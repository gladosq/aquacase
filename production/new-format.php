<?php

session_start();

require_once('utils.php');

$current_page = 'new-format';

$new_format_content = include_template('new-format-content.php', []);
$page_content = include_template('layout.php', ['content' => $new_format_content, 'current_page' => $current_page]);
print($page_content);
