$(document).ready(function(){
    $('#admin-main-nav').find('li.active').removeClass('active');
    $('#admin-main-nav').find('a.current').parent().addClass('active');

    $('.colunm_name_filter').click(function(){
        $('#order').attr('value',$(this).attr('value'));
        $('#filter_form').submit();
    });



});
$(window).load(function() {
    //generic checkbox click
    $('div.chk-area').click(function(){
        that = $(this);
        setTimeout(function(){
            if($(that).hasClass( "chk-checked" )){
                $(that).next('input').attr('checked', true);
            }else{
                $(that).next('input').attr('checked', false);
            }
        },60000)
    });

    // clients filter!
    $('.all_none_filter').on('click',function(){
        if($(this).attr('id') == 'none_filter'){
            jQuery('.primary-filters .chk-area').each(function() {
                var that = this;
                setTimeout(function(){
                    $(that).removeClass('chk-checked');
                    $(that).addClass('chk-unchecked');
                    $(that).next('input').attr('checked', false);
                },100)
            });
        }
        else{
            jQuery('.primary-filters .chk-area').each(function() {
                var that = this;
                setTimeout(function(){
                    $(that).removeClass('chk-unchecked');
                    $(that).addClass('chk-checked');
                    $(that).next('input').attr('checked', true);
                },100)
            });
        }
    });

    $("input[type='text'],input[type='password']").each(function(){
        var ob = $(this);
        setTimeout(function(){
            var l = $(ob).val();
            if($.trim(l)!= '')
                $(ob).trigger("click");
        }, 700);
    });
    $( ":checkbox" ).prev().addClass('chk-focus');

    $("#franchisee_enable_agent_payment_feature").on('change',function(){
        if($(this).is(":checked")){
            $('.agent_payments').removeClass('hidden');
        }
        else{
            $('.agent_payments').addClass('hidden');
            $('.agent_payments #franchisee_new_payment_model').attr('checked', false);
            $('.agent_payments #franchisee_new_payment_model').prev().removeClass('chk-checked').addClass('chk-unchecked');

        }
    });

    $("#franchisee_enable_client_payment").on('change',function(){
        if($(this).is(":checked")){
            $('.client_payments').removeClass('hidden');
        }
        else{
            $('.client_payments').addClass('hidden');
            $('.client_payments #franchisee_client_payment').removeAttr('checked');
            $('.client_payments #franchisee_client_payment').prev().removeClass('chk-checked').addClass('chk-unchecked');

        }
    });

    var amount_element = $('.agent_payment #amount');
    var monthly_fee = parseFloat(amount_element.val());
    var annual_fee = parseFloat(amount_element.val()) * 10;
    var usage_fee_lbl_element = $('.usage_fee_lbl');
    var annual_usage_fee_element = $("#annual_usage_fee")
    annual_usage_fee_element.on('change',function(){
        if($(this).is(":checked")){
            amount_element.val(annual_fee.toFixed(2));
            usage_fee_lbl_element.text("Annual Usage Fee");
            annual_usage_fee_element.val('1');
        }
        else{
            amount_element.val(monthly_fee.toFixed(2));
            usage_fee_lbl_element.text("Monthly Usage Fee");
            annual_usage_fee_element.val('0');
        }
    });
    var agree_to_terms_element = $("#agree_to_terms")
    agree_to_terms_element.on('change',function(){
        if($(this).is(":checked")){
            agree_to_terms_element.val('1');
        }
        else{
            agree_to_terms_element.val('0');
        }
    });

    $('#agent_submit').on('click', function () {
        $('#loading').show();
        $('#loading .loading-text').text("Please be patient. \n Saving...");
    });
    //$("#admin-sidebar").mCustomScrollbar({theme:"light-thick"});

});
