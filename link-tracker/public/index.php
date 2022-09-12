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

// Return data as CSV if csv URL parameter is present
if($_GET['csv'] ?? false) {
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
    VALUES (?, CURRENT_TIMESTAMP, ?, ?, ?)
');

$identifier = $_GET['id'] ?? 'unknown';
$ip_address = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];

// Check if IP is within Macalester-owned ranges (https://ipinfo.io/AS33692#block-ranges)
$ip_number = ip2long($ip_address);
$is_mac_ip = ($ip_number >= 2374795264 && $ip_number <= 2374811647) || ($ip_number >= 2374811648 && $ip_number <= 2374828031) || ($ip_number >= 2374778880 && $ip_number <= 2374795263);

$statement->bindValue(1, $identifier);
$statement->bindValue(2, $ip_address);
$statement->bindValue(3, $is_mac_ip ? 1 : 0);
$statement->bindValue(4, $user_agent);

$statement->execute();
$database->close();

header('Location: https://75grand.vercel.app');