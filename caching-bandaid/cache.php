<?php

if($_GET['force_clear'] ?? false) apcu_clear_cache();

const WHITELISTED_HOSTS = [
    'api.raindrop.io',
    'www.macalester.edu',
    'opensheet.elk.sh',
    'webapps.macalester.edu',
    'macalester.edu',
    'www.wmcn.fm',
    'calendar.google.com'
];

header('Content-Type: text/plain');
header('Access-Control-Allow-Origin: *');

http_response_code(400);
$url = $_GET['url'] ?? die;

http_response_code(401);
$host = parse_url($url, PHP_URL_HOST);
if(!in_array($host, WHITELISTED_HOSTS)) die;

http_response_code(200);
if($data = apcu_fetch($url)) die($data);

$auth = getallheaders()['authorization'] ?? getallheaders()['Authorization'] ?? '';
$context = stream_context_create([
    'http' => [
        'method' => 'GET',
        'header' => "Authorization: $auth\r\n"
    ]
]);

$data = file_get_contents($url, false, $context ?? null);

apcu_add($url, $data, 60*60); // one hour in seconds
echo $data;