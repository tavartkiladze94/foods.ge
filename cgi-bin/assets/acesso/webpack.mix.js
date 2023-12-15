const mix = require('laravel-mix');
require('laravel-mix-bundle-analyzer');

if (!mix.inProduction()) {
    mix.bundleAnalyzer();
}

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');

