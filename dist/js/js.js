jQuery(document).ready(function($) {
    var movie_data = {
        zootopia: {
            name: "Zootopia",
            ratings: 8.1,
            disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda cupiditate molestias, hic vero harum eligendi id dolorum ea! Totam non, debitis minus ipsam fugiat repellendus impedit nulla vitae ipsum.",
            stars: 4
        },
        spectre: {
            name: "specre",
            ratings: 7.1,
            disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda cupiditate molestias, hic vero harum eligendi id dolorum ea! Totam non, debitis minus ipsam fugiat repellendus impedit nulla vitae ipsum.",
            stars: 4
        },
        Deadpool: {
            name: "Deadpool",
            ratings: 7.8,
            disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda cupiditate molestias, hic vero harum eligendi id dolorum ea! Totam non, debitis minus ipsam fugiat repellendus impedit nulla vitae ipsum.",
            stars: 4
        },
        Martion: {
            name: "Martion",
            ratings: 8.5,
            disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda cupiditate molestias, hic vero harum eligendi id dolorum ea! Totam non, debitis minus ipsam fugiat repellendus impedit nulla vitae ipsum.",
            stars: 5
        },
        Madmax: {
            name: "Madmax",
            ratings: 8.5,
            disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda cupiditate molestias, hic vero harum eligendi id dolorum ea! Totam non, debitis minus ipsam fugiat repellendus impedit nulla vitae ipsum.",
            stars: 5
        },
        Everest: {
            name: "Everest",
            ratings: 7.8,
            disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit assumenda cupiditate molestias, hic vero harum eligendi id dolorum ea! Totam non, debitis minus ipsam fugiat repellendus impedit nulla vitae ipsum.",
            stars: 4
        }

    };
    $('.marginPoster').click(function(event) {
        console.log($(this).find('.name').html());
    });
    $('.search').keyup(function(event) {
        console.log($(this).val());
    });

    $('.fa-bars').click(function(event) {
        if (window.innerWidth <= 750) {
            $('.menu ').css('left', '0%');
        } else {

        }
    });
    $('.fa-close').click(function(event) {
        if (window.innerWidth <= 750) {
            $('.menu ').css('left', '-100%');
        }
    });
});
