$("document").ready(function() {
    //Hide all the stuff to fade in
    $("#apa-img").hide();
    $("#accent-1").hide();
    //$("#intro-text").css("opacity", "0");
    //$(".heading").css("opacity", "0");
    $(".fadeIn").css("opacity", "0");

    $("#apa-img").fadeIn(8000);
    $("#accent-1").fadeIn(5000);


    fadeInAnimation("#intro-text", 3000, 300);
    fadeInAnimation("#part1", 3000, 300);
    fadeInAnimation("#part2", 3000, 300);
    fadeInAnimation("#part3", 3000, 300);
    fadeInAnimation("#part4", 3000, 300);
    fadeInAnimation("#struck", 4000, 400);
    fadeInAnimation("#prove", 4000, 400);
    fadeInAnimation("#text-box", 3000, 100);
    fadeInAnimation(".slash.left", 3000, 400);
    fadeInAnimation(".slash.right", 5000, 400);
    fadeInAnimation(".grendel", 3000, 300);
    fadeInAnimation(".monster", 4000, 300);


    function fadeInAnimation(selector, length, off) {
        var waypoint = new Waypoint({
            element: document.querySelector(selector),
            handler: function(direction) {
                $(selector).fadeTo(length, 1);
            },
            offset: off
        });

    };

    addClassAnimation(".change", "rToG", 500);
    $(".change").css("opacity", "1");
    addClassAnimation("#warrior", "animated fadeInRight", 300);
    addClassAnimation("#warrior2", "animated fadeInRight", 300);
    addClassAnimation("#scene-9", "animated fadeIn withBack", '90%');
    addClassAnimation(".beowulf", "animated fadeInRight", 200);

    function addClassAnimation(selector, className, off) {
        $(selector).css("opacity", "0");
        var waypoint = new Waypoint({
            element: document.querySelector(selector),
            handler: function(direction) {
                $(selector).addClass(className);
            },
            offset: off
        });
    };

    // $('#yourElement').one('webkitAnimationEnd mozAnimationEnd 
    //     MSAnimationEnd oanimationend animationend ', fall()); //TODO: add the grendel movement animations


    $("#arm").css({
        '-webkit-transform': 'rotate(' + -25 + 'deg)',
        'transform': 'rotate(' + -25 + 'deg)',
        '-moz-transform': 'rotate(' + -25 + 'deg)'
    });

    /* Falling animation */
    $(".fall").waypoint(function() {
        setTimeout(fall, 2000);
        this.disable();
    }, {
        offset: 650
    });

    function fall() {
        var y = 0;

        function loop() {
            y += .5;
            var ratio = (y * y) + y;

            $(".fall").css({
                '-webkit-transform': 'translate(0px,' + ratio + 'px)',
                'transform': 'translate(0px,' + ratio + 'px)',
                '-moz-transform': 'translate(0px,' + ratio + 'px)'
            });

            if (y > 10) {
                clearInterval(interval);
            }
        }
        var interval = setInterval(loop, 10);
    };

    /* Grendel animation */
    (function() {
        var iterator = (Math.PI / 2);

        jQuery.fn.rotate = function() {
            var angle = 10 * Math.cos(iterator);
            iterator = iterator + (Math.PI / 96);

            if (iterator === (Math.PI * 2)) {
                iterator = 0;
            }

            $(this).css({
                '-webkit-transform': 'rotate(' + angle + 'deg)',
                '-moz-transform': 'rotate(' + angle + 'deg)',
                '-ms-transform': 'rotate(' + angle + 'deg)',
                'transform': 'rotate(' + angle + 'deg)'
            });
        };

        function animate() {
            $('.arm').rotate();
        };

        setInterval(animate, 30);
    })();
});
