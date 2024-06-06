<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

// Site URL without trailing slash
$SITE_URL = rtrim(App::env('PRIMARY_SITE_URL'), '/');

return GeneralConfig::create()
    // Set the default week start day for date pickers (0 = Sunday, 1 = Monday, etc.)
    ->defaultWeekStartDay(1)
    // Prevent generated URLs from including "index.php"
    ->omitScriptNameInUrls()
    // Enable Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
    ->devMode(App::env('DEV_MODE') ?? false)
    // Preload Single entries as Twig variables
    ->preloadSingles(false)
    // Allow administrative changes
    ->allowAdminChanges(App::env('ALLOW_ADMIN_CHANGES') ?? false)
    // Disallow robots
    ->disallowRobots(App::env('DISALLOW_ROBOTS') ?? false)
    // Prevent user enumeration attacks
    ->preventUserEnumeration()
    // Set the @webroot alias so the clear-caches command knows where to find CP resources
    ->aliases([
        '@webroot' => App::env('CRAFT_WEB_ROOT'),
        '@web' => App::env('PRIMARY_SITE_URL'),
        '@siteUrl' => App::env('PRIMARY_SITE_URL'),
        '@mediaPath' => App::env('FILESYSTEM_MEDIA_PATH'),
        '@mediaUrl' => App::env('FILESYSTEM_MEDIA_URL'),
        '@assets' => App::env('ASSETS'),
        '@viteDevServerPublic' => $SITE_URL . ':' . App::env('VITE_DEV_PORT'),
        '@viteServerPublic' => '@web/dist/',
        '@viteDevServerInternal' => App::env('VITE_DEV_URL'),
    ]);
