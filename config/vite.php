<?php

use craft\helpers\App;

return [
    'useDevServer' => App::env('ENVIRONMENT') === 'dev' || App::env('CRAFT_ENVIRONMENT') === 'dev',
    'manifestPath' => '@webroot/dist/.vite/manifest.json',
    'devServerInternal' => APP::env('DEV_SERVER_INTERNAL'),
    'serverPublic' => App::env('PRIMARY_SITE_URL') . '/dist/',
    'errorEntry' => '',
    'cacheKeySuffix' => '',
    'devServerPublic' => App::env('PRIMARY_SITE_URL') . APP::env('DEV_SERVER_PORT'),
    'checkDevServer' => App::env('ENVIRONMENT') === 'dev' || App::env('CRAFT_ENVIRONMENT') === 'dev',
];
