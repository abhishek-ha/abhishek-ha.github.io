$("form").on("change", ".file-upload-field", function(){ 
    $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, '') );
});

 $(function() {
$( "#datepicker" ).datepicker();
});


'use strict';

;( function( $, window, document, undefined )
{
  $( '.inputfile' ).each( function()
  {
    var $input   = $( this ),
      $label   = $input.next( 'label' ),
      labelVal = $label.html();

    $input.on( 'change', function( e )
    {
      var fileName = '';

      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else if( e.target.value )
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        $label.find( '.archive-name' ).html( fileName );
      else
        $label.html( labelVal );
    });

    // Firefox bug fix
    $input
    .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
    .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
  });
})( jQuery, window, document );


// accordian



$(document).ready(function(){
  $('.definebuckit_accordian > li > .answer').hide();
    
  $('.definebuckit_accordian > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".definebuckit_accordian > li.active .answer").slideUp();
      $(".definebuckit_accordian > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });
  
});

// end accordian


// start define bucket tab

$(document).ready(function(){
$("#test").click(function(){
    $(".testbox").show();
     $(".scanbox").hide();
      $(".packagebox").hide();
  });
$("#scan").click(function(){
   $(".testbox").hide();
     $(".scanbox").show();
      $(".packagebox").hide();
  });

$("#package").click(function(){
   $(".testbox").hide();
     $(".scanbox").hide();
      $(".packagebox").show();
  });

 });








