//Event.observe(window, 'load', function() {
//
//  /* Put cursor in first form box */
//  if (document.forms.length > 0) {Form.focusFirstElement(document.forms[0]);}
//
//  addFormListener();
//
//  /* Drop down menus */
//  $$('li.with-submenu').each(function(e) {
//    e.menuHideTimer = false;
//    e.observe('mouseover', function(event, element) {
//      e.select('ul.submenu').each(Element.show);
//      if (e.menuHideTimer) {
//        clearTimeout(e.menuHideTimer);
//      }
//    });
//    e.observe('mouseout', function(event, element){
//      e.menuHideTimer = setTimeout(function() {
//        e.select('ul.submenu').each(Element.hide);
//      }, 700);
//    });
//  });
//
//  /* Toggle Category stuff on Income and Expense Report */
//  if ($$('.js-only-category').size() > 0) {
//    $$('#kind')[0].observe('change', toggle_map_action_category);
//    toggle_map_action_category()
//  }
//
//  /* Improve interface for To Do List. */
//  if ($$('.complete-task-form').size() > 0) {
//    $$('.complete-task-form input[type=checkbox]').each(function(e) {
//      e.observe('click', function(event, element) {
//        this.form.submit();
//      });
//    });
//  }
//
//});
//
//function toggle_map_action_category(event, element) {
//  $$('.js-only-category').each(function(e) {
//    if ($F('kind') == 'category') {
//      Element.show(e);
//    } else {
//      Element.hide(e);
//    }
//  });
//}
//
///* For highlighting active rows */
//function highlight_row_on_focus(e) {
//  $(e).up("tr").addClassName("focused_row");
//}
//function unhighlight_row_on_blur(e) {
//  $(e).up("tr").removeClassName("focused_row");
//}
//
///* For opening the calendar for the right input */
//function getCalField(e) {
//  var i = $(e).previousSiblings().first();
//  if (i.tagName == 'INPUT') {return i;}
//  return i.childElements().first();
//}
//
///* To disable submit buttons after they have been clicked. */
//function addFormListener() {
//  $$('form').each(function(form) {
//    form.observe('submit', function() {
//      form.getInputs('submit').each(function(submit) {
//        submit.value = "Processing...";
//        submit.disable();
//      });
//    });
//  });
//}
//
///* For the create/edit map pages */
//function change_account_type(type, desired_form) {
//  $$('#' + desired_form +" "+ '.show_loc', '#' + desired_form +" "+ '.show_ib').each(function (e) {
//    if (e.hasClassName('show_' + type)) {
//      Element.show(e);
//    } else {
//      Element.hide(e);
//    }
//  });
//}
//function change_interval(e) {
//  if ($F(e) == '0') {
//    $(e.id + '_sdate').hide();
//    $(e.id + '_dom').show();
//    if ($(e.id + '_sdom') != null)
//      $(e.id + '_sdom').hide();
//  }
//
//  else {
//    $(e.id + '_dom').hide();
//    $(e.id + '_sdate').show();
//    if ($(e.id + '_sdom') !=  null){
//      $(e.id + '_sdom').hide();
//    }
//  }
//  if ($F(e) == '15') {
//    $(e.id + '_sdom').show();
//    //jQuery('.interval_start_date').addClass('required');
//  }
//}
//function change_expense_interval(e) {
//  if ($F(e) == '0') {
//    $(e.id + '_sdate').show();
//    $(e.id + '_dom').show();
//    $(e.id + '_second_date').hide();
//    jQuery('tr.interval_start_date').removeClass('required');
//    if ($(e.id + '_sdom') != null)
//      $(e.id + '_sdom').hide();
//  }
//
//  else {
//    $(e.id + '_second_date').hide();
//    $(e.id + '_dom').hide();
//    jQuery('.interval_start_date').addClass('required');
//    if ($(e.id + '_sdom') !=  null){
//      $(e.id + '_sdom').hide();
//    }
//  }
//  if ($F(e) == '15') {
//    $(e.id + '_second_date').show();
//    jQuery('.interval_start_date').addClass('required');
//  }
//}
//function change_income_interval(e) {
//  $(e.id + '_second_date').hide();
//  if ($F(e) == '0') {
//    $(e.id + '_dom').show();
//    jQuery('tr.interval_start_date').removeClass('required');
//  }
//  else {
//    $(e.id + '_dom').hide();
//    jQuery('.interval_start_date').addClass('required');
//  }
//  if ($F(e) == '15') {
//    $(e.id + '_second_date').show();
//    jQuery('.interval_start_date').addClass('required');
//  }
//
//}
//
//function change_debt_interval(e) {
//
//  var arr = ['15', '7', '14', '90', '180', '365']; // All intervals except monthly ==> interval_debt_options: [["Twice A Month", 15], ["Weekly", 7], ["Every 2 Weeks", 14], ["Quarterly", 90], ["Every 6 Months", 180], ["Yearly", 365]]
//  var flag = -1;
//  flag = jQuery.inArray($F(e),arr)
//  if (flag != -1) {
//    if ($F(e) == '15'){
//      jQuery(e)[0].closest('tr').next().next().next().show(); //second_payment_date
//    }
//    else {
//      jQuery(e)[0].closest('tr').next().next().next().hide(); //second_payment_date
//    }
//    jQuery(e)[0].closest('tr').next().hide(); //debt_day_of_month
//    jQuery(e)[0].closest('tr').next().next().show(); //interval_start_date
//    jQuery(e)[0].closest('tr').next().next().next().next().show(); //ends_on
//
//  }
//  else {
//    jQuery(e)[0].closest('tr').next().next().next().hide(); //second_payment_date
//    jQuery(e)[0].closest('tr').next().show(); //debt_day_of_month
//    jQuery(e)[0].closest('tr').next().next().show(); //interval_start_date
//    jQuery(e)[0].closest('tr').next().next().next().next().show(); //ends_on
//  }
//}
//
//function change_mortgage_interval(e){
//  if ($F(e) == '15'){
//    jQuery(e)[0].closest('tr').next().next().show(); //second_payment_date
//  }
//  else {
//    jQuery(e)[0].closest('tr').next().next().hide(); //second_payment_date
//  }
//}
//
//function change_debt(id) {
//  $$('#'+id+'-principal, #'+id+'-starts-on, #'+id+'-term, #'+id+'-canadian, #'+id+'-mortgage-interest-only-expires-on, #'+id+'-interest-only-expires-on, #'+id+'-balloon_payment_date').each(function (e) { e.hide(); });
//  if ($F(id+'-kind') == 'mortgage') {
//    $(''+id+'-canadian').show();
//  }
//  if ($(id+'-io') != null){
//    if ($(id+'-io').checked) {
//      $(id+'-interest-only-expires-on').show();
//    }
//  }
//  else{
//    if ($(id+'-mortgage-io').checked) {
//      $(id+'-mortgage-interest-only-expires-on').show();
//    }
//  }
//
//  if (($F(id+'-kind') == 'mortgage') || ($(id+'-io').checked)) {
//    $$('#'+id+'-principal, #'+id+'-starts-on, #'+id+'-term, #'+id+'-balloon_payment_date').each(function (e) { e.show(); });
//  }
//}
//function disable_investment_starts_on(e) {
//  if (e.checked) {
//    e.adjacent('input').first().disable();
//  } else {
//    e.adjacent('input').first().enable();
//  }
//}
//function cc_disclaimer(e) {
//  if (e.checked) {
//    alert('Note: If this debt is a credit card, it may not be able to be paid with another credit card.');
//  }
//}
//function confirm_and_show_loading(message) {
//  if (confirm(message)) {
//    $('loading').show();
//    return true;
//  } else {
//    return false;
//  }
//}
//
///* For edit client prefences */
//function change_notify_by(e) {
//  var method = $F(e);
//  $('show_notify_by_email').hide();
//  $('show_notify_by_txt').hide();
//  $('show_notify_by_txt_provider').hide();
//  if ($w('email both').include(method)) {
//    if ($F('client_notify_by_email').empty()) {
//      $('client_notify_by_email').value = $F('user_email');
//    }
//    $('show_notify_by_email').show();
//  }
//  if ($w('txt both').include(method)) {
//    if ($F('client_notify_by_txt').empty()) {
//      $('client_notify_by_txt').value = $F('client_phone_cell');
//    }
//    $('show_notify_by_txt').show();
//    $('show_notify_by_txt_provider').show();
//  }
//}
//
///* For reconciling */
//function toggle_readonly(e) {
//  $(e).readOnly = !$(e).readOnly;
//  all_confirmed = true;
//  $$('.confirmable').each(function(i) {
//    if (!i.checked) {all_confirmed = false;}
//  });
//  $('submit').disabled = !all_confirmed;
//}
//
///* For status filter on the agent's client list */
//function set_status_checkboxes_to(d) {
//  $$('input').each(function(e) {
//    if (e.id == 'status_' && e.type == 'checkbox') {
//      e.checked = d;
//    }
//  });
//}
//
///* For franchisee setup page */
//function toggle_text_field(e) {
//  $(e).readOnly = !$(e).readOnly;
//}
//
///* For What If Form */
//function change_what_if_object_class(e) {
//  $$(".what-if-form").each(function(f) {
//    ($F(e) == f.id) ? f.show() : f.hide();
//  });
//  jQuery(".house_expense").show();
//  jQuery(".onetime_interval").hide();
//  jQuery(".what_if_expense_interval").attr("disabled", false);
//  if((e) && ($F(e) == "Expense_One")){
//    jQuery("#Expense").show();
//    jQuery("#e_esdate").hide();
//    jQuery(".house_expense").hide();
//    jQuery(".onetime_interval").show();
//    jQuery(".what_if_expense_interval").attr("disabled", true);
//  }
//}
//Event.observe(window, 'load', function() {change_what_if_object_class($('what_if_object_class'))});
//jQuery(function(){
//  setTimeout(function(){
//    jQuery(".flash_hash").hide();
//    jQuery(".reconcile-recommended").hide();
//  }, 7000);
//});
//