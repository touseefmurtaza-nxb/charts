function set_default_values_to_and_from(obj1,obj2){
    $('#map_action_from_type_id').val(obj1.find('select').val());
    $('#new_map_action_from').val(obj1.find('select').first().find("option:selected").text());
    $('#map_action_to_type_id').val(obj2.find('select').val());
    $('#new_map_action_to').val(obj2.find('select').first().find("option:selected").text());
}

function perform_map_action_type_change(that){
    var type =  $(that).val();
    var form = $(that).closest('form');
    var to_div = form.find('#to_div');
    var from_div = form.find('#from_div');
    var to_investment_account = form.find('#to_investment_account');
    var investment_accounts_from = form.find('#investment_accounts_from');
    var wealth_acceleration_to = form.find('#wealth_acceleration_to');
    var income_acceleration_from = form.find('#income_acceleration_from');
    var wealth_acceleration_from = form.find('#wealth_acceleration_from');
    var debt_selection = form.find('#debt_selection');
    var to_expense_account = form.find('#to_expense_account');
    var to_mortgage_account = form.find('#to_mortgage_account');
    var bank_selection_from = form.find('#bank_selection_from');
    var bank_selection = form.find('#bank_selection');
    var to_insurance_account = form.find('#to_insurance_account');

    if (type == 'Income'){
        to_div.removeClass('hidden');
        income_acceleration_from.removeClass('hidden');
        investment_accounts_from.addClass('hidden');
        to_investment_account.addClass('hidden');

        wealth_acceleration_from.addClass('hidden');
        debt_selection.addClass('hidden');
        to_expense_account.addClass('hidden');
        to_mortgage_account.addClass('hidden');
        bank_selection_from.addClass('hidden');
        bank_selection.addClass('hidden');
        to_insurance_account.addClass('hidden');
        wealth_acceleration_to.addClass('hidden');

        $('#map_action_from_type_id').val(income_acceleration_from.find('select').val());
        $('#new_map_action_from').val(income_acceleration_from.find('select').first().find("option:selected").text());
        $('#new_map_action_to').val(to_div.find('input').val());
    }
    else if (type == 'Investment'){
        to_div.addClass('hidden');
        income_acceleration_from.addClass('hidden');
        investment_accounts_from.removeClass('hidden');
        to_investment_account.removeClass('hidden');

        wealth_acceleration_from.addClass('hidden');
        debt_selection.addClass('hidden');
        to_expense_account.addClass('hidden');
        to_mortgage_account.addClass('hidden');
        bank_selection_from.addClass('hidden');
        bank_selection.addClass('hidden');
        to_insurance_account.addClass('hidden');
        wealth_acceleration_to.addClass('hidden');
        set_default_values_to_and_from(investment_accounts_from,to_investment_account);
    }
    else if (type == 'Debt'){
        wealth_acceleration_from.removeClass('hidden');
        debt_selection.removeClass('hidden');

        investment_accounts_from.addClass('hidden');
        to_investment_account.addClass('hidden');

        to_div.addClass('hidden');
        income_acceleration_from.addClass('hidden');
        to_expense_account.addClass('hidden');
        to_mortgage_account.addClass('hidden');
        bank_selection_from.addClass('hidden');
        bank_selection.addClass('hidden');
        to_insurance_account.addClass('hidden');
        wealth_acceleration_to.addClass('hidden');

        set_default_values_to_and_from(wealth_acceleration_from,debt_selection);
    }
    else if (type == 'FutureInsuranceInvestment'){
        wealth_acceleration_from.removeClass('hidden');
        to_expense_account.removeClass('hidden');

        investment_accounts_from.addClass('hidden');
        to_investment_account.addClass('hidden');

        to_div.addClass('hidden');
        income_acceleration_from.addClass('hidden');
        debt_selection.addClass('hidden');
        to_mortgage_account.addClass('hidden');
        bank_selection_from.addClass('hidden');
        bank_selection.addClass('hidden');
        to_insurance_account.addClass('hidden');
        wealth_acceleration_to.addClass('hidden');
        set_default_values_to_and_from(wealth_acceleration_from,to_expense_account);
    }
    else if (type == 'Expense'){
        wealth_acceleration_from.removeClass('hidden');
        to_expense_account.addClass('hidden');

        investment_accounts_from.addClass('hidden');
        to_investment_account.addClass('hidden');

        to_div.addClass('hidden');
        income_acceleration_from.addClass('hidden');
        debt_selection.addClass('hidden')
        to_mortgage_account.addClass('hidden');
        bank_selection_from.addClass('hidden');
        bank_selection.addClass('hidden');
        to_insurance_account.addClass('hidden');
        wealth_acceleration_to.addClass('hidden');
        $('#map_action_from_type_id').val(wealth_acceleration_from.find('select').val());
        $('#new_map_action_from').val(wealth_acceleration_from.find('select').first().find("option:selected").text());
    }
    else if (type == 'Business'){
        to_mortgage_account.removeClass('hidden');
        wealth_acceleration_from.removeClass('hidden');
        to_expense_account.addClass('hidden');

        investment_accounts_from.addClass('hidden');
        to_investment_account.addClass('hidden');

        to_div.addClass('hidden');
        income_acceleration_from.addClass('hidden');
        debt_selection.addClass('hidden');

        bank_selection_from.addClass('hidden');
        bank_selection.addClass('hidden');
        to_insurance_account.addClass('hidden');
        wealth_acceleration_to.addClass('hidden');
        set_default_values_to_and_from(wealth_acceleration_from,to_mortgage_account);
    }
    else if (type == 'BankAccount'){
        bank_selection_from.removeClass('hidden');
        bank_selection.removeClass('hidden');

        to_mortgage_account.addClass('hidden');
        wealth_acceleration_from.addClass('hidden');
        to_expense_account.addClass('hidden');

        investment_accounts_from.addClass('hidden');
        to_investment_account.addClass('hidden');

        to_div.addClass('hidden');
        income_acceleration_from.addClass('hidden');
        debt_selection.addClass('hidden');
        to_insurance_account.addClass('hidden');
        wealth_acceleration_to.addClass('hidden');

        set_default_values_to_and_from(bank_selection_from,bank_selection);
    }
    else if (type == 'AdvanceLifeInsuranceProduct'){
        wealth_acceleration_from.removeClass('hidden');
        to_insurance_account.removeClass('hidden');

        bank_selection_from.addClass('hidden');
        bank_selection.addClass('hidden');

        to_mortgage_account.addClass('hidden');
        to_expense_account.addClass('hidden');

        investment_accounts_from.addClass('hidden');
        to_investment_account.addClass('hidden');

        to_div.addClass('hidden');
        income_acceleration_from.addClass('hidden');
        debt_selection.addClass('hidden');
        wealth_acceleration_to.addClass('hidden');
        set_default_values_to_and_from(wealth_acceleration_from,to_insurance_account);
    }
    else if (type == 'Map'){
        wealth_acceleration_to.removeClass('hidden');

        wealth_acceleration_from.addClass('hidden');
        to_insurance_account.addClass('hidden');

        bank_selection_from.addClass('hidden');
        bank_selection.addClass('hidden');

        to_mortgage_account.addClass('hidden');
        to_expense_account.addClass('hidden');

        investment_accounts_from.addClass('hidden');
        to_investment_account.addClass('hidden');

        to_div.addClass('hidden');
        income_acceleration_from.addClass('hidden');
        debt_selection.addClass('hidden');
        $('#map_action_to_type_id').val(wealth_acceleration_to.find('select').val());
        $('#new_map_action_to').val(wealth_acceleration_to.find('select').first().find("option:selected").text());
    }
}
function set_default_values_for_new_map_actions(){
    var default_from_type_value = $('.new_map_action_kind_id').val();
    jQuery('#map_action_from_type_id').val(default_from_type_value);
    jQuery('#new_map_action_from').val($('.new_map_action_kind_id').first().find("option:selected").text());

    var default_to_type_value = $('.from_action_id_type').val();
    jQuery('#map_action_to_type_id').val(default_to_type_value);
    jQuery('#new_map_action_to').val($('.from_action_id_type').first().find("option:selected").text());

    jQuery('#new_map_action_to').val($('#new_map_action_kind_id').find("option:selected").text());

    var default_to_type_value_second = $('.wa_to_drop_down').val();
    jQuery('#map_action_to_type_id').val(default_to_type_value_second);
    jQuery('#new_map_action_to').val($('.wa_to_drop_down').find("option:selected").text());
}


function show_receipt(receipt_id){
    var receipt_selector = "#" + receipt_id;
    jQuery(receipt_selector).modal("show");
}

//credit card form alert
function cc_disclaimer(e) {
    if (e.checked) {
        alert('Note: If this debt is a credit card, it may not be able to be paid with another credit card.');
    }
}

//for ALIP forms !!!
function perform_alip_investment_interval_change(interval,that){
    var interval_start_date = $(that).closest('form').find('.interval_start_date');
    var day_of_month = $(that).closest('form').find('.day_of_month');
    if(interval == '0'){
        day_of_month.removeClass('hidden');
        day_of_month.find('input').attr("disabled", false);

        interval_start_date.addClass('hidden');
        interval_start_date.find('input').attr("disabled", true);

    }else{
        day_of_month.addClass('hidden');
        day_of_month.find('input').attr("disabled", true);

        interval_start_date.removeClass('hidden');
        interval_start_date.find('input').attr("disabled", false);
    }
}
//for investment forms !!!
function perform_investment_interval_change(interval,that){
    var form = $(that).closest('form');
    if(interval == '0'){
        form.find('.day_of_month').removeClass('hidden');
        form.find('.day_of_month :input').attr("disabled", false);
        form.find('.second_payment_day_of_month').addClass('hidden');
        form.find('.second_payment_day_of_month :input').attr("disabled", true);
        form.find('.interval_start_date').addClass('hidden');
        form.find('.interval_start_date :input').attr("disabled", true);

    }else if(interval == '15'){

        form.find('.day_of_month').addClass('hidden');
        form.find('.day_of_month :input').attr("disabled", true);

        form.find('.second_payment_day_of_month').removeClass('hidden');
        form.find('.second_payment_day_of_month :input').attr("disabled", false);

        form.find('.interval_start_date').removeClass('hidden');
        form.find('.interval_start_date :input').attr("disabled", false);

    }else {
        form.find('.interval_start_date').removeClass('hidden');
        form.find('.interval_start_date :input').attr("disabled", false);
    }
}

//for mortgage forms !!!
function perform_mortgage_interval_change(interval,that){
    if(interval == '15'){
        $(that).closest('form').find('.second_payment_day_of_month').removeClass('hidden');
        $(that).closest('form').find('.second_payment_day_of_month :input').attr("disabled", false);
    }else{
        $(that).closest('form').find('.second_payment_day_of_month').addClass('hidden');
        $(that).closest('form').find('.second_payment_day_of_month :input').attr("disabled", true);
    }
}
//for income, expense and debt forms !!!
function perform_interval_change(interval,that){
    if(interval == '0'){
        $(that).closest('form').find('.day_of_month').removeClass('hidden');
        $(that).closest('form').find('.day_of_month :input').attr("disabled", false);
        $(that).closest('form').find('.second_payment_day_of_month').addClass('hidden');
        $(that).closest('form').find('.second_payment_day_of_month :input').attr("disabled", true);

    }else if(interval == '15'){
        $(that).closest('form').find('.day_of_month').addClass('hidden');
        $(that).closest('form').find('.day_of_month :input').attr("disabled", true);
        $(that).closest('form').find('.second_payment_day_of_month').removeClass('hidden');
        $(that).closest('form').find('.second_payment_day_of_month :input').attr("disabled", false);
    }else{
        $(that).closest('form').find('.day_of_month').addClass('hidden');
        $(that).closest('form').find('.day_of_month :input').attr("disabled", true);
        $(that).closest('form').find('.second_payment_day_of_month').addClass('hidden');
        $(that).closest('form').find('.second_payment_day_of_month :input').attr("disabled", true);
    }
}
$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();

    jQuery('#dashboard_maps_drop_down').change(function(){
        window.localStorage.setItem("selected_wa_for_dashboard", jQuery(this).val());
        var new_map_id = jQuery( "select option:selected" )[0].id.split('_')[2];
        jQuery('#dashboard_maps_drop_down').val(window.localStorage.getItem("selected_wa_for_dashboard"));
        window.location.href = window.location.pathname+"?"+jQuery.param({'dashboard_map_id': (new_map_id == 'cumulative' || new_map_id == 'select') ? 'cumulative' : new_map_id });
    });
    if (window.localStorage.getItem("selected_wa_for_dashboard") != null){
        jQuery('#dashboard_maps_drop_down').val(window.localStorage.getItem("selected_wa_for_dashboard"));
    }
    if (window.location.href.match("cumulative") == 'cumulative'){
        jQuery('#dashboard_maps_drop_down').find('option:eq(0)').prop('selected', true);
    }

    jQuery(function(){
        setTimeout(function(){
            jQuery(".flash_hash").hide();
            jQuery(".reconcile-recommended").hide();
        }, 60000);
    });


    $('.reconcilation_buttons').on('click', function () {
        $('#loading').show();
    });

    $('.notify-select').change(function (){
        var method = $(this).val();
        $('#show_notify_by_email').addClass('hidden');
        $('#show_notify_by_txt').addClass('hidden');
        $('#show_notify_by_txt_provider').addClass('hidden');

        if(method == 'email'){
            $("#show_notify_by_email").removeClass('hidden');
            $('#show_notify_by_txt').addClass('hidden');
            $('#show_notify_by_txt_provider').addClass('hidden');
        }
        else if(method == 'txt'){
            $('#show_notify_by_txt').removeClass('hidden');
            $('#show_notify_by_txt_provider').removeClass('hidden');
            $('#show_notify_by_email').addClass('hidden');
        }
        else if(method == 'both'){
            $('#show_notify_by_email').removeClass('hidden');
            $('#show_notify_by_txt').removeClass('hidden');
            $('#show_notify_by_txt_provider').removeClass('hidden');
        }
        else {
            $('#show_notify_by_email').addClass('hidden');
            $('#show_notify_by_txt').addClass('hidden');
            $('#show_notify_by_txt_provider').addClass('hidden');
        }

    })

    // WHAT IF...........................................
    $('#expense_row').removeClass('hidden');
    $('#expense_row_1').removeClass('hidden');

    $('.what-if-form #expense_interval_start_date:input').attr("disabled", true);
    $('.what-if-form #expense_interval_start_date:input').parent().parent().addClass('hidden');
    $('.what-if-form #expense_second_payment_date:input').attr("disabled", true);
    $('.what-if-form #expense_second_payment_date:input').parent().parent().addClass('hidden');
    $('.onetime_interval').parent().parent().addClass('hidden');
    $('.onetime_interval').attr("disabled", true);

    $('.what_if_type').change(function (){
        var method = $(this).val();
        if(method == 'Expense'){
            $('#expense_row').removeClass('hidden');
            $('#expense_row_1').removeClass('hidden');
            $('#expense_row :input').attr("disabled", false);
            $('#expense_row_1 :input').attr("disabled", false);
            $('.what-if-form #expense_ends_on:input').attr("disabled", false);
            $('.what-if-form #expense_ends_on:input').parent().parent().removeClass('hidden');
            $('#expense_interval').parent().parent().removeClass('hidden');
            $('#expense_interval').attr("disabled", false);

            $('#income_row').addClass('hidden');
            $('#income_row_1').addClass('hidden');
            $('#income_row :input').attr("disabled", true);
            $('#income_row_1 :input').attr("disabled", true);

            $('#debt_row').addClass('hidden');
            $('#debt_row :input').attr("disabled", true);

            $('.onetime_interval').parent().parent().addClass('hidden');
            $('.onetime_interval').attr("disabled", true);
        }
        else if(method == 'Expense_One'){
            $('#expense_row').removeClass('hidden');
            $('#expense_row_1').removeClass('hidden');
            $('#expense_row :input').attr("disabled", false);
            $('#expense_row_1 :input').attr("disabled", false);
            $('.what-if-form #expense_ends_on:input').attr("disabled", true);
            $('.what-if-form #expense_ends_on:input').parent().parent().addClass('hidden');

            $('#income_row').addClass('hidden');
            $('#income_row_1').addClass('hidden');
            $('#income_row :input').attr("disabled", true);
            $('#income_row_1 :input').attr("disabled", true);

            $('#debt_row').addClass('hidden');
            $('#debt_row :input').attr("disabled", true);

            $('.onetime_interval').parent().parent().removeClass('hidden');
            $('.onetime_interval').attr("disabled", false);
            $('.onetime_interval').prev().removeClass('select-disabled');

            $('#expense_interval').parent().parent().addClass('hidden');
            $('#expense_interval').attr("disabled", true);

        }
        else if(method == 'Income'){
            $('#income_row').removeClass('hidden');
            $('#income_row_1').removeClass('hidden');
            $('#income_row :input').attr("disabled", false);
            $('#income_row_1 :input').attr("disabled", false);
            $('.what-if-form #income_second_payment_date:input').attr("disabled", true);
            $('.what-if-form #income_second_payment_date:input').parent().parent().addClass('hidden');

            $('#expense_row').addClass('hidden');
            $('#expense_row_1').addClass('hidden');
            $('#expense_row :input').attr("disabled", true);
            $('#expense_row_1 :input').attr("disabled", true);

            $('#debt_row').addClass('hidden');
            $('#debt_row :input').attr("disabled", true);

            $('.onetime_interval').parent().parent().addClass('hidden');
            $('.onetime_interval').attr("disabled", true);

        }
        else { //Debt
            $('#debt_row').removeClass('hidden');
            $('#debt_row :input').attr("disabled", false);
            $('#expense_row').addClass('hidden');
            $('#expense_row_1').addClass('hidden');
            $('#expense_row :input').attr("disabled", true);
            $('#expense_row_1 :input').attr("disabled", true);

            $('#income_row').addClass('hidden');
            $('#income_row_1').addClass('hidden');
            $('#income_row :input').attr("disabled", true);
            $('#income_row_1 :input').attr("disabled", true);

            $('.onetime_interval').parent().parent().addClass('hidden');
            $('.onetime_interval').attr("disabled", true);
        }
    });

    // WHAT IF END...........................................
    $('.what_if_expense_interval').change(function (){
        var interval = $(this).val();
        if(interval == 0){
            $('#expense_interval_start_date').parent().parent().addClass('hidden');
            $('#expense_second_payment_date').parent().parent().addClass('hidden');
            $('#expense_second_payment_date').attr("disabled", true);
            $('#expense_interval_start_date').attr("disabled", true);
        }
        else if (interval == 15){
            $('#expense_interval_start_date').parent().parent().removeClass('hidden');
            $('#expense_second_payment_date').parent().parent().removeClass('hidden');
            $('#expense_ends_on').parent().parent().removeClass('hidden');
            $('#expense_second_payment_date').attr("disabled", false);
            $('#expense_interval_start_date').attr("disabled", false);
            $('#expense_ends_on').attr("disabled", false);
        }
        else{
            $('#expense_interval_start_date').parent().parent().removeClass('hidden');
            $('#expense_interval_start_date').attr("disabled", false);
            $('#expense_second_payment_date').parent().parent().addClass('hidden');
            $('#expense_second_payment_date').attr("disabled", true);

        }
    });


    $('.what_if_income_interval').change(function (){
        var interval = $(this).val();
        console.log(interval);
        if(interval == 0){
            $('#income_interval_start_date').parent().parent().removeClass('hidden');
            $('#income_second_payment_date').parent().parent().addClass('hidden');
            $('#income_second_payment_date').attr("disabled", true);
            $('#income_interval_start_date').attr("disabled", false);
        }
        else if (interval == 15){
            $('#income_interval_start_date').parent().parent().removeClass('hidden');
            $('#income_second_payment_date').parent().parent().removeClass('hidden');
            $('#income_ends_on').parent().parent().removeClass('hidden');
            $('#income_second_payment_date').attr("disabled", false);
            $('#income_interval_start_date').attr("disabled", false);
            $('#income_ends_on').attr("disabled", false);
        }
        else{
            $('#income_interval_start_date').parent().parent().removeClass('hidden');
            $('#income_interval_start_date').attr("disabled", false);
            $('#income_second_payment_date').parent().parent().addClass('hidden');
            $('#income_second_payment_date').attr("disabled", true);

        }
    });

    $('body').on('focus',".datetimepicker", function(){
        $('.datetimepicker').each(function(){
            $(this).datetimepicker({
                format: 'MM/DD/YYYY'
            });
        });
    });

    /* Improve interface for To Do List. */
    setTimeout(function(){
        $('.complete-task-form .chk-area').on('click', function(event, element) {
            console.log('checked');
            console.log($(this));
            that = $(this);
            setTimeout(function(){
                $(that).next('input').attr('checked', true);
                $(that).parent().submit();
            },100)
        });
    }, 500);

    setTimeout(function(){
        $('.new_event .chk-area').on('click', function(event, element) {
            that = $(this);
            setTimeout(function(){
                if($('.new_event .chk-area').hasClass( "chk-checked" )){
                    $(that).next('input').attr('checked', true);
                    jQuery('.recurring_event_interval_and_end_date').removeClass('hidden');
                }else{
                    $(that).next('input').attr('checked', false);
                    jQuery('.recurring_event_interval_and_end_date').addClass('hidden');
                }
            },100)
        });
    }, 500);

    jQuery('.select_wa').change(function(){
        var map_id_on_load = window.location.href.split('/').pop().split('?').shift();
        window.localStorage.setItem("selected_wa_for_report", jQuery(this).val());
        var new_map_id = $('.select_wa').find(":selected").attr('id').split('_').pop();
        var url = window.location.href;
        var new_url = url.split("/");
        if(new_map_id == 'cumulative' || new_map_id == 'select'){
            new_url = 'http://' + new_url[2] + '/' + new_url[3] + '/' + map_id_on_load+"?"+jQuery.param({'overall_map_report': 'overall' });
        }
        else{
            new_url = 'http://' + new_url[2] + '/' + new_url[3] + '/' + new_map_id;
        }
        window.location.href = new_url;
        jQuery('.select_wa').val(window.localStorage.getItem("selected_wa_for_report"));
    });
    if (window.localStorage.getItem("selected_wa_for_report") != null) {
        jQuery('.select_wa').val(window.localStorage.getItem("selected_wa_for_report"));
    }
    if (window.location.href.match("overall") == 'overall'){
        jQuery('.select_wa').find('option:eq(0)').prop('selected', true);
    }

    //Income and expense report category change
    $('#kind').on('change', function(){
        if($(this).val() == 'category'){
            $('div.js-only-category').removeClass('hidden');
            $('div.js-only-category :input').attr("disabled", false);
        }else{
            $('div.js-only-category').addClass('hidden');
            $('div.js-only-category :input').attr("disabled", true);
        }

    });


    $(document).on('click','.toggle_visibility',function() {
        $('#'+$(this).attr('id')).toggle('slide',function(){});
    });

   // FOR WAA.
    $(document).on('click','.toggle_visibility_waa',function() {
        $('tr#'+$(this).attr('id')).toggle('slide',function(){});
    });

    $(document).on('click','.toggle_new_map_form', function() {
        $('tr#map_add').toggle('slide',function(){});
    });

    setTimeout(function(){
        $(document).on('click','.chk-area', function(event, element) {
            that = $(this);
            setTimeout(function(){
                if($(that).hasClass( "chk-checked" )){
                    $(that).next('input').attr('checked', true);
                }else{
                    $(that).next('input').attr('checked', false);
                }
            },100)
        });
    }, 500);


    setTimeout(function(){
        $(document).on('click','.map_form .rad-area', function(event, element) {
            that = $(this);
            setTimeout(function(){
                if($(that).hasClass( "rad-checked" )){
                    if($(that).next().attr('id') == 'loc'){
                        $(that).next('input').attr('checked', true);
                        $(that).parent().next().find('input#ib').removeAttr('checked');
                        $('.ib_balance_and_interest').addClass('hidden');
                        $('.ib_balance_and_interest :input').attr("disabled", true);

                        $('.hide_show_loc').removeClass('hidden');
                        $('.hide_show_loc :input').attr("disabled", false);
                    }else{
                        $(that).next('input').attr('checked', true);
                        $(that).parent().prev().find('input#loc').removeAttr('checked');
                        $('.ib_balance_and_interest').removeClass('hidden');
                        $('.ib_balance_and_interest :input').attr("disabled", false);

                        $('.hide_show_loc').addClass('hidden');
                        $('.hide_show_loc :input').attr("disabled", true);

                    }

                }
            },100)
        });
    }, 500);

    $(document).on('click','.add_new_edit_object_link', function(){
        $("#"+$(this).attr("id").replace("link","form")).toggle();
    })

    //change income interval
    $(document).on('change','.change_income_interval', function(){
        var interval = $(this).val();
        perform_interval_change(interval,this);
    });

    //change expense interval
    $(document).on('change','.change_expense_interval', function(){
        var interval = $(this).val();
        perform_interval_change(interval,this);
    });

    //change debt interval
    $(document).on('change','.change_debt_interval', function(){
        var interval = $(this).val();
        perform_interval_change(interval,this);
    });

    //change interest only in debts!
    $(document).on('change','.interest_only_debt', function(){
        console.log('!!');
        debugger;
        if(this.checked) {
            var element = $(this).parent().parent().next();
            element.removeClass('hidden');
            element.find('input').attr("disabled", false);
            $('.interest_only_debt_fields').removeClass('hidden');
            $('.interest_only_debt_fields').find('input').attr("disabled", false);
        }else{
            var element = $(this).parent().parent().next();
            element.addClass('hidden');
            element.find('input').attr("disabled", true);
            $('.interest_only_debt_fields').addClass('hidden');
            $('.interest_only_debt_fields').find('input').attr("disabled", true);
        }
    });

    //change mortgage interval
    $(document).on('change','.change_mortagage_interval_', function(){
        var interval = $(this).val();
        perform_mortgage_interval_change(interval,this);
    });

    //change investment interval
    $(document).on('change','.change_investment_interval', function(){
        var interval = $(this).val();
        perform_investment_interval_change(interval,this);
    });

    //change ALIP interval
    $(document).on('change','.change_alip_interval', function(){
        var interval = $(this).val();
        perform_alip_investment_interval_change(interval,this);
    });


    //receipt uploading!
    if(window.File && window.FileList && window.FileReader)
    {
        $(document).on('change','.receipt_image_upload_class', function(event){
            console.log("I am changed!!!!");
            var files = event.target.files; //FileList object
            console.log(event.target.files.length);
            var this_that  = this;
            console.log("this:=>" + this_that);
            for (var i = 0, f; f = files[i]; i++)
            {
                var file = files[i];
                if(!file.type.match('image')) //Only images
                    continue;
                var filename = file.name;
                var file_type = file.type;
                var file_size = file.size;
                console.log(file.name + " "+file.type + "  " + file.size)
                var picReader = new FileReader();
                console.log("this:=>" + this_that);
                var desired_row = jQuery(this_that).closest("div.attachment_div");

                picReader.onload = (function (theFile) {
                    //use theFile

                    return function (event) {
                        var picFile = event.target;
                        dummyFile = picFile;
                        console.log(dummyFile);
                        var div = document.createElement("div");
                        var total_size = jQuery('.new_rows').length; // I am, at this Point! Add names of receipts to DB!
                        var res_html = "<div class='col-sm-4 col-md-12 new_rows'><span>" + escape(theFile.name) + "</span>"+
                            "<input type='hidden' name='receipt_codes[]' value='"+picFile.result+"' />"+
                            "<input type='hidden' name='file_names[]' value='"+escape(theFile.name)+"'' />"+
                            "<input type='hidden' name='file_types[]' value='"+theFile.type+"' />"+
                            "<input type='hidden' name='file_sizes[]' value='"+theFile.size+"' />"+
                            "&nbsp;<a href='javascript:;' class='remove_pict' style='color:#9c9c9c;'><i class='fa fa-trash' aria-hidden='true'></i></a>" + "</div><br/>" ;
                        console.log("this:=>" + this_that);
                        desired_row.after(res_html);

                        $(document).on('click','a.remove_pict', function(event){
                            $(this).closest("div").remove();
                        })
                    };
                })(f);



                picReader.readAsDataURL(file); //Read the image
            }
        });

    }
    else
    {
        alert("Your browser does not support File API");
    }

    //for receipts popups. Can be reused.
    $(document).on('click','.modals', function(){
        jQuery('#myModal1').modal("show");
    });

    //default value for first custom new map action for from and to.
    $('#map_action_from_type_id').val($('#income_acceleration_from').find('select').val());
    $('#new_map_action_from').val($('#income_acceleration_from').find('select').first().find("option:selected").text());
    $('#new_map_action_to').val($('#to_div').find('input').val());
    //......................

    //NEW MAP ACTIONS.
    $(document).on('change','#new_map_action_kind', function(){
        var type =  $(this).val();
        var form = $(this).closest('form');
        var to_div = form.find('#to_div');
        var from_div = form.find('#from_div');
        var to_investment_account = form.find('#to_investment_account');
        var investment_accounts_from = form.find('#investment_accounts_from');
        var wealth_acceleration_to = form.find('#wealth_acceleration_to');
        var income_acceleration_from = form.find('#income_acceleration_from');
        var wealth_acceleration_from = form.find('#wealth_acceleration_from');
        var debt_selection = form.find('#debt_selection');
        var to_expense_account = form.find('#to_expense_account');
        var to_mortgage_account = form.find('#to_mortgage_account');
        var bank_selection_from = form.find('#bank_selection_from');
        var bank_selection = form.find('#bank_selection');
        var to_insurance_account = form.find('#to_insurance_account');

        if (type == 'Income'){
            to_div.removeClass('hidden');
            income_acceleration_from.removeClass('hidden');
            investment_accounts_from.addClass('hidden');
            to_investment_account.addClass('hidden');

            wealth_acceleration_from.addClass('hidden');
            debt_selection.addClass('hidden');
            to_expense_account.addClass('hidden');
            to_mortgage_account.addClass('hidden');
            bank_selection_from.addClass('hidden');
            bank_selection.addClass('hidden');
            to_insurance_account.addClass('hidden');
            wealth_acceleration_to.addClass('hidden');

            $('#map_action_from_type_id').val(income_acceleration_from.find('select').val());
            $('#new_map_action_from').val(income_acceleration_from.find('select').first().find("option:selected").text());
            $('#new_map_action_to').val(to_div.find('input').val());
        }
        else if (type == 'Investment'){
            to_div.addClass('hidden');
            income_acceleration_from.addClass('hidden');
            investment_accounts_from.removeClass('hidden');
            to_investment_account.removeClass('hidden');

            wealth_acceleration_from.addClass('hidden');
            debt_selection.addClass('hidden');
            to_expense_account.addClass('hidden');
            to_mortgage_account.addClass('hidden');
            bank_selection_from.addClass('hidden');
            bank_selection.addClass('hidden');
            to_insurance_account.addClass('hidden');
            wealth_acceleration_to.addClass('hidden');
            set_default_values_to_and_from(investment_accounts_from,to_investment_account);
        }
        else if (type == 'Debt'){
            wealth_acceleration_from.removeClass('hidden');
            debt_selection.removeClass('hidden');

            investment_accounts_from.addClass('hidden');
            to_investment_account.addClass('hidden');

            to_div.addClass('hidden');
            income_acceleration_from.addClass('hidden');
            to_expense_account.addClass('hidden');
            to_mortgage_account.addClass('hidden');
            bank_selection_from.addClass('hidden');
            bank_selection.addClass('hidden');
            to_insurance_account.addClass('hidden');
            wealth_acceleration_to.addClass('hidden');

            set_default_values_to_and_from(wealth_acceleration_from,debt_selection);
        }
        else if (type == 'FutureInsuranceInvestment'){
            wealth_acceleration_from.removeClass('hidden');
            to_expense_account.removeClass('hidden');

            investment_accounts_from.addClass('hidden');
            to_investment_account.addClass('hidden');

            to_div.addClass('hidden');
            income_acceleration_from.addClass('hidden');
            debt_selection.addClass('hidden');
            to_mortgage_account.addClass('hidden');
            bank_selection_from.addClass('hidden');
            bank_selection.addClass('hidden');
            to_insurance_account.addClass('hidden');
            wealth_acceleration_to.addClass('hidden');
            set_default_values_to_and_from(wealth_acceleration_from,to_expense_account);
        }
        else if (type == 'Expense'){
            wealth_acceleration_from.removeClass('hidden');
            to_expense_account.addClass('hidden');

            investment_accounts_from.addClass('hidden');
            to_investment_account.addClass('hidden');

            to_div.addClass('hidden');
            income_acceleration_from.addClass('hidden');
            debt_selection.addClass('hidden')
            to_mortgage_account.addClass('hidden');
            bank_selection_from.addClass('hidden');
            bank_selection.addClass('hidden');
            to_insurance_account.addClass('hidden');
            wealth_acceleration_to.addClass('hidden');
            $('#map_action_from_type_id').val(wealth_acceleration_from.find('select').val());
            $('#new_map_action_from').val(wealth_acceleration_from.find('select').first().find("option:selected").text());
        }
        else if (type == 'Business'){
            to_mortgage_account.removeClass('hidden');
            wealth_acceleration_from.removeClass('hidden');
            to_expense_account.addClass('hidden');

            investment_accounts_from.addClass('hidden');
            to_investment_account.addClass('hidden');

            to_div.addClass('hidden');
            income_acceleration_from.addClass('hidden');
            debt_selection.addClass('hidden');

            bank_selection_from.addClass('hidden');
            bank_selection.addClass('hidden');
            to_insurance_account.addClass('hidden');
            wealth_acceleration_to.addClass('hidden');
            set_default_values_to_and_from(wealth_acceleration_from,to_mortgage_account);
        }
        else if (type == 'BankAccount'){
            bank_selection_from.removeClass('hidden');
            bank_selection.removeClass('hidden');

            to_mortgage_account.addClass('hidden');
            wealth_acceleration_from.addClass('hidden');
            to_expense_account.addClass('hidden');

            investment_accounts_from.addClass('hidden');
            to_investment_account.addClass('hidden');

            to_div.addClass('hidden');
            income_acceleration_from.addClass('hidden');
            debt_selection.addClass('hidden');
            to_insurance_account.addClass('hidden');
            wealth_acceleration_to.addClass('hidden');

            set_default_values_to_and_from(bank_selection_from,bank_selection);
        }
        else if (type == 'AdvanceLifeInsuranceProduct'){
            wealth_acceleration_from.removeClass('hidden');
            to_insurance_account.removeClass('hidden');

            bank_selection_from.addClass('hidden');
            bank_selection.addClass('hidden');

            to_mortgage_account.addClass('hidden');
            to_expense_account.addClass('hidden');

            investment_accounts_from.addClass('hidden');
            to_investment_account.addClass('hidden');

            to_div.addClass('hidden');
            income_acceleration_from.addClass('hidden');
            debt_selection.addClass('hidden');
            wealth_acceleration_to.addClass('hidden');
            set_default_values_to_and_from(wealth_acceleration_from,to_insurance_account);
        }
        else if (type == 'Map'){
            wealth_acceleration_to.removeClass('hidden');

            wealth_acceleration_from.addClass('hidden');
            to_insurance_account.addClass('hidden');

            bank_selection_from.addClass('hidden');
            bank_selection.addClass('hidden');

            to_mortgage_account.addClass('hidden');
            to_expense_account.addClass('hidden');

            investment_accounts_from.addClass('hidden');
            to_investment_account.addClass('hidden');

            to_div.addClass('hidden');
            income_acceleration_from.addClass('hidden');
            debt_selection.addClass('hidden');
            $('#map_action_to_type_id').val(wealth_acceleration_to.find('select').val());
            $('#new_map_action_to').val(wealth_acceleration_to.find('select').first().find("option:selected").text());
        }

    });
    // On change of from and to of new actions.
    $(document).on('change','.new_map_action_kind_id', function(){
        var from_type_value = jQuery(this).val();
        jQuery('#map_action_from_type_id').val(from_type_value);
        jQuery('#new_map_action_from').val(jQuery(this).find("option:selected").text());
    });

    $(document).on('change','.from_action_id_type', function(){
        var to_type_value = jQuery(this).val();
        jQuery('#map_action_to_type_id').val(to_type_value);
        jQuery('#new_map_action_to').val(jQuery(this).find("option:selected").text());
    });

    $(document).on('change','#new_map_action_kind_id', function(){
        jQuery('#new_map_action_to').val(jQuery(this).find("option:selected").text());
    });

    $(document).on('change','.wa_to_drop_down', function(){
        var to_type_value = jQuery(this).val();
        jQuery('#map_action_to_type_id').val(to_type_value);
        jQuery('#new_map_action_to').val(jQuery(this).find("option:selected").text());
    });

    //on change of WA account to get concerned WA account.
    $(document).on('change','#new_map_action_wa_select', function(){
        jQuery.ajax({
            type: "GET",
            url: "/load_map_actions",
            data: {map_id: jQuery(this).val()},
            beforeSend: function() {
                $('.spiner-svg').removeClass('hidden');
            },
            success: function(){
                $('tr#new_map_action_form_').toggle('slide',function(){});
                $('.spiner-svg').addClass('hidden');
            },
            error: function () {
            }
        });
    });
    $(".dashboard-widgt-holder").click(function(){
        $(".dashboard-widgt-holder").slideUp();
        $(".show-summary-holder").slideDown();
    });
    $(".dashboard-widgt-holder").click(function(e){
        e.stopPropagation();
    });
    $(".show-summary-holder").click(function(e){
        e.stopPropagation();
        $(this).slideUp();
        $(".dashboard-widgt-holder").slideDown();
    });
});
function check_area(that){
    if($(that).hasClass( "chk-checked" )){
        $(that).next('input').attr('checked', true);
    }else{
        $(that).next('input').attr('checked', false);
    }
}
$(window).load(function(){
    $('.chk-area').click( function() {
        that = this;
        setTimeout(function(){
            check_area(that);
        }, 200);
    });

    $('.cell_phone_and_provider').find('input').attr("disabled", false);
    $('#edit-personal .two_step .chk-area').on('click', function(event, element) {
        setTimeout(function(){
            if($('#edit-personal .two_step .chk-area').hasClass( "chk-checked" )){
                $('.cell_phone_and_provider').removeClass('hidden');
                $('.cell_phone_and_provider').find('input').attr("disabled", false);
            }else{
                $('.cell_phone_and_provider').addClass('hidden');
                $('.cell_phone_and_provider').find('input').attr("disabled", true);
            }
        }, 200);
    });

    $('.erase_and_reconcile_btn').on('click',function(){
        $('#loading').show();
    });

    $( ":checkbox" ).prev().addClass('chk-focus');

    $(document).on('click','#edit-financial .remove_pict', function(){
        if(confirm("Are you sure you want to delete?")){
            var prev_ele = $(this).prev()
            var that = $(this);
            jQuery.ajax({
                type: "DELETE",
                url: "/receipt_images/"+prev_ele.attr('onclick').replace(/\D/g, ''),
                success: function(){
                    prev_ele.remove();
                    $(that).remove();
                },
                error: function () {
                    alert("Something really went wrong!");
                }
            });
        }
    });

    var amount_element = $('.client_payment #amount');
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

    $(".play-video").click(function(e){
        e.stopPropagation();
        $('#agent_video').modal('show');
    });

    jQuery('#agent_video').on('hidden.bs.modal', function () {
        jwplayer().stop();
    });

});

