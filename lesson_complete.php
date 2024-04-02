<?php
// Подключение к базе данных MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lessons_db";

// Получение данных из формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $telegram_login = $_POST['telegram_login'];
    // Далее выполняем необходимые операции с данными, например, обновляем запись в базе данных
    // Создаем подключение
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Проверяем соединение
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    // Проверяем существование пользователя в базе данных
    $sql_select = "SELECT * FROM users WHERE username = '$telegram_login'";
    $result = $conn->query($sql_select);
    if ($result->num_rows > 0) {
        // Обновляем запись, если пользователь найден
        $sql_update = "UPDATE users SET lesson1 = 'зачет' WHERE username = '$telegram_login'";
        if ($conn->query($sql_update) === TRUE) {
            echo "Зачет успешно установлен для пользователя $telegram_login";
        } else {
            echo "Ошибка при обновлении записи: " . $conn->error;
        }
    } else {
        echo "Пользователь $telegram_login не найден в базе данных";
    }
    $conn->close();
}
?>
