'use strict';
var weatherApp = angular.module('weatherApp', []);
weatherApp.controller('WeatherCtrl', function ($scope, $http){
    $http.get("https://api.openweathermap.org/data/2.5/weather?lat=21.027763&lon=105.834160&appid=a7a8a7ed30f023bb3a86e4d12a23ef3b&units=metric").success(function (data){
        if (data){
            $scope.current = data.main.temp;
            $scope.temp_min = data.main.temp_min;
            $scope.temp_max = data.main.temp_max;
            $scope.wind_speed = data.main.wind_speed;
            $scope.clouds = data.clouds ? data.clouds.all : undefined;

            var baseUrl =  'https://ssl.gstatic.com/onebox/weather/128/';

            if ($scope.clouds < 20) {
                $scope.img_url = baseUrl + 'sunny.png';
            } else if ($scope.clouds < 90){
                $scope.img_url = baseUrl + 'partly_cloudy.png';
            }else {
                $scope.img_url = baseUrl + 'cloudy.png';
            }
        }
    })
        .error(function (data, status){
            console.log(data);
        });
});