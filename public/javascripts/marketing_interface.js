//helper method.
function replace_number(new_number,given_name){
    old_number = given_name.match(/\d+/)[0];
    given_name = given_name.replace(old_number,new_number);
    return given_name;
}
// document ready method.
jQuery(function(){
    $('[data-toggle="tooltip"]').tooltip();
    jQuery("#add-additional-debts").on("click",function(){
        var total_rows = $(".debt-anaylsis-row-siblings").length + 1;
        var custom_debt_row = jQuery(".debt-anaylsis-row").last().clone();
        var custom_debt_row_siblings = $(".debt-anaylsis-row-siblings").last().clone();
        str_html = '';
        for(var i = total_rows; i < total_rows+5 ; i++) {
            $(custom_debt_row).find("strong").each(function(){
                $(this).html(replace_number(i,$(this).html()));
            })
            str_html+="<tr class='.debt-anaylsis-row'>"+$(custom_debt_row).html()+"</tr>";
            str_html+='<tr class="debt-anaylsis-row-siblings">';
            $(custom_debt_row_siblings).find("input.debt_fields").each(function(a,j){
                $(this).attr("name",replace_number(i,$(this).attr("name")));
                $(this).attr("id",replace_number(i,$(this).attr("id")));
            })
            str_html+=$(custom_debt_row_siblings).html();
            str_html+='</tr>';
        }
        $("table.debt-table tbody").append(str_html);
    });

    jQuery("#add-additional-mortgage").on("click",function(){
        var mortgage_count = jQuery(".mortgage_info_set").length + 1;
        var custom_mortgage_row = jQuery(".mortgage_info_set").last().clone();
        custom_mortgage_row.find("input").each(function( index ) {
            jQuery( this ).attr("id", jQuery( this ).attr("id").replace(mortgage_count-2, mortgage_count-1));
            jQuery( this ).attr("name", jQuery( this ).attr("name").replace(mortgage_count-2, mortgage_count-1));
            jQuery( this ).val("");
        });
        custom_mortgage_row.find("h2").text("Mortgage #"+mortgage_count);
        $('.add-additional-mortgage-parent-div').before(custom_mortgage_row);
    });

    setTimeout(function(){
        jQuery(".flash_hash").hide();
        jQuery(".error_div").hide();
    }, 60000);

    if ($('.scroll-down')[0] != undefined){
        debugger;
        $('html, body').animate({ scrollTop: $('.scroll-down').offset().top}, 800, 'linear');
    }
});

$(window).load(function() {
    $("input[type='text'],input[type='password']").each(function(){
        var ob = $(this);
        setTimeout(function(){
            var l = $(ob).val();
            if($.trim(l)!= '')
                $(ob).trigger("click");
        }, 700);
    });

    var offset = 250;
    var duration = 300;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".back-to-top").fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
});