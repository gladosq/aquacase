<?php

/**
 * Подключает шаблон, передает туда данные и возвращает итоговый HTML контент
 * @param string $name Путь к файлу шаблона относительно папки templates
 * @param array $data Ассоциативный массив с данными для шаблона
 * @return string Итоговый HTML
 */
function include_template($name, array $data = [])
{
    $name = 'templates/' . $name;
    $result = '';

    if (!is_readable($name)) {
        return $result;
    }

    ob_start();
    extract($data);
    require $name;

    $result = ob_get_clean();

    return $result;
}

/**
 * Функция для проверки длины поля
 * Примеры использования:
 * validate_filled($name);
 * @param string $name Наименование значения
 * @return string Возвращает название поля либо пустую строку
 */
function validate_filled($name) {
    if (empty($_POST[$name])) {
        return "Заполните поле";
    }
}