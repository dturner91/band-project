$(document).ready(function(){
    $('[data-toggle="popover"]').popover(); 
});


  $(document).ready(function(){
      var date_input=$('input[name="date"]');
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      var options={
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
      };
      date_input.datepicker(options);
    })

  $("#join").submit(function(){
        alert("Thankyou for joining!");
    });

//will work with something in ('')//
  $('').click(function() {
    $(this).slideToggle('slow');
});


