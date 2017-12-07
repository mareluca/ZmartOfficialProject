/**
 * User: Agenzzia
 * Web:  www.agenzzia.com
 * Date: 5/31/2017
 * Time: 11:55 AM
 */
"use strict";
(function() {
    var mobileMenuTrigger = $('.navigation-trigger a:last-child');

    /**
     * events
     */

    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');

    var contentOne = $('.contentOne');
    var contentTwo = $('.contentTwo');
    var contentThree = $('.contentThree');





    headerContainer.load('header.html', function() {
        var mobileMenuTrigger = $('.navigation-trigger a:last-child');
        if(utilities.IsExisty(mobileMenuTrigger)){
            mobileMenuTrigger.click(function(ev) {
                var linksContainer = $('.mobile-links-list-container');
                var currentState = linksContainer.css('display');
                linksContainer.slideToggle();
                var icon = $(this).find('i');
                switch(currentState) {
                    case 'none':
                        icon.removeClass();
                        icon.addClass('fa fa-times');
                        return false;
                        break;
                    case 'block':
                        icon.removeClass();
                        icon.addClass('fa fa-bars');
                        break;
                }

            });
        }
    });


    contentOne.load('workingHtml/anaPart.html',function(){
        var owl = $(".owl-carousel").owlCarousel(
            {
                autoWidth         : true,
                loop              : true,
                smartSpeed        : 1500,
                autoplay          : true,
                autoplayTimeout   : 3000,
                autoplayHoverPause: true,
                items             : 1,
                onInitialized:owlInitialized
            }
        );
    });
    
    function owlInitialized(){
        console.log('vidimo se');
        console.log($(this)[0]._items);
    }

    contentTwo.load('workingHtml/radenkoPart.html',function(){

    });
    contentThree.load('workingHtml/markoPart.html');

    footerContainer.load('footer.html');
}());


