<?php
if ($_SERVER['SERVER_NAME'] == 'localhost') {
    define('PUBROOT', 'http://localhost/public_html/portfolio/public/assets/');
    define('DIRROOT', '/opt/lampp/htdocs/public_html/portfolio/');
} else {
    define('PUBROOT', 'https://johnvegagit.github.io/portfolio/public/assets/');
    define('DIRROOT', '/opt/lampp/htdocs/public_html/portfolio/');
}