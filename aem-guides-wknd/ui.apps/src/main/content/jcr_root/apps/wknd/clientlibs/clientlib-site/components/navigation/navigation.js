jQuery(function ($) {
    'use strict';
    function applyComponentStyles() {
        $("#header-navbar .cmp-navigation").not("[data-top-nav-processed = 'true']").each(function() {
            var nav = $(this).attr("data-top-nav-processed", true),
                $body = $('body');

            $('<div id="toggleNav">' +
            '<a href="#mobileNav" class="toggle"><i class="wkndicon wkndicon-ico-bm" aria-hidden="true"></i></a>' +
                '</div>'
            ).appendTo($body);

            $(
                '<div id="mobileNav" class="cmp-navigation--mobile">' +
                    '<nav class="cmp-navigation">' +
                        $(this).html() +
                    '</nav>' +
                '</div>'
            )
                .appendTo($body)
                .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'left',
                target: $body,
                visibleClass: 'navPanel-visible'
            });
        });
    }
    applyComponentStyles();
});