<?php

session_start();

require_once('utils.php');

$rules = [
    'name' => function () {
        return validate_filled('name');
    },
    'phone' => function () {
        return validate_filled('phone');
    }
];

$errors = [];

if (!empty($_POST)) {
    foreach ($_POST as $key => $value) {
        if (isset($rules[$key])) {
            $rule = $rules[$key];
            $errors[$key] = $rule();
        }

        $errors = array_filter($errors);
    }
}

if (!count($errors)) {
	print('Форма успешно отправлена со следующими полями: <br>');
	print('Имя — ' . $_POST['name'] . '<br>' . 'Телефон — ' . $_POST['phone']);
} else {
	print('Форма отправлена со следующими ошибками: <br>');
	print($errors);
}
