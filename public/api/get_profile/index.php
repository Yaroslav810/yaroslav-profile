<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

echo json_encode([
    'name' => 'Ярослав Кузьмин',
    'text' => 'Здесь будет что-то написано, Здесь будет что-то написано, 
                Здесь будет что-то написано, Здесь будет что-то написано, Здесь будет что-то написано, Здесь будет что-то написано,
                Здесь будет что-то написано, Здесь будет что-то написано,
                Здесь будет что-то написано, Здесь будет что-то написано,
                Здесь будет что-то написано, Здесь будет что-то написано,
                Здесь будет что-то написано!',
    'avatar' => 'https://psv4.userapi.com/c532036/u188735571/docs/d14/e0757d743a0d/yaroslav.jpg?extra=v2ErZl3slV_any5vFDneaXBo5lKTLVwCjKXhDwchD9RycNRnlcjjdZ454GbxNac5MqrpqQMn2Cqk8jgdkgKA1FPZrz1qap3VQhDf51wzkC1Ypd0V7OfLl6uD3GgUjhsIN6w0RD14CPhGnOITRpRSw63NCg',
    'socialNetworks' => [
        [
            'id' => 'vk',
            'title' => 'VK',
            'link' => 'https://vk.com/yariklend'
        ],
        [
            'id' => 'instagram',
            'title' => 'Instagram',
            'link' => 'https://www.instagram.com/vso.tip.top/'
        ],
        [
            'id' => 'telegram',
            'title' => 'Telegram',
            'link' => 'https://t.me/vsotiptop'
        ],
        [
            'id' => 'github',
            'title' => 'GitHub',
            'link' => 'https://github.com/Yaroslav810'
        ],
        [
            'id' => 'youtube',
            'title' => 'YouTube',
            'link' => 'https://www.youtube.com/channel/UCuARJ-O5Gvpb8IdxHjXYoQQ'
        ],
        [
            'id' => 'tel',
            'title' => 'Телефон',
            'link' => 'tel:+79697783077'
        ],
        [
            'id' => 'email',
            'title' => 'Почта',
            'link' => 'mailto:Yaroslav.Kuzmin.01@yandex.ru'
        ]
    ]
]);