﻿/// <reference path="master.js" />

var wait = setTimeout(function () {
    if (document.body != null) {
        clearTimeout(wait);

        requirejs.config({
            //baseUrl: '/Js/',
            paths: {
                "jquery": "/Js/utility/jquery.min",
                "bootstrap": "/Js/bootstrap/bootstrap.min",
                "master": "master",
                "jquery.signalR-2.2.0.min": "jquery.signalR-2.2.0.min"
            },
            shim: {
                'jquery': { exports: '$' },
                "bootstrap": {
                    deps: ['jquery'],
                    exports: 'bootstrap'
                },
                "master": { deps: ['jquery'] },
                "jquery.signalR-2.2.0.min": { deps: ['jquery'] }
            }
        });

        require(['master', 'bootstrap'], function () {
            console.log("main.js");
            $("#logIn").click(function () { createDialog("/home/login"); });

            $("#MessageMe").click(function () { location.href = "mailto:361703739@qq.com"; });

            $("#SignOut").click(function () { $.post("/home/SignOut", "", function () { location.href = "/home/index" }, "json"); });
              
            pageInit();
        });
   
    }
}, 50);
