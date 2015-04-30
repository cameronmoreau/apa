$("document").ready(function() {
    //Hide all the stuff to fade in
    $("#apa-img").hide();
    $("#accent-1").hide();
    //$("#intro-text").css("opacity", "0");
    //$(".heading").css("opacity", "0");
    $(".fadeIn").css("opacity", "0");

    $("#apa-img").fadeIn(3000);
    $("#accent-1").fadeIn(5000);


    fadeInAnimation("#intro-text", 3000, '50%');
    fadeInAnimation("#part1", 3000, '50%');
    fadeInAnimation("#part2", 3000, '50%');
    fadeInAnimation("#part3", 3000, '50%');
    fadeInAnimation("#part4", 3000, '50%');
    fadeInAnimation("#struck", 4000, '50%');
    fadeInAnimation("#prove", 4000, '40%');
    fadeInAnimation("#text-box", 3000, '50%');
    fadeInAnimation(".slash.left", 3000, '50%');
    fadeInAnimation(".slash.right", 5000, '50%');
    fadeInAnimation(".grendel", 3000, '50%');

    function fadeInAnimation(selector, length, off) {
        $(selector).waypoint(function() {
            $(selector).fadeTo(length, 1);
        }, {
            offset: off
        });
    };


    addClassAnimation(".change", "rToG", '30%');
    $(".change").css("opacity", "1");
    addClassAnimation("#warrior", "animated fadeInRight", '40%');
    addClassAnimation("#warrior2", "animated fadeInRight", '40%');
    addClassAnimation("#monster", "animated fadeInLeft", '40%');
    addClassAnimation("#scene-9", "animated fadeIn withBack", '30%');
    addClassAnimation(".beowulf", "animated fadeInRight", '30%');


    function addClassAnimation(selector, className, off) {
        $(selector).css("opacity", "0");
        $(selector).waypoint(function() {
            $(selector).addClass(className);
        }, {
            offset: off
        });
    };

    // $('#yourElement').one('webkitAnimationEnd mozAnimationEnd 
    //     MSAnimationEnd oanimationend animationend ', fall()); //TODO: add the grendel movement animations

    /* Falling animation */
    $(".fall").waypoint(function() {
        setTimeout(fall, 2000);
        this.disable();
    }, {
        offset: '50%'
    });

    function fall() {
        var y = 0;

        function loop() {
            y += .5;
            var ratio = (y * y) + y;

            $(".fall").css({
                '-webkit-transform': 'translate(0px,' + ratio + 'px)',
                'transform': 'translate(0px,' + ratio + 'px)'
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
