jQuery(function() {
    jQuery("#ss_menu .ss_heading").click(function() {
        //slide up all the link lists
        jQuery("#ss_menu .ss_cal_content").slideUp('fast');
        //slide down the link list below the clicked - only if its closed
        if (!jQuery(this).next().is(":visible")) {
            jQuery(this).next().slideDown('fast');
        }
    });
});
