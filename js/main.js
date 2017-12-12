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
    var owl;




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


    contentOne.load('workingHtml/anaPart.html',function() {
        owl = $('.owl-carousel').owlCarousel({
            loop  : true,
            margin: 10,
            nav   : true,
            items : 1,
            slideSpeed: 300,
            singleItem: true,
            autoPlay: 4000,
            dots: false,
            autoplay:true,
            navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>']

        });


    });

    <!--navigation false-->


    function owlInitialized(){
        console.log('vidimo se');
        console.log($(this)[0]._items);
    }

    contentTwo.load('workingHtml/radenkoPart.html',function(){

    });
    contentThree.load('workingHtml/markoPart.html');

    footerContainer.load('footer.html');
}());


