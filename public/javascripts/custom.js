$(document).ready(function(){

  $(".btn-menu").click(function(){
    $(this).next("ul").slideToggle();
  });

  // financial accordian
  $(".financial-panel h4").click(function(){
    $(".financial-panel h4").each(function(){
      $(this).find('i').removeClass("fa-eye-slash").addClass("fa-eye");
    });
    $(this).find('i').removeClass("fa-eye").addClass("fa-eye-slash");
    $(".financial-frame").slideUp("slow");
    if($(this).next(".financial-frame").is(":visible")){
      $(this).next(".financial-frame").slideUp();
      $(this).find("i").removeClass("fa-eye-slash").addClass("fa-eye");
    }
    else{
      $(this).next(".financial-frame").slideDown();
    }
    var that = this;
    setTimeout(function(){
      $('html, body').animate({ scrollTop: $(that).offset().top}, 500, 'linear');
    }, 800);
  });

  // tooltip
  $('.event-info').tooltip();

  $(".client-report-box h3").click(function(){
    $(".client-report-box h3").each(function(){
      console.log ("ali");
      $(this).next(".client-report-data").slideUp();
      $(this).find("i").removeClass("fa-eye-slash").addClass("fa-eye");
    });

    if($(this).next(".client-report-data").is(":visible")){
      $(this).next(".client-report-data").slideUp();
      $(this).find("i").removeClass("fa-eye-slash").addClass("fa-eye");
    }else{
      $(this).next(".client-report-data").slideDown();
      $(this).find("i").removeClass("fa-eye").addClass("fa-eye-slash");
    }
    var fireRefreshEventOnWindow = function () {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent('resize', true, false);
      window.dispatchEvent(evt);
    };
    fireRefreshEventOnWindow();
    var that = this;
    setTimeout(function(){
      $('html, body').animate({ scrollTop: $(that).offset().top}, 500, 'linear');
    }, 400);
  });

  // admin sidebar toggle

  $(".menu-icon").click(function(){
    //alert("hello");
    $("#admin-sidebar").toggleClass("animate-side");
  });



  // input focus
  $(document).on('focus', 'input', function(){
    $(this).addClass("input-filed");
  });
  $(document).on('blur', 'input', function(){
    if ($(this).val().length > 0 ){
      $(this).addClass("input-filed");

    }else{

      $(this).removeClass("input-filed");
    }
  });

  //$("input").focus(function() {
  //  $(this).addClass("input-filed");
  //});
  //$("input").blur(function() {
  //  if ($(this).val().length > 0 ){
  //    $(this).addClass("input-filed");
  //
  //  }else{
  //
  //    $(this).removeClass("input-filed");
  //  }
  //});



  $(document).on('tap', 'input', function(){
     $(this).addClass("input-filed");
  });

  $(document).on('touchstart click', 'input', function(){
     $(this).addClass("input-filed");
  });


  // input file
  $(document).on('click', '.browse', function(){
    var file = $(this).parent().parent().parent().find('.file');
    file.trigger('click');
  });
  $(document).on('change', '.file', function(){
    $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
  });





  $("body").click(function(){
    $(".theme-holder").slideUp();
  });
  // themes changes
  $(".choose-theme").click(function(e){
    e.stopPropagation();
    $(this).next(".theme-holder").slideToggle();
  });

  //
  $(".home-mobile-menu").click(function(){
    $(this).next("ul").slideToggle();
  });
});