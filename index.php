<?php
include 'vendor/autoload.php';
use Hybridauth\Hybridauth;
use Hybridauth\HttpClient;
$config = [
    'callback' => HttpClient\Util::getCurrentUrl(),
    'providers' => [
        'Line' => [
            'enabled' => true,
            'keys'    => [ 'id' => '1638410516', 'secret' => 'c5a55cf530b929c68cc1e618c1ef9021' ], 
        ],
    ],
];
try {
    $hybridauth = new Hybridauth( $config );
    $adapter = $hybridauth->authenticate( 'Line' );
    $tokens = $adapter->getAccessToken();
    $userProfile = $adapter->getUserProfile();
    // print_r( $tokens );
    print_r( $userProfile );
    $adapter->disconnect();
}
catch (\Exception $e) {
    echo $e->getMessage();
}
