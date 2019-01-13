<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd870402c8f46fb038a95d0bcd6adfb2e
{
    public static $prefixLengthsPsr4 = array (
        'H' => 
        array (
            'Hybridauth\\' => 11,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Hybridauth\\' => 
        array (
            0 => __DIR__ . '/..' . '/hybridauth/hybridauth/src',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd870402c8f46fb038a95d0bcd6adfb2e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd870402c8f46fb038a95d0bcd6adfb2e::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}