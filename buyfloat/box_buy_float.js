jQuery(document).ready(function () {

    jQuery(window).scroll(function () {
        var topScroll = Number(jQuery(window).scrollTop());

        if (topScroll >= 555) {
            if (!jQuery('.page-product .box-buy-hide').hasClass('box-buy-show')) {
                jQuery('.page-product .box-buy-hide').addClass('box-buy-show');
            }
        } else {
            if (jQuery('.page-product .box-buy-hide').hasClass('box-buy-show')) {
                jQuery('.page-product .box-buy-hide').removeClass('box-buy-show');
            }
        }
        
        if (topScroll < 555) {
            if (!jQuery('.page-product .box-buy-hide .cbb').hasClass('hide-label')) {
                jQuery('.page-product .box-buy-hide .cbb').addClass('hide-label');
            }
        }  else {
            if (jQuery('.page-product .box-buy-hide .cbb').hasClass('hide-label')) {
                jQuery('.page-product .box-buy-hide .cbb').removeClass('hide-label');
            }
        }
    });
    
});
