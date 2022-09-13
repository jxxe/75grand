<?php

$database = new SQLite3('../private/database.sqlite3');

$database->exec('
    CREATE TABLE IF NOT EXISTS "visits"
    (
        "identifier" text,
        "timestamp"  integer,
        "ip_address" text,
        "is_mac_ip"  integer,
        "user_agent" text
    );
');

// Return data as CSV if URL parameter is valid
if(array_key_exists('csv', $_GET) && md5($_GET['csv']) === '0867a5e0a417238d4afd090eee9ee037') {
    $query = $database->query('SELECT * FROM visits ORDER BY timestamp');
    $rows = [];
    while($row = $query->fetchArray(SQLITE3_ASSOC)) $rows[] = $row;

    // Convert array to CSV
    $file = fopen('php://memory', 'r+');
    fputcsv($file, array_keys($rows[0]));
    foreach($rows as $row) fputcsv($file, array_values($row));
    rewind($file);
    $csv = stream_get_contents($file);

    // Use text/plain so browser doesn't download file
    header('Content-Type: text/plain');
    die($csv);
}

$statement = $database->prepare('
    INSERT INTO visits (identifier, timestamp, ip_address, is_mac_ip, user_agent)
    VALUES (?, ?, ?, ?, ?)
');

$identifier = $_GET['id'] ?? 'unknown';
$timestamp = time();
$ip_address = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];

// Check if IP is within Macalester-owned ranges (https://ipinfo.io/AS33692#block-ranges)
$ip_number = ip2long($ip_address);
$is_mac_ip = ($ip_number >= 2374795264 && $ip_number <= 2374811647) || ($ip_number >= 2374811648 && $ip_number <= 2374828031) || ($ip_number >= 2374778880 && $ip_number <= 2374795263);

$statement->bindValue(1, $identifier);
$statement->bindValue(2, $timestamp);
$statement->bindValue(3, $ip_address);
$statement->bindValue(4, $is_mac_ip ? 1 : 0);
$statement->bindValue(5, $user_agent);

$statement->execute();
$database->close();

header('Location: https://75grand.vercel.app');