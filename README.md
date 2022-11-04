# mqttPractice

# broker server : mosquitto

1. `docker compose up` or `npm run set-broker`

# usage

1.  `npm insatll`
2.  `docker compose up` or `npm run set-broker`
    `mkdir config`
    `mkdir log`
    `touch /config/mosquitto.conf`
    `touch /config/password.txt`
3.  `node publisher.js` or `node run publisher`
4.  `node subscriber.js` or `node run subscriber`

mqtt 실습
mosquitto, docker로 local broker server 만들고,
publisher와 subscriber 통신 테스트 코드

<img width="585" alt="image" src="https://user-images.githubusercontent.com/105476777/199919941-e4169284-89d3-42f8-8e18-0455afd3604e.png">

<img width="606" alt="image" src="https://user-images.githubusercontent.com/105476777/199920073-5a387207-964e-42ed-9cd2-1e218c946bde.png">

<img width="597" alt="image" src="https://user-images.githubusercontent.com/105476777/199920112-d79af8be-072f-43e7-ad39-683fa673ab9e.png">

